import { useContext } from "react";
import { AppContext, useAppContext } from "../store/AppContext";
import UserProfile from "./UserProfile";
import UserRepositoriesComponent from "./UserRepositories";

const UserDataComponent = () => {
    // const context = useContext(AppContext);

    // const {githubUserId} = context;

    const {githubUserId} = useAppContext();

    return(
        <>
            <h3>user data component</h3>
            <p>userId : {githubUserId}</p>
            <UserProfile />
            <UserRepositoriesComponent />
        </>        
    )
}

export default UserDataComponent;