import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '~/components/Text';
import colors from '~/constants/colors';
import { Equipment } from '~/models/equipment.model';
import EffectBoxGroup from '../EffectBoxGroup';
import Image from '../Image';
import useEquipmentCardViewModel from './view.model';

const EquipmentCard = ({ equipment }: { equipment: Equipment }) => {
  const { handleOnPress } = useEquipmentCardViewModel();

  return (
    <TouchableOpacity
      testID="equipment-card-button"
      style={styles.container}
      onPress={() => handleOnPress(equipment)}
      activeOpacity={0.7}
    >
      <Image imageUrl={equipment.image} type="small" />
      <View style={styles.rightContainer}>
        <Text type="subtitle" style={styles.materialName}>
          {equipment.name}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={3}>
          {equipment.description}
        </Text>
        <EffectBoxGroup equipProps={equipment.properties} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette3,
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    height: 150,
  },
  rightContainer: {
    flex: 1,
    height: 100,
    width: '100%',
    marginHorizontal: 12,
  },
  materialName: {
    marginBottom: 6,
  },
});

export default EquipmentCard;
