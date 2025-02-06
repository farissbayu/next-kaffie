import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CoffeeMenuItem } from "./coffee-menu-item";
import { fetchMenu } from "@/services/fetch-menu";

export const MenuList = async () => {
  const coffeeMenu = await fetchMenu();

  return (
    <div className="w-full px-8 my-4 lg:w-3/4">
      <div className="flex flex-row items-center justify-between">
        <p className="text-sm">Kaffie. menu</p>
        <Button
          className="flex text-xs bg-yellow-900/80 hover:bg-yellow-900 align-center rounded-xl"
          asChild
        >
          <Link href="/manage/add">+ Add menu</Link>
        </Button>
      </div>
      <ul className="flex flex-col gap-4 mt-4">
        {coffeeMenu.map((coffee) => (
          <CoffeeMenuItem key={coffee._id} coffee={coffee} />
        ))}
      </ul>
    </div>
  );
};
