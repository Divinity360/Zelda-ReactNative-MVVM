import { StyleSheet, Text, View } from 'react-native';
import Shield from '~/assets/images/shield.svg';
import Sword from '~/assets/images/sword.svg';
import { EffectBoxProps } from './types';

const EffectBox = ({ value, type }: EffectBoxProps) => {
  const renderEffectIcon = () =>
    ({
      attack: <Sword height={16} width={16} />,
      defense: <Shield height={16} width={16} />,
      bonus: null,
    })[type];

  return (
    <View style={styles.container}>
      {renderEffectIcon()}
      <View
        style={[
          styles.propContainer,
          type !== 'bonus' ? styles.iconMargin : null,
        ]}
      >
        <View style={styles.innerPropContainer}>
          <Text style={styles.value}>{value}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  iconMargin: {
    marginLeft: 6,
  },
  propContainer: {
    minWidth: 35,
    width: 'auto',
    height: 25,
    borderRadius: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  innerPropContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgba(299, 299, 299, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  value: {
    color: 'white',
  },
});

export default EffectBox;
