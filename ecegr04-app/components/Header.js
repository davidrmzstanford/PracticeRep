import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/D.jpg"
              alt="Adaltas Logo"
              width={25}
              height={25}
            />
            <span className="font-bold text-xl">
              Web Technologies
            </span>
          </div>
        </Link>
        <nav className="space-x-4">
          <Link href="/articles">
            <span className="hover:underline cursor-pointer">Articles</span>
          </Link>
          <Link href="/about">
            <span className="hover:underline cursor-pointer">About</span>
          </Link>
          <Link href="/contacts">
            <span className="hover:underline cursor-pointer">Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}