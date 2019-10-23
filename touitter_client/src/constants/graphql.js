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

export const FOLLOW_USER = gql`
  mutation FollowUser($userId: ID!, $followerId: Int!) {
    createFollower(userId: $userId, followerId: $followerId) {
      id
      userId {
        username
      }
      followerId
    }
  }
`;
export const UNFOLLOW_USER = gql`
  mutation UnfollowUser($userId: ID!, $followerId: Int!) {
    deleteFollower(userId: $userId, followerId: $followerId) {
      id
      userId {
        username
      }
      followerId
    }
  }
`;

export const GET_USER_FOLLOWERS = gql`
  query GetUserFollowers($userId: ID!) {
    followerByUserId(userId: $userId) {
      id
      followerId
      userId {
        id
      }
    }
  }
`;

export const GET_USER_MESSAGES = gql`
  query GetUserMessages($id: ID!) {
    allUserMessages(id: $id) {
      id
      message
      postedBy {
        id
      }
    }
  }
`;

export const GET_ALL_MESSAGES = gql`
  query GetAllMessages {
    allMessages {
      id
      message
      postedBy {
        id
        username
        bio
      }
    }
  }
`;

export const USER_LOGIN = gql`
query UserLogin($email: String!) {
  userLogin(email: $email) {
    id
    username
    bio
  }
}`


export const CHECK_TOKEN = gql`
  query CheckToken($token: String!) {
    checkToken(token: $token) {
      id
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

export const SHARE_POST = gql`
  mutation SharePost($id: ID!, $message: String!) {
    createMessage(userId: $id, message: $message) {
      message
    }
  }
`;

export const UPDATE_BIO = gql`
  mutation BioMutation($id: ID!, $bio: String!) {
    updateBio(id: $id, bio: $bio) {
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
