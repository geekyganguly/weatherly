import { useState } from "react";
import { Snackbar } from "react-native-paper";
import { SnackbarContext } from "@/context/snackbar";

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <SnackbarContext.Provider
      value={{ visible, setVisible, message, setMessage }}
    >
      {children}

      <Snackbar visible={visible} onDismiss={() => setVisible(false)}>
        {message}
      </Snackbar>
    </SnackbarContext.Provider>
  );
}
