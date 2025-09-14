import { MotiView } from 'moti';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Logo from '~/assets/images/logo.svg';
import MenuButton from '~/components/MenuButton';
import Text from '~/components/Text';
import colors from '~/constants/colors';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1, scale: [0.5, 1.1, 1] }}
        transition={{
          type: 'timing',
          duration: 1000,
        }}
      >
        <Logo style={styles.image} height={250} width={300} />
      </MotiView>
      <View style={styles.titleContainer}>
        <Text type="title">Database</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <MenuButton
          title="Monsters"
          color={colors.palette1}
          linkTo="Monsters"
        />
        <MenuButton
          title="Materials"
          color={colors.palette2}
          linkTo="Materials"
        />
        <MenuButton
          title="Equipments"
          color={colors.palette3}
          linkTo="Equipments"
        />
        <MenuButton
          title="Creatures"
          color={colors.palette4}
          linkTo="Creatures"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  image: {
    alignSelf: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    gap: 8,
    marginVertical: 20,
  },
  buttonsContainer: {
    gap: 12,
  },
});

export default HomeScreen;
