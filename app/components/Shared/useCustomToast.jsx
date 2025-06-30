import { toast } from "react-hot-toast";

export default function useToast() {
  const showSuccess = (message) => {
    toast.success(message, {
      style: {
        border: "1px solid #000",
        padding: "16px",
        color: "#000",
        background: "#fff",
      },
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
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
      icon: "ℹ️",
      style: {
        border: "1px dashed #555",
        padding: "16px",
        color: "#000",
        background: "#fff",
      },
    });
  };

  return { showSuccess, showError, showInfo };
}
