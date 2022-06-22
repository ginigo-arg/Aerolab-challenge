import { createContext, useContext, useEffect, useReducer } from "react";
import { reducerUser } from "../components/reducer/reducerUser";
import { User } from "../components/types";
import { useUser } from "../Hooks/useUser";
import { postCoins } from "../pages/api/api";
import { reducer } from "./Reducer";

interface uContext {
  user: User;
  userState: User;
  isLoading: boolean;
  error: string;
  handleAddCoins: (coins: number) => void;
  getUser: (user: User) => void;
  handleRestarCoins: (precio: number) => void;
}
const userContext = createContext({} as uContext);

export const ProvideUser = ({ children }) => {
  const user = useProvideUSer();
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
};

const initialValues = {};

export const useUserInfo = () => {
  return useContext(userContext);
};

function useProvideUSer() {
  const { user, isLoading, error } = useUser();
  const [userState, dispatch] = useReducer(reducerUser, initialValues);

  useEffect(() => {
    getUser(user);
  }, [isLoading]);

  const getUser = (user: User) => {
    dispatch({
      type: "GET_USER",
      payload: user,
    });
  };

  const handleAddCoins = async (coins: number) => {
    const resp = await postCoins(coins);
    try {
      dispatch({
        type: "UPDATE_COINS",
        payload: resp["New Points"],
      });
    } catch {
      () => window.alert("error al realizar la accion");
    }
    return resp;
  };

  const handleRestarCoins = (price: number) => {
    dispatch({
      type: "RESTART_COINS",
      payload: price,
    });
  };

  return {
    user,
    userState,
    isLoading,
    error,
    handleAddCoins,
    handleRestarCoins,
    getUser,
  };
}
