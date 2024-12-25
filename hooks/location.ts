import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import * as ExpoLocation from "expo-location";

import { Location } from "@/types/location";
import { searchLocation } from "@/api/location";
import { useDebounce } from "@/hooks/debounce";
import { useNetworkStatus } from "@/hooks/network-status";

export function useCurrentLocation() {
  const [isLoading, setIsLoading] = useState(false);

  const getLocation = async () => {
    setIsLoading(true);

    try {
      const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        throw new Error("Permission to access location was denied");
      }

      const location = await ExpoLocation.getCurrentPositionAsync({});
      setIsLoading(false);
      return location;
    } catch (e) {
      const error = e as { message: string };
      setIsLoading(false);
      throw new Error(error.message);
    }
  };

  return { isLoading, getLocation };
}

export const useSearchLocation = (query: string) => {
  const { isConnected } = useNetworkStatus();
  const debouncedQuery = useDebounce(query);

  return useQuery<Location[]>({
    queryKey: ["locations", debouncedQuery],
    queryFn: () => searchLocation(debouncedQuery),
    enabled: debouncedQuery.length >= 2 && isConnected,
  });
};
