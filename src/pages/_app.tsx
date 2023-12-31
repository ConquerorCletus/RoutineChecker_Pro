import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/features.css";
import "@/styles/dashboard.css";
import dashboard from "./dashboard";
// import PrivateRoute from "@/components/PrivateRoute";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      {/* <PrivateRoute> */}

      {/* </PrivateRoute> */}
      <Component {...pageProps} />

    </>
  );
}
