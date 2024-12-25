import { useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { MapPressEvent, Marker } from "react-native-maps";

import { Location } from "../api";
import IconButton from "../components/ui/icon-button";
import { RootStackScreenProperties } from "../types/navigation";

export default function MapScreen({
  navigation,
}: RootStackScreenProperties<"Map">) {
  const [selectedLocation, setSelectedLocation] = useState<
    Location | undefined
  >();

  function selectLocationHandler(event: MapPressEvent) {
    setSelectedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  }

  useLayoutEffect(() => {
    function navigationToFormHandler() {
      if (!selectedLocation) {
        Alert.alert(
          "No location picked",
          "You have to pick a location by tapping on a map first",
        );

        return;
      }

      navigation.navigate("AddPlace", { location: selectedLocation });
    }

    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          color={tintColor}
          size={24}
          onPress={navigationToFormHandler}
        />
      ),
    });
  }, [navigation, selectedLocation]);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78,
        longitude: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      onPress={selectLocationHandler}
    >
      {selectedLocation && <Marker coordinate={selectedLocation} />}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
