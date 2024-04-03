"use client";
import { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import NavLink from "./ui/NavLink";
import ThemeSwitcher from "./ThemeSwitcher";

import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Gear", href: "/gear" },
  { label: "Projects", href: "/projects" },
  { label: "Lifestyle", href: "/lifestyle" },
];

const KubrickleStencil = localFont({
  src: "../public/KubrickleStencil.ttf",
  display: "swap",
});

export default function Navigation() {
  const pathname = `/${usePathname().split("/")[1]}`; // active paths on dynamic subpages
  const { theme } = useTheme();

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollThreshold = 100; // Adjust this value as needed

      setHasScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-20 bg-white dark:bg-black lg:border-b transition-all duration-300",
        hasScrolled ? "border-secondary" : "border-transparent"
      )}
    >
      <nav className="px-4 md:px-6 py-3 lg max-w-[700px] mx-auto flex justify-between items-center gap-3">
        <Link
          href="/"
          className="shrink-0 text-primary text-center flex justify-center"
        >
          <div className={cn(KubrickleStencil.className, "text-3xl mt-2")}>
            M
          </div>
        </Link>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href}>{link.label}</NavLink>
            </li>
          ))}
        </ul>
        <Popover className="relative ml-auto md:hidden">
          <Popover.Button className="flex items-center gap-1 text-secondary p-1 rounded-lg focus-visible:outline-none focus:ring-0">
            Menu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              className="absolute z-10 right-0 p-2 mt-2 overflow-auto text-base origin-top-right shadow-lg w-40 rounded-xl bg-primary focus:outline-none sm:text-sm"
              style={theme === "terminal" ? { background: "#040605" } : {}}
            >
              <div className="grid">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "px-4 py-2 rounded-md hover:text-primary transition-colors",
                      pathname === link.href
                        ? "bg-secondary font-medium"
                        : "font-normal"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <div className="flex items-center justify-center w-8 h-8">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
