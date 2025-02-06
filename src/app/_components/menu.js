import { fetchMenu } from "@/services/fetch-menu";
import { CoffeeCard } from "./coffee-card";

export const Menu = async () => {
  const coffeeMenu = await fetchMenu();

  return (
    <div className="flex flex-col items-center flex-grow w-full px-8 py-6 space-y-8 h-fit">
      <h2 className="text-lg font-bold text-stone-700 border-y-2 border-stone-700">
        Our Menu.
      </h2>
      <div className="flex flex-wrap justify-center w-full gap-8 xl:w-5/6">
        {coffeeMenu.map((coffee) => {
          return (
            <div key={coffee._id} className="w-full sm:w-72 md:w-72 lg:w-72">
              <CoffeeCard coffee={coffee} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
