import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import IconButton from "./components/ui/icon-button";
import ScreenWrapper from "./components/ui/screen-wrapper";
import { Colors } from "./constants/style";
import AddPlaceScreen from "./screens/add-place";
import MapScreen from "./screens/map";
import PlaceDetailScreen from "./screens/place-detail";
import PlacesScreen from "./screens/places";
import { RootStackParametersList } from "./types/navigation";
import { init } from "./util/database";

const Stack = createNativeStackNavigator<RootStackParametersList>();

export default function App() {
  const [appInitialized, setAppInitialized] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    init()
      .then(() => setAppInitialized(true))
      .catch((error_) => setError(error_.message));
  }, []);

  if (!appInitialized || error) {
    return (
      <View style={styles.root}>
        <StatusBar style="light" />
        {!appInitialized && <ActivityIndicator size={"large"} />}
        {error && <Text>{error}</Text>}
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
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
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.gray700,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
