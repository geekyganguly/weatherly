import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from "react-native-paper";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "react-native-reanimated";

import { ThemedAppBar } from "@/components/app-bar";
import { SnackbarProvider } from "@/providers/snackbar";
import { StorageProvider } from "@/providers/storage";

const queryClient = new QueryClient();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const paperTheme = colorScheme === "dark" ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={paperTheme}>
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
    </PaperProvider>
  );
}
