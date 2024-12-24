import { useLayoutEffect } from "react";
import { Text } from "react-native";

import IconButton from "../components/ui/icon-button";
import { RootStackScreenProperties } from "../types/navigation";

export default function PlacesScreen({
  navigation,
}: RootStackScreenProperties<"Places">) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="add"
          color={tintColor}
          onPress={() => navigation.navigate("AddPlace")}
          size={27}
        />
      ),
    });
  }, [navigation]);

  return <Text>Places screen</Text>;
}
