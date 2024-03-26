import { Link } from "expo-router"
import { MovieDetail, Result } from "~/interfaces/apiresults"
import { View, Text, Card, YStack } from "tamagui"
import { Image } from "tamagui"
import { Paragraph } from "tamagui"

type MovieCardProps = {
    movie: MovieDetail
}


const MovieCard = ({movie}: MovieCardProps) => (
    <Link href={`/(drawer)/(home)/(${movie.media_type})/${movie.id}`}asChild>
        <Card 
        animation={"bouncy"}
        hoverStyle={{scale: 0.925}}
        pressStyle={{scale: 0.925}}
        elevate width={150} height={260} scale={0.9}>
            <Card.Header p={0}>
                <Image 
                alt={movie.title}
                style={{width: 150, height: 200}}
                source={{uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}`}}></Image>
            </Card.Header>
            <Card.Footer p={5}>
                <YStack>
                    <Text 
                    fontSize={18}
                    color={"lightblue"}>
                        {movie.title || movie.name} 
                    </Text>
                    <Paragraph>{new Date(movie.release_date! || movie.first_air_date!).getFullYear()} {(movie.media_type === "movie")? " (Movie)" : " (TV)"} </Paragraph>
                </YStack>
            </Card.Footer>
        </Card>
    </Link>
)

export default MovieCard;
