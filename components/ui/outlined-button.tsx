import { Ionicons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { Colors } from "../../constants/style";

interface OutlinedButtonProperties {
  onPress: () => void;
  icon: keyof typeof Ionicons.glyphMap;
}

export default function OutlinedButton({
  onPress,
  children,
  icon,
}: PropsWithChildren<OutlinedButtonProperties>) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons
        style={styles.icon}
        name={icon}
        size={18}
        color={Colors.primary500}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    margin: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.primary500,
    flex: 1,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
  },
});
