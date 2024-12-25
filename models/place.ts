import { Location } from "../api";

export class Place {
  constructor(
    public title: string,
    public imageUri: string,
    public address: string,
    public location: Location,
    public id: string,
  ) {}
}
