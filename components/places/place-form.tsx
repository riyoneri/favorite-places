import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView, StyleSheet } from "react-native";

import { Place } from "../../models/place";
import { placeSchema, PlaceSchemaType } from "../../validation/place-schema";
import Input from "../input";
import Button from "../ui/button";
import ImagePicker from "./image-picker";
import LocationPicker from "./location-picker";

interface PlaceFormProperties {
  onAddPlace: (place: Omit<Place, "id">) => void;
}

export default function PlaceForm({ onAddPlace }: PlaceFormProperties) {
  const methods = useForm<PlaceSchemaType>({
    resolver: zodResolver(placeSchema),
  });

  function addPlaceHandler(data: PlaceSchemaType) {
    onAddPlace({
      address: data.address,
      imageUri: data.imageUri,
      location: data.location,
      title: data.name,
    });

    methods.reset();
  }

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
