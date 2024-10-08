import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_HIGH_SCORE = gql`
  mutation AddHighScore($highScoreTotal: String!, $highScoreName: String!) {
  addHighScore(highScoreTotal: $highScoreTotal, highScoreName: $highScoreName) {
    _id
    highScoreTotal
    highScoreName
  }
}
`;
