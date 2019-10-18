import gql from "graphql-tag";

export const SIGNIN_USER = gql`
  mutation signinUserMutation($email: String!, $password: String!) {
    signInUser(email: { email: $email, password: $password }) {
      token
      user {
        username
        email
      }
    }
  }
`;

export let SIGN_UP_MUTATION = gql`
  mutation SignupMutation(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      username: $username
      authProvider: { email: { email: $email, password: $password } }
    ) {
      email
      username
    }
  }
`;
