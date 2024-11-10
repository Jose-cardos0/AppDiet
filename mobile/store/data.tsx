import { create } from "zustand";

export type userDietData = {
  name: string;
  weight: string;
  height: string;
  age: string;
  gender: string;
  level: string;
  objective: string;
};

type DataState = {
  user: userDietData;
  setPageOne: (data: object) => void;
};

export const userDataStore = create<DataState>((set) => ({
  user: {
    name: "",
    weight: "",
    height: "",
    age: "",
    gender: "",
    level: "",
    objective: "",
  },
  setPageOne: (data) =>
    set((states) => ({ user: { ...states.user, ...data } })),
}));
