import { useEffect, useState } from 'react';
import { fetchMovieDetails } from '@/services/api';

const useFetchMovieDetails = (id: string) => {
  const [data, setData] = useState<MovieDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const result = await fetchMovieDetails(id);
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return { data, loading, error };
};
export default useFetchMovieDetails;
