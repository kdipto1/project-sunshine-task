import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../Images/Icons/google.png";

const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [from, user, navigate]);
  if (loading) {
    return;
  }
  if (error) {
    alert(error?.message);
  }
  return (
    <div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-dark w-50 d-block mx-auto my-2"
      >
        <img
          style={{ width: "30px", marginRight: "5px" }}
          src={google}
          alt=""
        />
        Google SignIn
      </button>
    </div>
  );
};

export default SocialLogin;
