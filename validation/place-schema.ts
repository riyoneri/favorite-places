import { z } from "zod";

export const placeSchema = z.object({
  name: z.string().min(3, "Name must be atleast 3 charcters"),
  imageUri: z.string().min(3, "Image url must be atleast 3 characters"),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  address: z.string().min(3, "Address must be atleast 3 characters"),
});

export type PlaceSchemaType = z.infer<typeof placeSchema>;
