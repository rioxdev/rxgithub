import { createContext, PropsWithChildren, useContext, useState } from "react";
import { AppState } from "../models/AppState";
import { GithubUser } from "../models/GithubUser";
import { GithubUserRepository } from "../models/GithubUserRepository";

// export const AppContext = createContext<AppState | undefined>({
//     user: {
//         avatar_url: '',
//         bio: '',
//         company: '',
//         location: '',
//         login: '',
//         name: ''
//     },
//     githubUserId: '',
//     repositories: []
// });

const initialValue: AppState = {
    user: {
        avatar_url: '',
        bio: '',
        company: '',
        location: '',
        login: '',
        name: ''
    },
    githubUserId: '',
    repositories: [],
    setUserId: (id: string) => { },
    setUser: (usr: GithubUser) => { },
    setRepositories: (repos: GithubUserRepository[]) => { }
}

export const AppContext = createContext<AppState>(initialValue);


export function useAppContext() {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw Error("Opps - on n'est pas dans le provider !");
    }
    return context;
}

export default function AppContextProvider({ children }: PropsWithChildren<any>) {
    const [user, setUser] = useState<GithubUser>({
        avatar_url: '',
        bio: '',
        company: '',
        location: '',
        login: '',
        name: ''
    });
    const [repositories, setRepositories] = useState<GithubUserRepository[]>([]);
    const [githubUserId, setGithubUserId] = useState<string>('');

    const setUserId = (userId: string) => {
        setGithubUserId(userId);
    }

    const setGithubUser = (usr: GithubUser) => {
        setUser(usr);
    }

    const setRepos = (repos: GithubUserRepository[]) => {
        setRepositories(repos);
    }

    return (
        <AppContext.Provider value={{
            user,
            repositories,
            githubUserId,
            setUserId,
            setUser: setGithubUser,
            setRepositories: setRepos
        }}>
            {children}
        </AppContext.Provider>
    )
}

