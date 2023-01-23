import { Spinner, Table } from "evergreen-ui";
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import { GithubUserRepository } from "../models/GithubUserRepository";
import { getGithubUserRepositories } from "../repositories/githubRepo";
import { useAppContext } from "../store/AppContext";

const UserRepositoriesComponent = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const { githubUserId, repositories, setRepositories } = useAppContext();
    const [searchHeaderValue, setSearchHeaderValue] = useState<string>('');
    const history = useHistory();

    useEffect(() => {
        if (!githubUserId) {
            return;
        }

        (
            async () => {
                try {
                    setLoading(true);

                    var repos = await getGithubUserRepositories(githubUserId);
                    setRepositories(repos);
                }
                catch (err) {
                    console.log(err);
                }
                finally {
                    setLoading(false);
                }
            }

        )();


    }, [githubUserId]);

    const onSearchHeaderCellChangeHandler = (value: string) => {
        setSearchHeaderValue(value);
    }

    const onRowSelectedHandler = (repository: GithubUserRepository) => () => {
        history.push({ pathname: '/details', state: { repository } });
    }

    if (loading)
        return <Spinner />

    return (
        <>
            <h5 style={{marginBottom: 10}}>Repositories component</h5>
            <Table >
                <Table.Head>
                    <Table.SearchHeaderCell
                        placeholder={"Filter by repository name"}
                        onChange={onSearchHeaderCellChangeHandler}
                    />
                    <Table.TextHeaderCell>Language</Table.TextHeaderCell>
                    <Table.TextHeaderCell>Description</Table.TextHeaderCell>
                </Table.Head>
                <Table.Body>
                    {repositories
                        .filter((repository: GithubUserRepository) => {
                            return repository.name
                                .toLowerCase()
                                .includes(searchHeaderValue.toLowerCase());
                        })
                        .map((repository: GithubUserRepository) => {
                            return (
                                <Table.Row
                                    key={repository.id}
                                    isSelectable
                                    onSelect={onRowSelectedHandler(repository)}
                                >
                                    <Table.TextCell>{repository.name}</Table.TextCell>
                                    <Table.TextCell>{repository.language}</Table.TextCell>
                                    <Table.TextCell>{repository.description}</Table.TextCell>
                                </Table.Row>
                            );
                        })}
                </Table.Body>
            </Table>
        </>

    )
}

export default UserRepositoriesComponent