import { createContext, useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router";

const TransitionContext = createContext(null);

export function TransitionProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const navigateTo = useCallback((path, options) => {
    setLoading(true);
    setTimeout(() => {
      navigate(path, options);
      // Hide loader after new page has had time to mount
      setTimeout(() => setLoading(false), 350);
    }, 550);
  }, [navigate]);

  return (
    <TransitionContext.Provider value={{ navigateTo, loading }}>
      {children}
    </TransitionContext.Provider>
  );
}

export const useTransition = () => useContext(TransitionContext);
