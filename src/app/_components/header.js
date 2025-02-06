import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between w-full px-8 py-4 h-fit">
      <Link href="/" className="text-sm hover:underline">
        menu.
      </Link>
      <h1 className="text-2xl font-bold text-center underline text-stone-800">
        Kaffie
      </h1>
      <Link href="/manage" className="text-sm hover:underline">
        manage.
      </Link>
    </header>
  );
};
