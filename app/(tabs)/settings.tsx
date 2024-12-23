import { View, StyleSheet } from "react-native";
import { Dropdown } from "react-native-paper-dropdown";
import {
  Divider,
  Surface,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import { useStorage } from "@/hooks/storage";

export default function settings() {
  const theme = useTheme();

  const {
    tempUnit,
    windUnit,
    pressureUnit,
    setTempUnit,
    setWindUnit,
    setPressureUnit,
  } = useStorage();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Surface mode="flat" style={[styles.subContainer, {}]}>
        <Text variant="labelLarge">Temperature Unit</Text>

        <Dropdown
          options={[
            { label: "Celsius", value: "celsius" },
            { label: "Fahrenheit", value: "fahrenheit" },
          ]}
          value={tempUnit}
          onSelect={setTempUnit}
          mode="outlined"
          hideMenuHeader
          CustomDropdownInput={(props) => (
            <TextInput
              {...props}
              value={props.selectedLabel}
              right={props.rightIcon}
              editable={false}
              dense
            />
          )}
        />
      </Surface>

      <Divider />

      <Surface mode="flat" style={[styles.subContainer, {}]}>
        <Text variant="labelLarge">Wind Speed Unit</Text>

        <Dropdown
          options={[
            { label: "Miles per hour", value: "mph" },
            { label: "Kilometer per hour", value: "kph" },
          ]}
          value={windUnit}
          onSelect={setWindUnit}
          mode="outlined"
          hideMenuHeader
          CustomDropdownInput={(props) => (
            <TextInput
              {...props}
              value={props.selectedLabel}
              right={props.rightIcon}
              editable={false}
              dense
            />
          )}
        />
      </Surface>

      <Divider />

      <Surface mode="flat" style={[styles.subContainer, {}]}>
        <Text variant="labelLarge">Pressure Unit</Text>

        <Dropdown
          options={[
            { label: "Millibars", value: "millibars" },
            { label: "Inches", value: "inches" },
          ]}
          value={pressureUnit}
          onSelect={setPressureUnit}
          mode="outlined"
          hideMenuHeader
          CustomDropdownInput={(props) => (
            <TextInput
              {...props}
              value={props.selectedLabel}
              right={props.rightIcon}
              editable={false}
              dense
            />
          )}
        />
      </Surface>

      <Divider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    gap: 8,
    padding: 16,
  },
});
