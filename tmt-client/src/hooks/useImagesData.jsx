import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useImagesData = () => {
    const { data: images = [], isLoading, isError, refetch } = useQuery({
        queryKey: ["videos"],
        queryFn: async () => {
          const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/api/v1/images`
          );
          return response.data;
        },
      });
    
      return { images, isLoading, isError, refetch };
};

export default useImagesData;