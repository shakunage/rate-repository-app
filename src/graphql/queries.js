import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query repositories($sortField: AllRepositoriesOrderBy!, $sortOrder: OrderDirection!, $searchKeyword: String) {
    repositories (orderBy: $sortField, orderDirection: $sortOrder, searchKeyword: $searchKeyword) {
      edges {
        cursor
        node {
          id
          fullName
          description
          language
          ownerAvatarUrl
          stargazersCount
          reviewCount
          ratingAverage
          forksCount
          url
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

export const GET_SINGLE_REPO = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      description
      language
      ownerAvatarUrl
      stargazersCount
      reviewCount
      ratingAverage
      forksCount
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query getCurrentUser($includeReviews: Boolean = false) {
    me {
      id
      reviews @include(if: $includeReviews) {
        edges {
          node {
            id
            text
            rating
            createdAt
          }
        }
      }
    }
  }
`;