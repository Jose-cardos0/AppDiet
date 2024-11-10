import { createContext, useState, ReactNode } from "react";

interface useContextType {
  objectArray: DataObjects | undefined;
  setObject: (object: DataObjects) => void;
}

type DataObjects = {
  name: string;
  weight: string;
  height: string;
  age: string;
  gender: string;
  level: string;
  objective: string;
};

type AuthProviderData = {
  children: ReactNode;
};

export const AuthContext = createContext({} as useContextType);

export const AuthProvider = ({ children }: AuthProviderData) => {
  const [objectArray, setObject] = useState<DataObjects | undefined>(undefined);

  console.log("este é o context:", objectArray);

  return (
    <AuthContext.Provider value={{ objectArray, setObject }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
