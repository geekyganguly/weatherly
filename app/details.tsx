import { useLocalSearchParams } from "expo-router";
import { Icon, Surface, Text, useTheme } from "react-native-paper";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";

import { useStorage } from "@/hooks/storage";
import { useCurrentWeather } from "@/hooks/weather";
import { useNetworkStatus } from "@/hooks/network-status";

export default function DetailsScreen() {
  const theme = useTheme();
  const { lat, lng } = useLocalSearchParams();
  const { tempUnit, windUnit, pressureUnit } = useStorage();
  const { isConnected } = useNetworkStatus();

  const {
    data: weather,
    isLoading,
    isError,
    refetch,
  } = useCurrentWeather(lat as string, lng as string);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={refetch}
          progressBackgroundColor={theme.colors.background}
          tintColor={theme.colors.secondary}
          colors={[theme.colors.primary]}
          enabled={isConnected}
        />
      }
    >
      {isError && (
        <View style={styles.centerContainer}>
          <Text>Something went wrong</Text>
        </View>
      )}

      {weather && (
        <View style={styles.mainContainer}>
          <View>
            <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
              {weather.location.name}
            </Text>

            <Text
              variant="bodyMedium"
              style={{
                color: theme.colors.onSurfaceDisabled,
                marginBottom: 16,
              }}
            >
              {weather.location.region}, {weather.location.country}
            </Text>

            <View style={styles.temperatureContainer}>
              <View style={styles.tempAndCondition}>
                <Text variant="displaySmall" style={styles.temperature}>
                  {tempUnit === "fahrenheit"
                    ? `${weather.current.temp_f}°F`
                    : `${weather.current.temp_c}°C`}
                </Text>

                <Text variant="bodyLarge">
                  {weather.current.condition.text}
                </Text>
              </View>

              <Image
                source={{ uri: `https:${weather.current.condition.icon}` }}
                style={styles.weatherIcon}
              />
            </View>

            <Text
              variant="bodyMedium"
              style={[
                styles.feelsLike,
                { color: theme.colors.onSurfaceDisabled },
              ]}
            >
              {tempUnit === "fahrenheit"
                ? `Feels like ${weather.current.feelslike_f}°F`
                : `Feels like ${weather.current.feelslike_c}°C`}
            </Text>
          </View>

          <View style={styles.detailsGrid}>
            <Surface
              style={[styles.detailCard, { borderRadius: theme.roundness }]}
            >
              <Icon
                source="weather-windy"
                size={24}
                color={theme.colors.onSurfaceDisabled}
              />

              <Text style={styles.detailValue}>
                {windUnit === "mph"
                  ? `${weather.current.wind_mph} mp/h`
                  : `${weather.current.wind_kph} kp/h`}
              </Text>

              <Text style={{ color: theme.colors.onSurfaceDisabled }}>
                Wind
              </Text>
            </Surface>

            <Surface
              style={[styles.detailCard, { borderRadius: theme.roundness }]}
            >
              <Icon
                source="gauge"
                size={24}
                color={theme.colors.onSurfaceDisabled}
              />

              <Text style={styles.detailValue}>
                {pressureUnit === "millibars"
                  ? `${weather.current.pressure_mb} mb`
                  : `${weather.current.pressure_in} in`}
              </Text>

              <Text style={{ color: theme.colors.onSurfaceDisabled }}>
                Pressure
              </Text>
            </Surface>

            <Surface
              style={[styles.detailCard, { borderRadius: theme.roundness }]}
            >
              <Icon
                source="water-percent"
                size={24}
                color={theme.colors.onSurfaceDisabled}
              />

              <Text style={styles.detailValue}>
                {weather.current.humidity}%
              </Text>

              <Text style={{ color: theme.colors.onSurfaceDisabled }}>
                Humidity
              </Text>
            </Surface>

            <Surface
              style={[styles.detailCard, { borderRadius: theme.roundness }]}
            >
              <Icon
                source="eye"
                size={24}
                color={theme.colors.onSurfaceDisabled}
              />

              <Text style={styles.detailValue}>
                {weather.current.vis_km} km
              </Text>

              <Text style={{ color: theme.colors.onSurfaceDisabled }}>
                Visibility
              </Text>
            </Surface>
          </View>
        </View>
      )}
    </ScrollView>
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
  mainContainer: {
    flex: 1,
    gap: 20,
  },
  cityName: {
    fontWeight: "bold",
  },
  regionName: {
    color: "#666",
    marginBottom: 16,
  },
  temperatureContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tempAndCondition: {
    flex: 1,
  },
  temperature: {
    fontWeight: "200",
  },
  weatherIcon: {
    width: 64,
    height: 64,
  },
  feelsLike: {
    marginTop: 8,
  },
  detailsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  detailCard: {
    width: "48%",
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
    elevation: 2,
  },
  detailValue: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 8,
  },
});
