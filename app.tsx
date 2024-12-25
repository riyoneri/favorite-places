import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IconButton from "./components/ui/icon-button";
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
          headerTintColor: Colors.gray700,
          headerTitleAlign: "center",
        }}
        screenLayout={({ children }) => (
          <ScreenWrapper>{children}</ScreenWrapper>
        )}
      >
        <Stack.Screen
          name="Places"
          component={PlacesScreen}
          options={({ navigation }) => ({
            title: "Your favorite places",
            headerRight: ({ tintColor }) => (
              <IconButton
                icon="add"
                color={tintColor}
                onPress={() => navigation.navigate("AddPlace")}
                size={24}
              />
            ),
          })}
        />
        <Stack.Screen name="PlacesDetail" component={PlaceDetailScreen} />
        <Stack.Screen
          name="AddPlace"
          component={AddPlaceScreen}
          options={{
            title: "Add new place",
          }}
        />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
