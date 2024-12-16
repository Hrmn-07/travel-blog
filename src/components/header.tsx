import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white shadow-md bg-opacity-10">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-slate-700">
          Herman's Travel Blog
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-yellow-700">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-yellow-700"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <Input
            type="search"
            placeholder="Search something"
            className="w-64"
          />
          <Button size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
