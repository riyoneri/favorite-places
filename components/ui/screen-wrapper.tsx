import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

import { Colors } from "../../constants/style";

export default function ScreenWrapper({ children }: PropsWithChildren) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    backgroundColor: Colors.gray700,
  },
});
