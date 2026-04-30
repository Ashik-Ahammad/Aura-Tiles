"use client";
import { useState } from "react";
import { Avatar, Link } from "@heroui/react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const toastId = toast.loading("Logging out...");
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully!", { id: toastId });
          router.refresh();
          router.push("/login");
        },
      },
    });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-divider bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-2 max-w-7xl mx-auto relative">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tighter">
              <Image
                src="https://i.ibb.co.com/qYNkHXv9/logo.png"
                alt="logo"
                width={190}
                height={60}
                priority
              />
            </span>
          </Link>
        </div>

        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <li>
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors text-foreground"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/all-tiles"
              className="text-sm font-medium hover:text-primary transition-colors text-foreground"
            >
              All Tiles
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className="text-sm font-medium hover:text-primary transition-colors text-foreground"
            >
              My Profile
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          {!user && (
            <div className="hidden md:block">
              <Link href="/login">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold cursor-pointer text-sm hover:opacity-90 transition-opacity">
                  Login
                </button>
              </Link>
            </div>
          )}
          {user && (
            <div className="flex">
              <Avatar>
                <Avatar.Image alt="User" src={user?.image} />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Link onClick={handleLogout} href="/login">
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold cursor-pointer text-sm hover:opacity-90 transition-opacity">
                  Logout
                </button>
              </Link>
            </div>
          )}

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* *****Mobile***** */}

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-divider animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col items-center text-center gap-2 p-6">
            <li className="w-full">
              <Link
                href="/"
                className="block py-3 text-lg w-full text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/all-tiles"
                className="block py-3 text-lg w-full text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                All Tiles
              </Link>
            </li>
            <li className="w-full">
              <Link
                href="/profile"
                className="block py-3 text-lg w-full text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                My Profile
              </Link>
            </li>
            <li className="pt-4 w-full max-w-50">
              <Link
                href="/login"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-lg cursor-pointer hover:opacity-90 transition-opacity">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
