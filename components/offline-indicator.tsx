import { StyleSheet } from "react-native";
import { Text, Surface, Icon, useTheme } from "react-native-paper";

import { useNetworkStatus } from "@/hooks/network-status";

export function OfflineIndicator() {
  const theme = useTheme();
  const { isConnected } = useNetworkStatus();

  if (isConnected) return null;

  return (
    <Surface
      style={[styles.container, { backgroundColor: theme.colors.error }]}
    >
      <Icon source="cloud-off-outline" size={20} color={theme.colors.onError} />
      <Text style={{ color: theme.colors.onError }}>
        No Internet Connection
      </Text>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
