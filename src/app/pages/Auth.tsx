import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import React, { FC, ReactNode } from 'react';
import { Home } from './Home.tsx';
import { DefaultComponents } from '@aws-amplify/ui-react/dist/types/components/Authenticator/hooks/useCustomComponents/defaultComponents';
import { SignIn } from '../../components/auth/SignIn.tsx';
import { Login } from '../../components/auth/Login.tsx';

interface Props {
  children: ReactNode | ReactNode[]
}

const Auth: FC<Props> = (
  {
    children
  }) => {

  const { route } = useAuthenticator(context => [context.route])

  return (
    route === 'authenticated'
      ? <Home />
      : <Login/>
  );
}

export { Auth };

