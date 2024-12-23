/* eslint-disable unicorn/prevent-abbreviations */
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParametersList = {
  Places: undefined;
  PlacesDetail: { placeId: string };
  AddPlace: undefined;
  Map?: { placeId: string };
};

export type RootStackScreenProperties<T extends keyof RootStackParametersList> =
  NativeStackScreenProps<RootStackParametersList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParametersList {}
  }
}
