import {
  Image,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Place } from "../../models/place";

interface PlaceItemProperties extends PressableProps {
  place: Place;
}

export default function PlaceItem({ place, onPress }: PlaceItemProperties) {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Image source={{ uri: place.imageUri }} />
        <View>
          <Text>{place.title}</Text>
          <Text>{place.address}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const _styles = StyleSheet.create({});
