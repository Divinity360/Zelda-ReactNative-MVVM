import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '~/components/Text';
import colors from '~/constants/colors';
import { Creature } from '~/models/creature.model';
import Image from '../Image';
import useCreatureCardVM from './view.model';

const CreatureCard = ({ creature }: { creature: Creature }) => {
  const { handleOnPress } = useCreatureCardVM({ creature });
  return (
    <TouchableOpacity
      testID="creature-card-button"
      style={styles.container}
      onPress={handleOnPress}
      activeOpacity={0.7}
    >
      <Image imageUrl={creature.image} type="small" />
      <View style={styles.rightContainer}>
        <Text type="subtitle" style={styles.name}>
          {creature.name}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={3}>
          {creature.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette4,
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
  name: {
    marginBottom: 6,
  },
});

export default CreatureCard;
