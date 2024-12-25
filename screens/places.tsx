import { View } from "react-native";

import PlacesList from "../components/places/places-list";

export default function PlacesScreen() {
  return (
    <View style={{ flex: 1 }}>
      <PlacesList places={[]} />
    </View>
  );
}
