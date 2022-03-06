export const settings = {
  perPage: 20,
};

export const paginate = (page: number) => ({
  skip: page ? page * settings.perPage : 0,
  limit: settings.perPage,
});

type URL = string | null;

type PrevFn = (_obj: { page: number; url: string; query: string }) => URL;

export const prevUrl: PrevFn = ({ page, url, query }) => {
  if (page - 1 >= 0) return url + `/${page - 1}${query}`;
  return null;
};

type NextFn = (_obj: {
  url: string;
  query: string;
  page: number;
  totalElements: number;
}) => URL;

export const nextUrl: NextFn = ({ url, page, query, totalElements }) => {
  const next = (page + 1) * settings.perPage;
  if (next <= totalElements) return url + `/${page + 1}${query}`;
  return null;
};
