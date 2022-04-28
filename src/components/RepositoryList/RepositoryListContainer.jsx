import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';
import RepositoryItem from '../RepositoryItem';
import SortMenu from './SortMenu';
import Search from './Search';
import React from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

export const ItemSeparator = () => <View style={styles.separator} />;

const RenderItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
      <RepositoryItem item={item} />
    </Pressable>
  );
};

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { setOrderBy, setSearchBy } = this.props;
    return (
      <View>
        <Search setSearchBy={setSearchBy} />
        <SortMenu setOrderBy={setOrderBy} />
      </View>
    );
  };

  render() {
    const onEndReach = this.props.onEndReach;
    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
        stickyHeaderIndices={[0]}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}