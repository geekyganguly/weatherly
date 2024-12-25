import { View } from "react-native";
import { Appbar } from "react-native-paper";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { getHeaderTitle } from "@react-navigation/elements";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

import { OfflineIndicator } from "@/components/offline-indicator";

export function ThemedAppBar({
  route,
  options,
  navigation,
}: NativeStackHeaderProps | BottomTabHeaderProps) {
  const canGoBack = navigation.canGoBack();
  const title = getHeaderTitle(options, route.name);

  return (
    <View>
      <Appbar.Header mode="small">
        {canGoBack && <Appbar.BackAction onPress={navigation.goBack} />}
        <Appbar.Content title={title} titleStyle={{ fontWeight: "bold" }} />
      </Appbar.Header>

      <OfflineIndicator />
    </View>
  );
}
