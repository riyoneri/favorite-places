import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../constants/style";
import { Place } from "../../models/place";
import PlaceItem from "./place-item";

interface PlacesListProperties {
  places: Place[];
}

export default function PlacesList({ places }: PlacesListProperties) {
  const navigation = useNavigation();
  if (places.length === 0) {
    return (
      <View style={styles.fallBackContainer}>
        <Text style={styles.fallBackText}>
          No places added yet - Start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      data={places}
      contentContainerStyle={styles.list}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          place={itemData.item}
          onPress={() =>
            navigation.navigate("PlacesDetail", { placeId: itemData.item.id })
          }
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 15,
  },
  fallBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallBackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
