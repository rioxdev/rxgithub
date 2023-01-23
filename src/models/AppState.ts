import { GithubUser } from "./GithubUser"
import { GithubUserRepository } from "./GithubUserRepository";

export type AppState = {
    user : GithubUser;
    repositories : GithubUserRepository[];
    githubUserId : string;
    setUserId : (userId:string) => void;
    setUser : (usr : GithubUser) => void;
    setRepositories : (repos : GithubUserRepository[]) => void;
}