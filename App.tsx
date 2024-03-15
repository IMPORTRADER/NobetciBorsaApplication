import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import RouteNav from './src/navigators/RouteNav';
import OnboardingScreen from "./src/screens/OnboardingScreen";

export default function App() {
  return (
    /*<NavigationContainer>
      <RouteNav/>
    </NavigationContainer> */
      <OnboardingScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
