import { gql } from '@apollo/client';
import { REPOSITORY_INFO, REVIEW_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
  query(
    $orderDirection: OrderDirection,
    $orderBy: AllRepositoriesOrderBy,
    $searchKeyword: String,
    $first: Int,
    $after: String
    ){
    repositories(
      orderDirection: $orderDirection,
      orderBy: $orderBy,
      searchKeyword: $searchKeyword,
      first: $first,
      after: $after
      ) {
      edges {
        node {
          ...RepositoryInfo
        }
        cursor
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${REPOSITORY_INFO}
`;

export const ME = gql`
  query {
    me {
      username
      id
    }
  }
`;

export const GET_REPOSITORY = gql`
  query($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      ...RepositoryInfo
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewInfo
          }
          cursor
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
      url
    }
  }
  ${REPOSITORY_INFO}
  ${REVIEW_INFO}
`;