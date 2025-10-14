import { SITE_NAME } from "@/config/app-config";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-zinc-950 text-blue-100 text-lg text-center p-4">
      <Link href="/">{SITE_NAME}</Link>
    </header>
  );
};
