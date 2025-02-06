"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useActionState } from "react";
import { deleteMenuAction } from "@/actions/delete-menu-action";

export const CoffeeMenuItem = ({ coffee }) => {
  const [_, formAction, pending] = useActionState(deleteMenuAction, null);

  return (
    <li className="flex flex-col w-full p-4 space-y-2 transition-all border rounded-lg border-stone-300 hover:shadow-md">
      <div className="flex flex-row items-center w-full space-x-4">
        <img
          src={coffee.image}
          alt={coffee.title}
          className="object-cover w-24 rounded-lg shadow-md"
        />
        <div className="w-full space-y-1">
          <p className="text-sm">{coffee.title}</p>
          <p className="text-sm">Rp {coffee.price}</p>
          <p className="text-xs text-stone-400">{coffee.description}</p>
        </div>
      </div>
      <div className="flex flex-row justify-end w-full space-x-2">
        <Link
          href={`/manage/edit/${coffee._id}`}
          className="flex items-center px-4 text-xs transition-all border rounded-lg border-stone-300 hover:border-stone-500 hover:shadow-md"
        >
          Edit
        </Link>
        <form action={formAction}>
          <input hidden name="id" defaultValue={coffee._id} />
          <Button
            className="text-xs bg-red-500 rounded-lg hover:bg-red-700 disabled:cursor-wait"
            disabled={pending}
          >
            Delete
          </Button>
        </form>
      </div>
    </li>
  );
};
