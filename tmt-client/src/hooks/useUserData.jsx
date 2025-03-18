import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const fetchUserData = async (uid) => {
   
  if (!uid) return null; // Prevent fetching when there's no userId
  const { data } = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/users/${uid}`);
  return data;
};

const useUserData = () => {
    const { user} = useAuth();
  return useQuery({
    queryKey: ["userData", user?.uid], // Unique key for caching per user
    queryFn: () => fetchUserData(user.uid),
    enabled: !!user?.uid, // Prevents automatic execution if userId is null
  });
};

export default useUserData;
