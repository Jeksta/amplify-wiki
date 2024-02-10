import { signIn, confirmSignIn } from 'aws-amplify/auth';

export async function handleSignIn(username) {

    const challengeResponse = 'the answer for the challenge';

    try {
      const { nextStep } = await signIn({
        username,
        options: {
          authFlowType: 'CUSTOM_WITHOUT_SRP',
        },
      });

      if (nextStep.signInStep === 'CONFIRM_SIGN_IN_WITH_CUSTOM_CHALLENGE') {
        try {
          // to send the answer of the custom challenge
          const output = await confirmSignIn({ challengeResponse });

          console.log(output);

        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }