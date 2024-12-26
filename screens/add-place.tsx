import PlaceForm from "../components/places/place-form";
import { Place } from "../models/place";
import { RootStackScreenProperties } from "../types/navigation";
import { insertPlace } from "../util/database";

export default function AddPlaceScreen({
  navigation,
}: RootStackScreenProperties<"AddPlace">) {
  async function handleAddPlace(place: Omit<Place, "id">) {
    await insertPlace(place);
    navigation.replace("Places");
  }
  return <PlaceForm onAddPlace={handleAddPlace} />;
}
