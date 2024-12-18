import Link from "next/link";
import { Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 bg-opacity-30">
      <div className="container mx-auto px-3 py-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; 2024 Herman's Travel Blog. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/Hrmn-07/travel-blog"
              target="_blank"
              className="text-gray-700 hover:text-blue-500 hover:scale-110 transition-all"
            >
              <Github className="h-7 w-7" />
            </Link>
            <Link
              href="https://x.com/"
              className="text-gray-700 hover:text-blue-500 hover:scale-110 transition-all"
            >
              <Twitter className="h-7 w-7" />
            </Link>
            <Link
              href="https://www.instagram.com/hrmn_r_"
              target="_blank"
              className="text-gray-700 hover:text-blue-500 hover:scale-110 transition-all pr-4"
            >
              <Instagram className="h-7 w-7" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
