import { Appbar } from "react-native-paper";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { getHeaderTitle } from "@react-navigation/elements";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

export function ThemedAppBar({
  route,
  options,
  navigation,
}: NativeStackHeaderProps | BottomTabHeaderProps) {
  const canGoBack = navigation.canGoBack();
  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {canGoBack && <Appbar.BackAction onPress={navigation.goBack} />}
      <Appbar.Content title={title} titleStyle={{ fontWeight: "bold" }} />
    </Appbar.Header>
  );
}
