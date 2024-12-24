import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, TextStyle } from "react-native";

interface IconButtonProperties {
  icon: keyof typeof Ionicons.glyphMap;
  size: number;
  onPress: () => void;
  color: TextStyle["color"];
}

export default function IconButton({
  icon,
  onPress,
  size,
  color,
}: IconButtonProperties) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={onPress}
    >
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: { opacity: 0.7 },
});
