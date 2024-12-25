import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { useLayoutEffect, useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";

import { Location } from "../../api";
import { Colors } from "../../constants/style";
import { RootStackScreenRouteProperties } from "../../types/navigation";
import { getMapPreview } from "../../util/location";
import OutlinedButton from "../ui/outlined-button";

export default function LocationPicker() {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const router = useRoute<RootStackScreenRouteProperties<"AddPlace">>();
  const [pickedLocation, setPickedLocation] = useState<Location | undefined>();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  useLayoutEffect(() => {
    if (router.params) setPickedLocation(router.params.location);
  }, [router.params, isFocused]);

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) return;

    const location = await getCurrentPositionAsync();

    setPickedLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  function pickLocationHandler() {
    navigation.navigate("Map");
  }

  async function verifyPermissions() {
    if (
      locationPermissionInformation?.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app",
      );

      return false;
    }

    return true;
  }

  return (
    <View>
      <View style={styles.mapPreview}>
        {pickedLocation ? (
          <Image
            style={styles.image}
            source={{
              uri: getMapPreview(
                pickedLocation.longitude,
                pickedLocation.latitude,
              ),
            }}
          />
        ) : (
          <Text>No location picked yet.</Text>
        )}
      </View>
      <View style={styles.actions}>
        <OutlinedButton onPress={getLocationHandler} icon="location">
          Locate User
        </OutlinedButton>
        <OutlinedButton onPress={pickLocationHandler} icon="map">
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 4,
  },
});
