import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTravelDeals = async () => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_BASE_URL}/api/v1/travel-deals`
  );

  return data;
};

const useTravelDealsData = () => {
  return useQuery({
    queryKey: ["travel-deals"],
    queryFn: fetchTravelDeals,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};

export default useTravelDealsData;
