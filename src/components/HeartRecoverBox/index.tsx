import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import HeartHalf from '~/assets/images/heart-half.svg';
import HeartQuarter from '~/assets/images/heart-quarter.svg';
import Heart from '~/assets/images/heart.svg';

const HeartRecoverBox = ({ heartsNumber }: { heartsNumber: number }) => {
  const heartsRecovered = useMemo(() => {
    const integerPart = Math.floor(heartsNumber);
    const decimalPart = heartsNumber - integerPart;

    return { integerPart, decimalPart };
  }, [heartsNumber]);

  return (
    <View style={styles.container}>
      {Array.from({ length: heartsRecovered.integerPart }).map((_, index) => (
        <Heart width={20} height={20} key={index} />
      ))}
      {heartsRecovered.decimalPart > 0.25 ? (
        <HeartHalf width={25} height={25} />
      ) : (
        <HeartQuarter width={25} height={25} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default HeartRecoverBox;
