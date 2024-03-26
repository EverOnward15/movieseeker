import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import DetailsPage from '~/components/Details';

const Page = () => {
    const {id} = useLocalSearchParams<{id:string}>();

    console.log("🚀 ~ Page ~ id:", id, )
  return (
    <DetailsPage id={id} media="tv"></DetailsPage>
  )
}

export default Page