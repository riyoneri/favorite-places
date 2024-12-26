import { useEffect, useState } from "react";
import { View } from "react-native";

import PlacesList from "../components/places/places-list";
import { Place } from "../models/place";
import { fetchPlaces } from "../util/database";

export default function PlacesScreen() {
  const [loadedPlaces, setLoadedPlaces] = useState<Place[]>([]);
  useEffect(() => {
    async function loadPlaces() {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    }

    loadPlaces();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <PlacesList places={loadedPlaces} />
    </View>
  );
}
