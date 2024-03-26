import { View, Text } from 'react-native'
import React from 'react'
import { useMMKVObject } from 'react-native-mmkv';
import { ListItem, ScrollView } from 'tamagui';
import { Container, Main } from '~/tamagui.config';
import { Link } from 'expo-router';
import { Favorite } from '~/interfaces/favorites';
import { Image } from 'tamagui';




const favorites = () => {
  const [favorites, setFavorites] = useMMKVObject("favorites");

  
 
  
  return (
    <Main>
          <ScrollView>
            <Container>
            {favorites?.map((fav) => (
              <Link key={fav.id} href={`/(drawer)/(favorites)/${"movie" ? "(movie)" : "(tv)"}/${fav.id}`} asChild>
                <ListItem 
                theme={"blue_alt1"}
                backgroundColor={"$gray11"}
                size={"$6"}
                title={fav.name} 
                icon={  ()=> (
                  <Image 
                  style={{width:50, height:70}}
                  source={{uri: `https://image.tmdb.org/t/p/w400${fav.thumb}`}}></Image>
                  )}>
                </ListItem>
              </Link>
            ))}
            </Container>
          </ScrollView>
    </Main>
  )
}

export default favorites