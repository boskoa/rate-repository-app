import { Text } from 'react-native';
import { Link } from 'react-router-native';

const AppBarTab = ({ text, style, link }) => {
  return (
    <Link to={link}>
      <Text style={style}>{text}</Text>
    </Link>
  );
};

export default AppBarTab;