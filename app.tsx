import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ScreenWrapper from "./components/ui/screen-wrapper";
import { Colors } from "./constants/style";
import AddPlaceScreen from "./screens/add-place";
import MapScreen from "./screens/map";
import PlaceDetailScreen from "./screens/place-detail";
import PlacesScreen from "./screens/places";
import { RootStackParametersList } from "./types/navigation";

const Stack = createNativeStackNavigator<RootStackParametersList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          contentStyle: { backgroundColor: Colors.gray700 },
          headerTintColor: "black",
          headerTitleAlign: "center",
        }}
        screenLayout={({ children }) => (
          <ScreenWrapper>{children}</ScreenWrapper>
        )}
      >
        <Stack.Screen name="Places" component={PlacesScreen} />
        <Stack.Screen name="PlacesDetail" component={PlaceDetailScreen} />
        <Stack.Screen name="AddPlace" component={AddPlaceScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
