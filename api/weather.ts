import { api } from "@/api/base";

export const getCurrentWeather = async (query: string) => {
  const { data } = await api.get("/current.json", { params: { q: query } });
  return data;
};
