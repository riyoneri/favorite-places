import { useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { MapPressEvent, Marker } from "react-native-maps";

import { Location } from "../api";
import IconButton from "../components/ui/icon-button";
import { RootStackScreenProperties } from "../types/navigation";

export default function MapScreen({
  navigation,
  route,
}: RootStackScreenProperties<"Map">) {
  const [selectedLocation, setSelectedLocation] = useState<
    Location | undefined
  >();

  const placeDetailsLocation = route.params?.location;

  function selectLocationHandler(event: MapPressEvent) {
    if (placeDetailsLocation) return;

    setSelectedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  }

  useLayoutEffect(() => {
    if (!placeDetailsLocation) {
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
    }
  }, [navigation, placeDetailsLocation, selectedLocation]);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: placeDetailsLocation?.latitude ?? 37.78,
        longitude: placeDetailsLocation?.longitude ?? -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      onPress={selectLocationHandler}
    >
      {selectedLocation && <Marker coordinate={selectedLocation} />}
      {placeDetailsLocation && <Marker coordinate={placeDetailsLocation} />}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
