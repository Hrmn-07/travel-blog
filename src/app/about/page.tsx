import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 pl-2 text-slate-700">
        About My Blog
      </h1>

      <Card className="mb-8 hover:scale-105 transition-all mx-5">
        <CardHeader>
          <CardTitle className="text-xl">History</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            I created this blog in 2024 to share my passion for exploring the
            world. It all started with a solo backpacking trip to Bali, where I
            discovered not only new cultures but also a deep love for
            storytelling. Since then, I have been traveling, writing, and
            capturing moments to inspire others to step out of their comfort
            zones and experience the beauty of the world.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8 hover:scale-105 transition-all mx-5">
        <CardHeader>
          <CardTitle className="text-xl">Author Bio</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Hi, I’m Herman—a travel enthusiast, storyteller, and explorer at
            heart. From bustling cities to remote landscapes, I’m on a mission
            to uncover the world’s beauty, one destination at a time.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8 hover:scale-105 transition-all mx-5">
        <CardHeader>
          <CardTitle className="text-xl">My Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            To inspire others to explore the world, embrace new cultures, and
            create unforgettable memories. Through storytelling and practical
            tips, I aim to make travel accessible, meaningful, and unforgettable
            for everyone.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8 hover:scale-105 transition-all mx-5">
        <CardHeader>
          <CardTitle className="text-xl">My Vision</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            To build a global community of travelers who celebrate diversity,
            protect our planet, and find joy in exploring the world’s wonders.
          </p>
        </CardContent>
      </Card>

      <Card className=" hover:scale-105 transition-all mx-5">
        <CardHeader>
          <CardTitle className="text-xl">Contact Info</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Email: herman12@gmail.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Blog Street, Batam City, Indonesia</p>
        </CardContent>
      </Card>
    </div>
  );
}
