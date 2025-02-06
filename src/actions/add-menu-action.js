"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addMenuAction(_, formData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const price = Number(formData.get("price"));
  const discount =
    Number(formData.get("discount")) > 40
      ? 40
      : Number(formData.get("discount"));
  const image = formData.get("image");

  await fetch("https://v1.appbackend.io/v1/rows/FCgJhjmDTrkf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{ title, description, price, discount, image }]),
  });

  revalidatePath("/");
  revalidatePath("/manage");

  redirect("/manage");
}
