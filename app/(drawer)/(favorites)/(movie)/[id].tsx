import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import DetailsPage from '~/components/Details';

const Page = () => {
    const {id} = useLocalSearchParams<{id:string}>();

  return (
    <DetailsPage id={id} media="movie"></DetailsPage>
  )
}

export default Page