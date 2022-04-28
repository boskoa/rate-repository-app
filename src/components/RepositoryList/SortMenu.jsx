import { View } from 'react-native';
import { useState } from 'react';
import { Button, Menu, Provider } from 'react-native-paper';
import theme from '../../theme';

const SortMenu = ({ setOrderBy }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          padding: theme.paddings.buttons,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button
              color={theme.colors.primary}
              onPress={openMenu}
              uppercase={false}
            >
              Sort repositories
            </Button>
          }>
          <Menu.Item onPress={() => setOrderBy('')} title="Latest repositories" />
          <Menu.Item onPress={() => setOrderBy('highest rating')} title="Highest rated repositories" />
          <Menu.Item onPress={() => setOrderBy('lowest rating')} title="Lowest rated repositories" />
        </Menu>
      </View>
    </Provider>
  );
};

export default SortMenu;