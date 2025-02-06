export const dynamic = "force-dynamic";

import { Header } from "./_components/header";
import { MenuList } from "./_components/menu-list";
import { Footer } from "./_components/footer";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full h-screen">
      <Header />
      <MenuList />
      <Footer />
    </div>
  );
}
