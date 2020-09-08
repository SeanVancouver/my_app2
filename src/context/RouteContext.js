import { createContext } from "react";

export const RouteContext = createContext();

export const RouteProvider = (props) => {
  const [currentUrl, setCurrentUrl] = useState();

  return (
    <RouteProvider.Provider value={[currentUrl, setCurrentUrl]}>
      {props.children}
    </RouteProvider.Provider>
  );
};
