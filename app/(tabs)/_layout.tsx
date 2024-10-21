import { Tabs } from 'expo-router';

const RouteLayout = () => {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{
            headerTitle: "Home",
            title: "Home"}}/>
        <Tabs.Screen name="users/[id]" options={{
            headerTitle: "User Page",
            title: "User"}}/>
    </Tabs>
  );
}

export default RouteLayout;