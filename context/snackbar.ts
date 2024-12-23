import { createContext } from "react";

export interface SnackbarContextType {
  visible: boolean;
  setVisible: (visible: boolean) => void;

  message: string;
  setMessage: (message: string) => void;
}

export const SnackbarContext = createContext<SnackbarContextType>({
  visible: false,
  setVisible: () => {},

  message: "",
  setMessage: () => {},
});
