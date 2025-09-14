import { useNavigation } from '@react-navigation/native';
import { Equipment } from '~/models/equipment.model';

const useEquipmentCardViewModel = () => {
  const navigation = useNavigation();

  const handleOnPress = (equipment: Equipment) => {
    navigation.navigate('EquipmentDetails', { equipment });
  };

  return {
    handleOnPress,
  };
};

export default useEquipmentCardViewModel;
