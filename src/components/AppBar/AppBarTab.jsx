import { Text } from 'react-native';
import { Link } from 'react-router-native';

const AppBarTab = ({ text, style, link, onPress }) => {
  return (
    <Link to={link} onPress={onPress}>
      <Text style={style}>{text}</Text>
    </Link>
  );
};

export default AppBarTab;