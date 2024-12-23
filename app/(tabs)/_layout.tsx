import { Tabs } from "expo-router";
import { Icon, useTheme } from "react-native-paper";

import { ThemedAppBar } from "@/components/app-bar";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarActiveBackgroundColor: theme.colors.background,
        tabBarInactiveTintColor: theme.colors.secondary,
        tabBarInactiveBackgroundColor: theme.colors.background,
        header: ThemedAppBar,
      }}
      initialRouteName="index"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "Weatherly",
          tabBarIcon: (props) => <Icon source="home" {...props} />,
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: (props) => <Icon source="cog" {...props} />,
        }}
      />
    </Tabs>
  );
}
