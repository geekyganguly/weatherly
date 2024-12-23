import { useQuery } from "@tanstack/react-query";

import { Weather } from "@/types/weather";
import { getCurrentWeather } from "@/api/weather";

export const useCurrentWeather = (lat: string, lng: string) => {
  const query = `${lat},${lng}`;

  return useQuery<Weather>({
    queryKey: ["current-weather", query],
    queryFn: () => getCurrentWeather(query),
  });
};
