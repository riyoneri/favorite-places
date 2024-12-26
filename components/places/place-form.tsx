import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView, StyleSheet } from "react-native";

import { placeSchema, PlaceSchemaType } from "../../validation/place-schema";
import Input from "../input";
import Button from "../ui/button";
import ImagePicker from "./image-picker";
import LocationPicker from "./location-picker";

function addPlaceHandler() {}

export default function PlaceForm() {
  const methods = useForm<PlaceSchemaType>({
    resolver: zodResolver(placeSchema),
  });

  return (
    <FormProvider {...methods}>
      <ScrollView style={styles.form}>
        <Input control={methods.control} name="name" label="Title" />
        <ImagePicker />
        <LocationPicker />
        <Button onPress={methods.handleSubmit(addPlaceHandler)}>
          Add Place
        </Button>
      </ScrollView>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
  },
});
