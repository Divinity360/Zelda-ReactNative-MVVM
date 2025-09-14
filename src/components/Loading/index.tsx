import { MotiText, MotiView, View } from 'moti';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import LoadingIcon from '~/assets/images/loading.svg';
import Text from '~/components/Text';

const Loading = () => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <MotiView
          style={styles.iconContainer}
          animate={{
            scaleY: flipped ? -1 : 1,
          }}
          transition={{
            type: 'spring',
            duration: 1,
          }}
        >
          <LoadingIcon height={50} width={50} />
        </MotiView>
      </View>
      <View>
        <MotiText
          from={{ opacity: 0 }}
          style={styles.text}
          animate={{ opacity: 1 }}
          transition={{
            type: 'timing',
            loop: true,
            duration: 1000,
          }}
        >
          <Text type="subtitle">Loading...</Text>
        </MotiText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginLeft: 20,
  },
});

export default Loading;
