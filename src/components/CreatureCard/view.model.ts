import { useNavigation } from '@react-navigation/native';
import { Creature } from '~/models/creature.model';

const useCreatureCardVM = ({ creature }: { creature: Creature }) => {
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate('CreatureDetails', { creature });
  };

  return { handleOnPress };
};

export default useCreatureCardVM;
