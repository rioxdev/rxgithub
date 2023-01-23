import { Button, TextInput } from "evergreen-ui";
import { cpSync } from "fs";
import { useContext, useState } from "react"
import { AppContext, useAppContext } from "../store/AppContext";


export const SearchBar = () => {

    const [userId, setUserId] = useState('');

    const context = useContext(AppContext);


    const onChangeHandler = (event: any) => {

        setUserId(event.target.value);

    }

    const onSearchHandler = () => {
        context.setUserId(userId);
    }

    return (
        <div style={{ marginTop: 15 }}>
            <TextInput
                placeholder="Github user"
                value={userId}
                onChange={onChangeHandler}
            />

            <Button marginLeft={10}
                disabled={!userId}
                onClick={onSearchHandler} >
                Search
            </Button>

        </div>

    )

}