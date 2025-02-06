import { AddForm } from "./_components/add-form";

export default function Page() {
  return (
    <div className="flex flex-col w-full h-full p-8 space-y-4">
      <h1 className="font-bold text-center">Add new menu</h1>
      <AddForm />
    </div>
  );
}
