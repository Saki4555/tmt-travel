import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useVideosData = () => {
  const { data: videos = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["videos"],
    queryFn: async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/v1/videos`
      );
      return response.data;
    },
  });

  return { videos, isLoading, isError, refetch };
};

export default useVideosData;
