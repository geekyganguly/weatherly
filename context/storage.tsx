import { createContext } from "react";

export interface StorageContextType {
  tempUnit?: string;
  setTempUnit: (value?: string) => void;

  windUnit?: string;
  setWindUnit: (value?: string) => void;

  pressureUnit?: string;
  setPressureUnit: (value?: string) => void;
}

export const StorageContext = createContext<StorageContextType>({
  setTempUnit: () => {},
  setWindUnit: () => {},
  setPressureUnit: () => {},
});
