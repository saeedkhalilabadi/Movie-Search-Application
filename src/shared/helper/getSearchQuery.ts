

type GetSearchQueryProps = {
  s: string | null;
  type?: string | null;
  y?: string | null;
  page?: string | null;
};
export default function getSearchQuery(props: GetSearchQueryProps) {
  const { s, page, type, y } = props;
  let query = "";
  if (s) query = `${query}&s=${s}`;
  if (y) query = `${query}&y=${y}`;
  if (type === "movie" || type === "series" || type === "episode")
    query = `${query}&type=${type}`;
  if (page) query = `${query}&page=${page}`;
  return query;
}
