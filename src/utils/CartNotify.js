import { Bounce, toast } from "react-toastify";

export const notify = (product) =>
    toast.success(`Item: 🛒 ${product.title} added to cart!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });