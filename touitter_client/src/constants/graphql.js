import gql from "graphql-tag";

export const SIGNIN_USER = gql`
  mutation signinUserMutation($email: String!, $password: String!) {
    signInUser(email: { email: $email, password: $password }) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export const UPDATE_USERNAME = gql`
  mutation UsernameMutation($id: Integer!, $username: String!) {
    updateUsername(id: $id, username: $username) {
      username
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
