import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query {
    repositories {
      edges {
        node {
            fullName
          description
          language
          ownerAvatarUrl
          stargazersCount
          reviewCount
          ratingAverage
          forksCount
        }
      }
    }
  }
`;

export const LOGIN_STATUS = gql`
query {
  authorizedUser {
    id
  }
}
`;