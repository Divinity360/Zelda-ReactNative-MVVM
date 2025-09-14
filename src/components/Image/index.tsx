import { Image as ExpoImage } from 'expo-image';
import { StyleSheet } from 'react-native';
import { ImageProps } from './types';

const Image = ({ imageUrl, type }: ImageProps) => {
  return (
    <ExpoImage
      key={imageUrl}
      source={{ uri: imageUrl }}
      style={type === 'small' ? styles.small : styles.large}
      contentFit="cover"
      placeholder={require('~/assets/images/placeholder.png')}
      placeholderContentFit="contain"
      transition={200}
    />
  );
};

const styles = StyleSheet.create({
  small: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: 118,
    height: 'auto',
  },
  large: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
});

export default Image;
