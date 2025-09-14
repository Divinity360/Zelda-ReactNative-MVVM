import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { MotiView } from 'moti';
import { Provider } from 'react-redux';
import Navigation from '~/navigation';
import store from '~/store/store';

export default function App() {
  const [loaded] = useFonts({
    Hylia: require('./src/assets/fonts/HyliaSerifBeta-Regular.otf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <Provider store={store}>
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 500 }}
        style={{ flex: 1 }}
      >
        <StatusBar style="light" />
        <Navigation />
      </MotiView>
    </Provider>
  );
}
