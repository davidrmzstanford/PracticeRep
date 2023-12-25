import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserCircleIcon } from '@heroicons/react/24/outline'; 

export default function Header() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/profile');
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          // Handle errors or logout state
          console.error('Profile fetch failed:', response.statusText);
        }
      } catch (error) {
        console.error('Fetching profile caused an error:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <header className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/D.jpg"
              alt="Logo"
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
          {profile && (
            <div className="flex items-center space-x-1 cursor-pointer">
              <UserCircleIcon className="h-6 w-6" />
              <span>{profile.username}</span>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}