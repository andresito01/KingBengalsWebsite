import { auth, googleProvider } from "./config/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import WebNavHeader from "../components/WebNavHeader";
import Footer from "../components/Footer";

import LoginCSS from "./styles/Login.module.css";

//>>>>>>>>>>>>>>>>>>>>> Admin - LogIn - Page <<<<<<<<<<<<<<<<<<<<
const Login = () => {
  // console.log(auth?.currentUser?.email);
  return (
    <div className={LoginCSS.loginContainer}>
      <WebNavHeader />
      <SignInWithGmail />
      <Footer />
    </div>
  );
};

const SignInWithGmail = () => {
  const navigate = useNavigate();

  // login with google account
  const signInGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }

    navigate("/adminHomePage", { replace: true });
  };

  return (
    <div className={LoginCSS.signInContainer}>
      {/* Admin Login Page */}
      <section>
        <h2>Admin Only</h2>
        <p>
          If you need help, or need to contact our support team please sent us
          an email
        </p>
      </section>

      {/********* Log out ************/}
      <section>
        <button type="button" onClick={signInGoogle}>
          Log In with Google
        </button>
      </section>

      <hr></hr>
    </div>
  );
};

export default Login;
