import { api } from "@/api/base";

export const searchLocation = async (query: string) => {
  const res = await api.get("/search.json", { params: { q: query } });
  return res.data;
};
