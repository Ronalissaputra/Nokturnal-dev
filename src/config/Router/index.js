import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabRouter from '../TabRouter';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyApp"
        component={TabRouter}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
