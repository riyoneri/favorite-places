import {
  Image,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Colors } from "../../constants/style";
import { Place } from "../../models/place";

interface PlaceItemProperties extends PressableProps {
  place: Place;
}

export default function PlaceItem({ place, onPress }: PlaceItemProperties) {
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    overflow: "hidden",
  },
  pressed: {
    opacity: 0.9,
  },
  image: {
    flex: 1,
    height: 100,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.gray700,
  },
  address: {
    fontSize: 12,
    color: Colors.gray700,
  },
});
