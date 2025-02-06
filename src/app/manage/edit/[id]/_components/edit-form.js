"use client";

import { Button } from "@/components/ui/button";
import editMenuAction from "@/actions/edit-menu-action";
import { useActionState } from "react";
import { LabeledInput } from "@/components/labeled-input";
import { LabeledTextarea } from "@/components/labeled-textarea";

export const EditForm = ({ menu }) => {
  const [_, formAction, pending] = useActionState(editMenuAction, null);

  return (
    <form className="flex flex-col items-center w-full" action={formAction}>
      <input hidden name="id" defaultValue={menu._id} />
      <div className="w-full my-2 space-y-1 md:w-1/2">
        <LabeledInput
          id="title"
          name="title"
          defaultValue={menu.title}
          type="text"
          placeholder="Coffee with raspberry pi"
          required
        >
          Menu title
        </LabeledInput>
      </div>
      <div className="w-full my-2 space-y-1 md:w-1/2">
        <LabeledTextarea
          id="description"
          name="description"
          defaultValue={menu.description}
        >
          Menu description
        </LabeledTextarea>
      </div>
      <div className="flex flex-row justify-between w-full my-2 md:w-1/2">
        <div className="w-full mr-2 space-y-1 md:w-1/2">
          <LabeledInput
            id="price"
            name="price"
            type="number"
            placeholder="100000"
            defaultValue={menu.price}
            required
          >
            Price
          </LabeledInput>
        </div>
        <div className="w-full ml-2 space-y-1 md:w-1/2">
          <LabeledInput
            id="discount"
            name="discount"
            type="number"
            placeholder="10"
            max="40"
            step="1"
            defaultValue={menu.discount}
            required
          >
            Discount (max 40)
          </LabeledInput>
        </div>
      </div>
      <div className="w-full my-2 md:w-1/2">
        <LabeledInput
          id="image"
          name="image"
          type="url"
          placeholder="https://example.com/image.jpg"
          defaultValue={menu.image}
          required
        >
          Image URL
        </LabeledInput>
      </div>
      <Button className="mt-4" type="submit" disabled={pending}>
        Edit menu
      </Button>
    </form>
  );
};
