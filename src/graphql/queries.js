import { gql } from '@apollo/client';
import { REPOSITORY_INFO, REVIEW_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryInfo
        }
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
  query($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryInfo
      reviews {
        edges {
          node {
            ...ReviewInfo
          }
        }
      }
      url
    }
  }
  ${REPOSITORY_INFO}
  ${REVIEW_INFO}
`;