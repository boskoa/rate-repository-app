import { useState } from 'react';
import { RepositoryListContainer } from './RepositoryListContainer';
import useRepositories from '../../hooks/useRepositories';

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('');
  const [searchBy, setSearchBy] = useState('');
  const { repositories, fetchMore } = useRepositories(orderBy, searchBy);

  const onEndReach = () => {
    fetchMore();
  };

  return <RepositoryListContainer
    repositories={repositories}
    setOrderBy={setOrderBy}
    setSearchBy={setSearchBy}
    onEndReach={onEndReach}
  />;
};

export default RepositoryList;