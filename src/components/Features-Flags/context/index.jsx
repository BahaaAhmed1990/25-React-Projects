import { createContext, useEffect, useState } from "react";
import featureFlagServiceCall from "../data";

export const featuresFlagContext = createContext(null);

export default function FeaturesFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabldFlags] = useState({});

  async function fetchEnabledFlags() {
    try {
      setLoading(true);
      const response = await featureFlagServiceCall();
      setEnabldFlags(response);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEnabledFlags();
  }, []);
  // console.log(enabledFlags);
  return (
    <featuresFlagContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </featuresFlagContext.Provider>
  );
}
