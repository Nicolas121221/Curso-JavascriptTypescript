export const fetchJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const json = rawData.json();

  return json;
};
