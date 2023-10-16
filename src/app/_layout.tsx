import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { View } from 'react-native';
import { Provider } from "react-redux";
import { setupStore } from 'src/app-root/store/store';
import { colors } from 'src/shared/lib/constants';
import ErrorBoundary from 'react-native-error-boundary'
import ErrorFallback from 'src/features/errors/ErrorFallback';

SplashScreen.preventAutoHideAsync();

const Layout = () => {

  const [fontsLoaded] = useFonts({
    DMBold: require('assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('assets/fonts/DMSans-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {

    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded) {
    return null;
  }
  
  const store = setupStore();

  const onError = (error: Error, stackTrace: string) => {
    //log the error
  }

  return (
    <ErrorBoundary onError={onError} FallbackComponent={ErrorFallback}>
      <Provider store={store}>
        <View style={{ flex: 1, paddingHorizontal:5, backgroundColor: colors.lightGrey }} onLayout={onLayoutRootView}>
          <Stack />
        </View>
      </Provider>
    </ErrorBoundary>
  )
}

export default Layout;

