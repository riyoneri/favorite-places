import { z } from "zod";

export const placeSchema = z.object({
  name: z.string().min(3, "must be atlease 3 charcters"),
});

export type PlaceSchemaType = z.infer<typeof placeSchema>;
