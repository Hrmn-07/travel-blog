import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getEntries } from "@/lib/contentful";

interface Post {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
  };
}

async function getFeaturedPosts(): Promise<Post[]> {
  const entries = await getEntries("blogPost");
  return entries
    .filter((entry: any) => entry.fields.featured === true)
    .map((entry: any) => ({
      sys: { id: entry.sys.id },
      fields: {
        title: entry.fields.title,
        excerpt: entry.fields.excerpt,
        date: entry.fields.date,
        slug: entry.fields.slug,
      },
    }))
    .slice(0, 3); // Limit to 3 featured posts
}

export async function FeaturedPosts() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <section id="featured-posts" className="mb-12">
      <h2 className="text-2xl font-bold mb-6 pl-2">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredPosts.map((post) => (
          <Card key={post.sys.id} className="bg-opacity-5">
            <CardHeader>
              <CardTitle>{post.fields.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{post.fields.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link
                href={`/posts/${post.fields.slug}`}
                className="text-primary hover:underline hover:text-blue-500"
              >
                Read more
              </Link>
              <span className="text-sm text-gray-500">
                {new Date(post.fields.date).toLocaleDateString()}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
