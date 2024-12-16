import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

export async function getEntries(contentType: string) {
  const response = await client.getEntries({
    content_type: contentType,
  });
  return response.items;
}

export async function getEntry(contentType: string, entryId: string) {
  const response = await client.getEntry(entryId);
  return response;
}
