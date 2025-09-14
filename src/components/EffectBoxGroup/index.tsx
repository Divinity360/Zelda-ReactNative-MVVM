import { StyleSheet, View } from 'react-native';
import { EquipmentProperties } from '~/models/equipment.model';
import EffectBox from '../EffectBox';

const EffectBoxGroup = ({
  equipProps,
}: {
  equipProps: EquipmentProperties;
}) => {
  const { attack, defense, effect } = equipProps;
  return (
    <View style={styles.container}>
      {!!attack && <EffectBox type="attack" value={attack} />}
      {!!defense && <EffectBox type="defense" value={defense} />}
      {/* Tears of the Kingdom only */}
      {!!effect && <EffectBox type="bonus" value={effect} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flexDirection: 'row',
    width: '100%',
  },
});

export default EffectBoxGroup;
