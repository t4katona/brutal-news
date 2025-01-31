import { urlBuilder } from "../helpers/url-builder";

export async function searchFromApi(filters: Record<string, string>) {
  const url = urlBuilder(filters);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_NEWS_API_KEY}`,
      },
    });
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err.message);
  }
}
