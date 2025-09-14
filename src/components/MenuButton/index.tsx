import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '~/components/Text';
import { MenuButtonProps } from './types';
import useMenuButtonVM from './view.model';

const MenuButton = ({ title, color, linkTo }: MenuButtonProps) => {
  const { handleOnPress } = useMenuButtonVM();

  return (
    <TouchableOpacity
      testID="menu-button"
      onPress={() => handleOnPress(linkTo)}
    >
      <View
        testID="menu-button-container"
        style={[styles.buttonContainer, { backgroundColor: color }]}
      >
        <Text type="subtitle">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    height: 70,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenuButton;
