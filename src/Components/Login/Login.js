import React, { useEffect, useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import "./Login.css"

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef("");
  let from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
    if (loading || sending) {
      return;
    }
    if (error || resetError) {
      alert(error?.message || resetError?.message);
    }
  }, [from, user, navigate, error, loading, resetError, sending]);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      alert("Sent email");
    } else {
      alert("please enter your email address");
    }
  };
  return (
    <div className="login mt-2 container">
      <h2 className="text-center">Please login</h2>
      <form onSubmit={handleLogin}>
        <input
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="your password"
          required
        />
        <input type="submit" value="Login" id="btn" />
      </form>
      <p className="text-center ">
        New to Dent Care?{" "}
        <Link
          className="text-primary pe-auto text-decoration-none"
          to="/register"
        >
          please register
        </Link>
      </p>
      <p className="text-center">
        Forget password?{" "}
        <span
          className="text-primary resetpassword pe-auto text-decoration-none"
          onClick={resetPassword}
        >
          Reset Password
        </span>
      </p>
      <hr />
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;