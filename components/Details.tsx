import { Button, Text } from 'tamagui';
import React from 'react';
import { getMovieDetails } from '~/services/api';
import { useQuery } from '@tanstack/react-query';
import { Main } from 'tamagui';
import { ScrollView } from 'tamagui';
import { ImageBackground } from 'react-native';
import { YStack } from 'tamagui';
import { H1, Paragraph } from 'tamagui';
import { Image } from 'tamagui';
import { MMKV, useMMKV, useMMKVBoolean, useMMKVObject } from 'react-native-mmkv';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { red, size } from '@tamagui/themes';

type DetailsPageProps = {
  id: string;
  media: string;
};

const DetailsPage = ({ id, media }: DetailsPageProps) => {
 
    const [isFavorite, setIsFavorite] = useMMKVBoolean(`favorite-${id}`);
    const [favorites, setFavorites] = useMMKVObject("favorites");
  const movieQuery = useQuery({
    queryKey: [media, id],
    queryFn: () => getMovieDetails(+id, media),
  });
  
  const toggleFavorite = () => {
    const current = favorites || [];
    if (!isFavorite) {
        setFavorites([...current, {
            id, 
            media,
            thumb: movieQuery.data?.poster_path,
            name: movieQuery.data?.title || movieQuery.data?.name,
        },]);
    }
    else {
        setFavorites(current.filter((fav) => fav.id !== id || fav.media !== media));
    }
    setIsFavorite(!isFavorite);
  }
  return (
    <Main>
        <Stack.Screen options={{
            headerRight: () => (
                <Button unstyled onPress={toggleFavorite}>
                    <Ionicons name={isFavorite ? "heart" : "heart-outline"} size={24} color="red"/>
                </Button>
            )
        }}></Stack.Screen>
    <ScrollView>
      <ImageBackground
        height={500}
        source={{
          uri: `https://images.unsplash.com/photo-1487088678257-3a541e6e3922?w=1440&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ymxhbmt8ZW58MHx8MHx8fDA%3D`,
        }}>
        <Image
          style={{ width: 150, height: 200, marginLeft: 115 }}
          $gtSm={{ height: 400, width: 300, ml: 590 }}
          source={{
            uri: `https://image.tmdb.org/t/p/w400${movieQuery.data?.poster_path}`,
          }}></Image>
      </ImageBackground>

      <YStack
        p={10}
        $gtSm={{ ml: 590, width: 300 }}
        animation={'lazy'}
        enterStyle={{
          opacity: 0,
          y: 10,
        }}>
        <H1 color={'$blue7'}>
          {movieQuery.data?.title || movieQuery.data?.name}
          <Text fontSize={16}>
            {new Date(
              movieQuery.data?.release_date! || movieQuery.data?.first_air_date!
            ).getFullYear()}
          </Text>
        </H1>
        <Paragraph theme={'alt2'}>{movieQuery.data?.tagline}</Paragraph>
        <Text fontSize={16}>{movieQuery.data?.overview}</Text>
      </YStack>
    </ScrollView>
    </Main>
  );
};

export default DetailsPage;
