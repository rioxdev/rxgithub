import { Card, Avatar, Spinner } from "evergreen-ui";
import { useEffect, useState } from "react";
import { getGithubUserInformation } from "../repositories/githubRepo";
import { useAppContext } from "../store/AppContext";

const UserProfileComponent = () => {

    const { githubUserId, user: userInformation, setUser } = useAppContext();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {

        if (!githubUserId)
        {
            return;
        }

        (
            async () => {
                try {
                    setLoading(true);
                    const userInfo = await getGithubUserInformation(githubUserId);
                    setUser(userInfo);
                }
                catch (error) {
                    console.log(error);
                }
                finally
                {
                    setLoading(false);
                }
            }

        )();

    }, [githubUserId]);

    if (loading)
    return <Spinner />

    return (

        <Card style={{ marginTop: 10, padding: 10 }} border>
            <div style={styles.container}>
                <Avatar
                    style={{ marginRight: 10 }}
                    src={userInformation.avatar_url}
                    name={userInformation.login}
                    size={60}
                />
                <div>
                    <h5>{userInformation.login}</h5>
                    <div style={{ display: "flex" }}>
                        <h5>{`${userInformation.company} - ${userInformation.location}`}</h5>
                    </div>
                </div>
            </div>
            <h4>{userInformation.bio}</h4>
        </Card>
    )
}

export default UserProfileComponent;

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
};