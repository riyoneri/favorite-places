import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import OutlinedButton from "../components/ui/outlined-button";
import { Colors } from "../constants/style";
import { Place } from "../models/place";
import { RootStackScreenProperties } from "../types/navigation";
import { fetchPlaceDetails } from "../util/database";

export default function PlaceDetailScreen({
  navigation,
  route,
}: RootStackScreenProperties<"PlacesDetail">) {
  const selectedPlaceId = route.params.placeId;
  const [fetchedPlace, setFetchedPlace] = useState<Place | undefined>();

  useEffect(() => {
    async function fetchSinglePlace() {
      const place = await fetchPlaceDetails(selectedPlaceId);

      if (place) {
        navigation.setOptions({ title: place.title });
        setFetchedPlace(place);
      }
    }

    fetchSinglePlace();
  }, [navigation, selectedPlaceId]);

  function showOnMapHandler() {
    if (!fetchedPlace) return;

    navigation.navigate("Map", {
      location: {
        latitude: fetchedPlace.location.latitude,
        longitude: fetchedPlace.location.longitude,
      },
    });
  }

  if (!fetchedPlace)
    return (
      <View>
        <Text>Loading place...</Text>
      </View>
    );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fallBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    alignItems: "center",
  },
  image: { height: "35%", minHeight: 200, width: "100%", objectFit: "cover" },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
