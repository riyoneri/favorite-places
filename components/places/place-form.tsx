import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ScrollView, StyleSheet } from "react-native";

import { placeSchema, PlaceSchemaType } from "../../validation/place-schema";
import Input from "../input";
import ImagePicker from "./image-picker";

export default function PlaceForm() {
  const { control } = useForm<PlaceSchemaType>({
    resolver: zodResolver(placeSchema),
  });

  return (
    <ScrollView style={styles.form}>
      <Input control={control} name="name" inputConfig={{}} label="Title" />
      <ImagePicker />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },
});
