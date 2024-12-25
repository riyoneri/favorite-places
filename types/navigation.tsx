/* eslint-disable unicorn/prevent-abbreviations */
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Location } from "../api";

export type RootStackParametersList = {
  Places: undefined;
  PlacesDetail: { placeId: string };
  AddPlace?: {
    location: Location;
  };
  Map?: { location: Location };
};

export type RootStackScreenProperties<T extends keyof RootStackParametersList> =
  NativeStackScreenProps<RootStackParametersList, T>;

export type RootStackScreenRouteProperties<
  T extends keyof RootStackParametersList,
> = RouteProp<ParamListBase, T> & { params: RootStackParametersList[T] };

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParametersList {}
  }
}
