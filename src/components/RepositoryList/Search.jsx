import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useEffect } from 'react';

const Search = ({ setSearchBy }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debounced] = useDebounce(searchQuery, 500);

  useEffect(() => {
    setSearchBy(debounced);
  }, [debounced]);

  return (
    <Searchbar
      placeholder="Search repositories"
      onChangeText={(query) => {
        setSearchQuery(query);
      }}
      value={searchQuery}
    />
  );
};

export default Search;