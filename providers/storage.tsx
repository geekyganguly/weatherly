import { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

import { StorageContext } from "@/context/storage";

export function StorageProvider({ children }: { children: React.ReactNode }) {
  const [tempUnit, setTempUnit] = useState<string | undefined>("fahrenheit");
  const [windUnit, setWindUnit] = useState<string | undefined>("mph");
  const [pressureUnit, setPressureUnit] = useState<string | undefined>(
    "millibars"
  );

  const tempUnitStorage = useAsyncStorage("temperature-unit");
  const windUnitStorage = useAsyncStorage("wind-unit");
  const pressureUnitStorage = useAsyncStorage("pressure-unit");

  const setTempUnitToStorage = async (value?: string) => {
    if (!value) return;
    await tempUnitStorage.setItem(value).then(() => setTempUnit(value));
  };

  const setWindUnitToStorage = async (value?: string) => {
    if (!value) return;
    await windUnitStorage.setItem(value).then(() => setWindUnit(value));
  };

  const setPressureUnitToStorage = async (value?: string) => {
    if (!value) return;
    await pressureUnitStorage.setItem(value).then(() => setPressureUnit(value));
  };

  useEffect(() => {
    const readDataFromStorage = async () => {
      const _tempUnit = await tempUnitStorage.getItem();
      setTempUnit((prev) => _tempUnit || prev);

      const _windUnit = await windUnitStorage.getItem();
      setWindUnit((prev) => _windUnit || prev);

      const _pressureUnit = await pressureUnitStorage.getItem();
      setPressureUnit((prev) => _pressureUnit || prev);
    };

    readDataFromStorage();
  }, []);

  return (
    <StorageContext.Provider
      value={{
        tempUnit,
        setTempUnit: setTempUnitToStorage,
        windUnit,
        setWindUnit: setWindUnitToStorage,
        pressureUnit,
        setPressureUnit: setPressureUnitToStorage,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
}
