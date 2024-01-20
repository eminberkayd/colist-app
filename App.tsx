import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './navigation';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}
