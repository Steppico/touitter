import gql from "graphql-tag";

export const SIGNIN_USER = gql`
  mutation signinUserMutation($email: String!, $password: String!) {
    signInUser(email: { email: $email, password: $password }) {
      token
      user {
        id
        username
        email
        emailConfirmed
        bio
      }
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation PasswordMutation($id: ID!, $password: String!) {
    updatePassword(id: $id, password: $password) {
      password
    }
  }
`;

export const UPDATE_BIO = gql`
  mutation BioMutation($id: ID!, $bio: String!) {
    updatePassword(id: $id, bio: $bio) {
      bio
    }
  }
`;

export const CONFIRM_EMAIL = gql`
  mutation ConfirmEmail($id: ID!) {
    updateConfirmEmail(id: $id) {
      id
      emailConfirmed
    }
  }
`;

export const CHECK_TOKEN = gql`
  query CheckToken($token: String!) {
    checkToken(token: $token) {
      id
    }
  }
`;

export const UPDATE_USERNAME = gql`
  mutation UsernameMutation($id: ID!, $username: String!) {
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
