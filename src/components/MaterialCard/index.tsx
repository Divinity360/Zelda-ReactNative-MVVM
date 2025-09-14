import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Text from '~/components/Text';
import colors from '~/constants/colors';
import { Material } from '~/models/material.model';
import Image from '../Image';

const MaterialCard = ({ material }: { material: Material }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('MaterialDetails', { material });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Image imageUrl={material.image} type="small" />
      <View style={styles.rightContainer}>
        <Text type="subtitle" style={styles.materialName}>
          {material.name}
        </Text>
        <Text ellipsizeMode="tail" numberOfLines={3}>
          {material.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.palette2,
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
  materialName: {
    marginBottom: 6,
  },
});

export default MaterialCard;
