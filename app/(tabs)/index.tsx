import { useState } from "react";
import { useRouter } from "expo-router";
import { ScrollView, View, StyleSheet } from "react-native";
import {
  Searchbar,
  Text,
  List,
  ActivityIndicator,
  useTheme,
} from "react-native-paper";

import { CurrentLocationButton } from "@/components/current-location-button";

import { useSearchLocation } from "@/hooks/location";
import { Location } from "@/types/location";

export default function HomeScreen() {
  const theme = useTheme();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const { data: locations, isLoading } = useSearchLocation(searchQuery);

  const onLocationPressed = (location: Location) => {
    router.push({
      pathname: "/details",
      params: {
        lat: location.lat,
        lng: location.lon,
      },
    });
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Searchbar
        placeholder="Search for a city..."
        onChangeText={setSearchQuery}
        value={searchQuery}
        loading={isLoading}
      />

      {!searchQuery && <CurrentLocationButton />}

      {isLoading ? (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" />
        </View>
      ) : locations && locations.length ? (
        <ScrollView style={{ marginTop: 10 }}>
          {locations.map((location) => (
            <List.Item
              key={location.id}
              title={location.name}
              description={location.region}
              onPress={() => onLocationPressed(location)}
            />
          ))}
        </ScrollView>
      ) : searchQuery ? (
        <View style={styles.centerContainer}>
          <Text>No cities found</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
