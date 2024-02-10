import { Authenticator, Button, Heading, Text, View } from '@aws-amplify/ui-react';
import { DefaultComponents } from '@aws-amplify/ui-react/dist/types/components/Authenticator/hooks/useCustomComponents/defaultComponents';
import React, { FC } from 'react';
import "../../custom.css"

interface Props {

}

const Login: FC<Props> = (
    {

    }) => {

    const AUTH_FORM_FIELDS = {
        signIn: {
            username: {
                placeholder: "Username eingeben",
            },
            password: {
                placeholder: "Password eingeben",
            }
        },
        confirmSignIn: {

        }
    }

    const AUTH_COMPONENTS: DefaultComponents = {
        SignIn: {
            Header() {
                return (
                    <View className='auth-signIn-header'>
                        <Heading level={3}>
                            <Text
                                variation='primary'
                                as='strong'
                                fontWeight={700}
                            >
                                Login
                            </Text>
                        </Heading>
                    </View>
                )
            },
            Footer() {
                return (
                    <View className='auth-signIn-footer'>
                        <Button
                            className='auth-signIn-remember-password'
                            variation='link'
                            onClick={() => console.log("stuff")}
                        >
                            Password vergessen?
                        </Button >
                    </View>
                )
            },
        },
        VerifyUser: {
            // Header() { return <></> },
            // Footer() { return <></> }
        }
    }

    return (
        <Authenticator
            hideSignUp
            variation='modal'
            formFields={AUTH_FORM_FIELDS}
            components={AUTH_COMPONENTS}
        />
    );
}

export { Login }