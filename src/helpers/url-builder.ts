export const urlBuilder = (filters: Record<string, string>): string => {
  let baseURL: string = "/newsapi/everything?";

  if (filters.keyword) baseURL += `q=${filters.keyword}`;
  if (filters.language) baseURL += `&language=${filters.language}`;

  if (filters.sortBy) baseURL += `&sortBy=${filters.sortBy}`;

  return baseURL;
};
