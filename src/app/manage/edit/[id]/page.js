import { fetchMenuById } from "@/services/fetch-menu";
import { EditForm } from "./_components/edit-form";

export default async function Page({ params }) {
  const { id } = await params;
  const menu = await fetchMenuById(id);

  return (
    <div className="flex flex-col w-full h-full p-8 space-y-4">
      <h1 className="font-bold text-center">Edit menu</h1>
      <EditForm menu={menu} />
    </div>
  );
}
