import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const SocialSignin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  // Mutation for posting user data
  const postUser = useMutation({
    mutationFn: async (user) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/users/register`,
        user
      );
      return data;
    },
    onSuccess: () => {
      // navigate("/");
    },
  });

  const handleGoogleSignin = async () => {
    try {
      const result = await googleSignIn();
      const user = result.user;
      if(user){
        navigate('/')
      }

      // Define new user object
      const newUser = {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        role: "traveler",
        status: "approved",
      };

      // Post user data
      postUser.mutate(newUser);
    } catch (error) {
      console.error("Google Sign-in error:", error);
    }
  };

  return (
    <>
      <button
        onClick={handleGoogleSignin}
        className="w-full font-lato text-sm  flex items-center justify-center border border-gray-300 rounded-md py-2 text-gray-700 cursor-pointer font-medium hover:bg-gray-100 transition duration-300"
      >
        <FcGoogle className="mr-2 text-xl " /> Continue with Google
      </button>

      <div className="my-4 flex items-center">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-gray-500">or</span>
        <hr className="flex-grow border-gray-300" />
      </div>
    </>
  );
};

export default SocialSignin;
