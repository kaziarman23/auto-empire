import { toast } from "react-hot-toast";

export default function useToast() {
  const showSuccess = (message) => {
    toast.success(message, {
      style: {
        border: "1px solid green",
        padding: "16px",
        color: " #fff",
        background: "#000",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#000",
      },
    });
  };

  const showError = (message) => {
    toast.error(message, {
      style: {
        border: "1px solid red",
        padding: "16px",
        color: "#fff",
        background: "#000",
      },
      iconTheme: {
        primary: "#fff",
        secondary: "#000",
      },
    });
  };

  const showInfo = (message) => {
    toast(message, {
      style: {
        border: "1px solid yellow",
        padding: "16px",
        color: "white",
        background: "black",
      },
    });
  };

  return { showSuccess, showError, showInfo };
}
