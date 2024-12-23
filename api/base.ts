import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
  params: {
    key: process.env.EXPO_PUBLIC_API_KEY,
  },
});
