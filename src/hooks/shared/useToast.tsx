import { useState, useCallback } from "react";

export interface ToastConfig {
  message: string;
  status: "success" | "error" | "info" | "warning";
  duration?: number;
  position?: "top" | "bottom" | "top-right" | "bottom-left" | "bottom-right";
  isClosable?: boolean;
}

export const useToast = () => {
  const [toastState, setToastState] = useState<ToastConfig | null>(null);

  const showToast = useCallback((config: ToastConfig) => {
    setToastState({ 
      duration: 3000, 
      position: "top", 
      isClosable: true, 
      ...config 
    });

    // Simulating alert for toast (replace this with your toast library, e.g., Chakra-UI or React Toastify)
    alert(`${config.status.toUpperCase()}: ${config.message}`);
  }, []);

  return showToast;
};
