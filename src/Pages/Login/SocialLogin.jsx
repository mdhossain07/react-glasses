import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const handleGoogle = () => {
    googleLogin()
      .then((res) => {
        toast.success("Successfully Logged In!");
        console.log(res.user);
      })

      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="divider">continue with</div>
      <div className="">
        <button onClick={handleGoogle} className="btn btn-neutral">
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
