import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import CartContextProvider from "../store/CartContextProvider.jsx";
import { ToastContainer } from "react-toastify";

export default function RootLayout() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <Outlet />
        <ToastContainer />
      </CartContextProvider>
    </>
  );
}
