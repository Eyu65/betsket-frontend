import { UserContext } from "../userContext";
import { useContext } from "react";

const useAuth = () => {
    return useContext(UserContext);
}

export default useAuth;