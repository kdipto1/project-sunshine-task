import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Login/SocialLogin';
import "./Register.css"

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, error1] =
    useSendEmailVerification(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading || sending) {
      return;
    }
    if (error || error1) {
      alert(error?.message || error1?.message);
    }
  }, [error, error1, loading, sending]);

  const handleRegister = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (email) {
      await sendEmailVerification(email);
      createUserWithEmailAndPassword(email, password);
      navigate("/");
      alert("Email sent");
    } else {
      alert("Please enter your email and password carefully");
    }
  };
  return (
    <div className=" container mt-2 register">
      <h2 className="text-center">Please Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" required />
        <input
          type="password"
          name="password"
          placeholder="your password"
          required
        />
        <input type="submit" value="Register" id="btn" />
      </form>
      <p className="text-center">
        Already have an account?{" "}
        <Link style={{ textDecoration: "none" }} to="/login">
          Please Login
        </Link>{" "}
      </p>
      <hr />

      <SocialLogin />
    </div>
  );
};

export default Register;