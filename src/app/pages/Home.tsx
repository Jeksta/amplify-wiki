import { Button, Heading, View, useAuthenticator } from "@aws-amplify/ui-react"
import React, { FC } from "react"
import logo from "../../logo.svg";

interface Props {

}

const Home: FC<Props> = ({ }) => {

    const { user, signOut } = useAuthenticator(context => [context.user])

    return (
        <View className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Button
                    variation="link"
                    onClick={signOut}
                >
                    Sign Out
                </Button>

                <Heading
                    variation="success"
                    level={1}
                >
                    We now have Auth!
                    <p>
                        {user.username}
                    </p>
                </Heading>
            </div>
        </View>
    )
}

export { Home }