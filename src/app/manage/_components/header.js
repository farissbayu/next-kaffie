import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex flex-row items-center justify-center w-full px-8 py-4 h-fit">
      <Link
        href="/"
        className="text-xl font-bold text-center text-stone-800 hover:border-b-2 border-stone-800"
      >
        Kaffie.
      </Link>
    </header>
  );
};
