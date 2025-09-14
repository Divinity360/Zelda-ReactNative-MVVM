import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '~/components/Text';
import colors from '~/constants/colors';
import { Monster } from '~/models/monster.model';
import Image from '../Image';

const MonsterCard = ({ monster }: { monster: Monster }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('MonsterDetails', { monster });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Image imageUrl={monster.image} type="small" />
      <View style={styles.rightContainer}>
        <Text type="subtitle" style={styles.monsterName}>
          {monster.name}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={3}>
          {monster.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette1,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    height: 120,
  },
  rightContainer: {
    flex: 1,
    height: 100,
    width: '100%',
    marginHorizontal: 12,
  },
  monsterName: {
    marginBottom: 6,
  },
});

export default MonsterCard;
