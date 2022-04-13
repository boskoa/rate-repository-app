import { gql } from '@apollo/client';

export const REPOSITORY_INFO = gql`
  fragment RepositoryInfo on Repository {
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    id
  }
`;