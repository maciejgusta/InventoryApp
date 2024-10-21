import {Text, View, Pressable} from 'react-native';
import {Link, router} from 'expo-router';

const HomePage = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home Page</Text>
            <Link href="/users/1">Go to user1</Link>
            <Pressable onPress={() => router.push("/users/2")}>
                <Text>Go to user2</Text>
            </Pressable>
        </View>
    )
}

export default HomePage;