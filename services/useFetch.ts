import { useEffect, useState } from 'react';

const useFetch = <T>(
  fetchFunction: (page?: number) => Promise<MoviesResponse>,
  autoFetch = true,
) => {
  const [data, setData] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [page, setPage] = useState(1);

  const fetchData = async (nextPage: number) => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFunction(nextPage);

      setData((prev) => {
        const uniqueIds = new Set(prev.map((item) => item.id));
        const newMovies = result.results.filter(
          (item) => !uniqueIds.has(item.id),
        );
        return [...prev, ...newMovies];
      });
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    setPage((prev) => {
      const newPage = prev + 1;
      fetchData(newPage);
      return newPage;
    });
  };

  const reset = () => {
    setData([]);
    setLoading(false);
    setError(null);
    setPage(1);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData(page);
    }
  }, [page]);

  return { data, loading, error, fetchData, reset, loadMore };
};
export default useFetch;
