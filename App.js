import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ListUserScreen from './screens/ListUserScreen'; 
import SingleUserScreen from "./screens/SingleUserScreen";

export default function App() {
  const Stack = createNativeStackNavigator(); 
  return (
    // On définit ici la logique de navigation de l'appli :
    //    - 2 écrans : ListUserScreen et SingleUserScreen
    //    - Ecran de démarrage : ListUserScreen
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListUserScreen">
        <Stack.Screen name="ListUserScreen" component={ListUserScreen}/>
        <Stack.Screen name="SingleUserScreen" component={SingleUserScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
