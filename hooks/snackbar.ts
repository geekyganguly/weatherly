import { useContext } from "react";
import { SnackbarContext } from "@/context/snackbar";

export function useSnackbar() {
  const { setVisible, setMessage } = useContext(SnackbarContext);

  const openSnackbar = (message: string) => {
    setMessage(message);
    setVisible(true);
  };

  return { openSnackbar };
}
