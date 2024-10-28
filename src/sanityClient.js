// In /src/sanityClient.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "d3jxz1tr",
  dataset: "production", // replace with your dataset name, usually 'production'
  apiVersion: "2024-10-27", // use the current date (YYYY-MM-DD)
  useCdn: true, // set to true for faster, cached responses in production
  token:
    "skWDz87BES1EmQeviAZ5XZwT67lWOGVPVe6ScjPUQOdNazA0SjXnJwKzFKUR8KBotBQuwnD0iCtxfYsma6riRAGF98sI73UnDZRNIpVRENh8QRwjkYOMDkb0dSDNHOTVUGcY65pJrSUskQ4U998U6lau6iWXihYggJdS6YO0puWm8oi1TkTV",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
