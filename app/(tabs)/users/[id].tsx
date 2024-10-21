import { useLocalSearchParams } from 'expo-router';
import {Text, View} from 'react-native';

const UserPage = () => {
    const {id} = useLocalSearchParams<{ id: string}>(); //type specification not obligatory
    return (
        <View>
            <Text>User Page - {id}</Text>
        </View>
    )
}

export default UserPage;