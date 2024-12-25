import { useContext } from "react";
import { StorageContext } from "@/context/storage";

export function useStorage() {
  const context = useContext(StorageContext);
  return { ...context };
}
