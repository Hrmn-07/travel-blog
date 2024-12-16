import { createClient, Entry } from "contentful";
import Image from "next/image";
import { notFound } from "next/navigation";
import RichText from "@/lib/richText";
import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { Card, CardContent } from "@/components/ui/card";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
});

interface Post {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    image: {
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
              height: number;
            };
          };
        };
      };
    };
    slug: string;
    body: RichTextDocument | undefined;
  };
}

async function getPost(slug: string): Promise<Post | null> {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": slug,
      limit: 1,
    });

    if (response.items.length === 0) {
      return null;
    }

    return response.items[0] as unknown as Post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-9 text-center text-slate-700">
        {post.fields.title?.toString()}
      </h1>
      {post.fields.image && (
        <Image
          src={`https:${post.fields.image.fields.file.url}`}
          alt={post.fields.slug}
          width={post.fields.image.fields.file.details.image.width}
          height={post.fields.image.fields.file.details.image.height}
          className="w-auto h-auto mb-6 rounded-lg place-self-center"
        />
      )}
      <div className="p-6 bg-white rounded-xl bg-opacity-70">
        <RichText document={post.fields.body} />
      </div>
    </article>
  );
}
