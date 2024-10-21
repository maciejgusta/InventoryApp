import { Stack } from 'expo-router';

const RouteLayout = () => {
  return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{
            headerShown: false}}/>
    </Stack>
  );
}

export default RouteLayout;