import { API_URL } from "@/constants/api-url";

export async function fetchMenu() {
  try {
    const res = await fetch(API_URL);
    const { data } = await res.json();
    data.sort((a, b) => a.updatedAt - b.updatedAt);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch menu");
  }
}

export async function fetchMenuById(id) {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch menu by id");
  }
}
