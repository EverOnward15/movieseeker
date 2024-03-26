import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Container, Title, Main, Subtitle } from '~/tamagui.config';
import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { getSearchResults, getTrending } from '~/services/api';
import { ScrollView, Spinner, YStack } from 'tamagui';
import { Input } from 'tamagui';
import MovieCard from '~/components/MovieCard';
import useDebounce from '~/utils/useDebounce';

const Home = () => {
    const [searchString, setSearchString] = useState("");
    const debouncedString = useDebounce(searchString, 300);
    const popularQuery = useQuery({
        queryKey: ["trending"],
        queryFn: getTrending,
    });

    const searchQuery = useQuery({
        queryKey: ["search", searchString],
        queryFn: () => getSearchResults(debouncedString),
        enabled: debouncedString.length > 0,
    });

    return (
        <Main>
            <ImageBackground 
                source={{uri: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=3125&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} 
                style={{width: "100%", height: 200}}
            >
                <Container>
                    <YStack>
                        <Title 
                            pt={10}
                            pb={10}
                            ml={20}
                            enterStyle={{
                                opacity: 0,
                                scale: 1.5,
                                y: -10,
                            }}
                            animation="lazy"
                            color="#fff"
                            $gtSm={{ml: 534, fontSize: 80, letterSpacing: 10}}
                        >
                            Trending
                        </Title>
                        <Input 
                            placeholderTextColor={'#fff'}
                            borderWidth={2}
                            value={searchString}
                            onChangeText={(text) => setSearchString(text)}
                            placeholder="Search for a movie, TV show, person..."
                            $gtSm={{size: '$4', width: "$20", ml:590}}
                        />
                    </YStack>
                </Container>
            </ImageBackground>
            <Subtitle p={20} pl={75} $gtSm={{ml:590}}>
                {(searchQuery.data?.results && searchString!=="") ? "Search Results" : "Popular Now"}
            </Subtitle>
            {(popularQuery.isLoading || searchQuery.isLoading) && <Spinner size='small' color={"#fd014c"} />}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {(searchQuery.data?.results && searchString !=="") ? (
                    <>
                        {searchQuery.data?.results.map((item) => (
                            <MovieCard key={item.id} movie={item} />
                        ))}
                    </>
                ) : (
                    <>
                        {popularQuery.data?.results && (
                            <>
                                {popularQuery.data?.results.map((item) => (
                                    <MovieCard key={item.id} movie={item} />
                                ))}
                            </>
                        )}
                    </>
                )}
            </ScrollView>
        </Main>
    );
}

export default Home;
