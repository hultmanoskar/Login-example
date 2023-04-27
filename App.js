import { NavigationContainer } from '@react-navigation/native'; 
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './screens/SignupPage';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Loginpage from './screens/login';




const LoginStack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator
      >
           <LoginStack.Screen
        name='Login'
        component={Loginpage}
        options={{headerShown: false, headerLeft: null,
          gestureEnabled: false, }}/>
        <LoginStack.Screen
        name='Signup'
        component={Signup}
        options={{headerShown: false, headerLeft: null,
          gestureEnabled: false, }}/>
       

      </LoginStack.Navigator>
      </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF8F7',
  },
    headline: {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
    }
  });
