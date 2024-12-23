import { Button } from "react-native-paper";
import { useRouter } from "expo-router";

import { useCurrentLocation } from "@/hooks/location";
import { useSnackbar } from "@/hooks/snackbar";

export function CurrentLocationButton() {
  const router = useRouter();

  const { openSnackbar } = useSnackbar();
  const { isLoading, getLocation } = useCurrentLocation();

  const getCurrentLocation = () => {
    getLocation()
      .then((location) => {
        router.push({
          pathname: "/details",
          params: {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          },
        });
      })
      .catch((error) => openSnackbar(error.message));
  };

  return (
    <Button
      mode="contained"
      style={{ marginTop: 10 }}
      onPress={getCurrentLocation}
      loading={isLoading}
    >
      Use Current Location
    </Button>
  );
}
