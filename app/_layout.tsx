import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { ThemedAppBar } from "@/components/app-bar";
import { SnackbarProvider } from "@/providers/snackbar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { StorageProvider } from "@/providers/storage";

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient({
  defaultOptions: {},
});

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // const [loaded] = useFonts({
  //   SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  // });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  const paperTheme = colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <StorageProvider>
          <SnackbarProvider>
            <QueryClientProvider client={queryClient}>
              <StatusBar style="auto" />
              <Stack
                screenOptions={{
                  animation: "slide_from_right",
                  header: ThemedAppBar,
                }}
              >
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                  name="details"
                  options={{ title: "Current Weather" }}
                />
              </Stack>
            </QueryClientProvider>
          </SnackbarProvider>
        </StorageProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
