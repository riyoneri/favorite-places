import * as SQLite from "expo-sqlite";

import { DatabasePlace } from "../api";
import { Place } from "../models/place";

const database = SQLite.openDatabaseSync("places.db");

export function init() {
  return database.execAsync(`
      CREATE TABLE IF NOT EXISTS  places (id INTEGER PRIMARY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
          )
        `);
}

export function insertPlace(place: Omit<Place, "id">) {
  return database.runAsync(
    "INSERT INTO places (title, imageUri, address, lat, lng) VALUES (?, ?, ?, ?, ?)",
    [
      place.title,
      place.imageUri,
      place.address,
      place.location.latitude,
      place.location.longitude,
    ],
  );
}

export async function fetchPlaces(): Promise<Place[]> {
  const places = await database.getAllAsync<DatabasePlace>(
    "SELECT * FROM places",
  );

  return places.map((place) => ({
    id: String(place.id),
    address: place.address,
    imageUri: place.imageUri,
    title: place.title,
    location: { latitude: place.lat, longitude: place.lng },
  }));
}
