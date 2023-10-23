import React, { useState } from "react";
import { toast } from "react-toastify";
import ContextApi from "./ContextApi";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { fireDB } from "../firebase/firebaseconfig";

function ContextState(props) {
    const [mode, setMode] = useState("light");
    const [loading, setloading] = useState(false);
    const [product, setproduct] = useState({
        title: null,
        prize: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }),
    });

    const addproduct = async () => {
        if (
            product.title === null ||
            product.prize === null ||
            product.imageUrl === null ||
            product.category === null ||
            product.description === null
        ) {
            return toast.error("All fields are required");
        }
        setloading(true);
        try {
            const productRef = collection(fireDB, "products");
            await addDoc(productRef, products);
            toast.success("Add product successfully");
            setloading(false);
        } catch (error) {
            console.log(error);
            setloading(false);
        }
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "rgb(17,24,39)";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
        }
    };
    return (
        <>
            <ContextApi.Provider
                value={{ mode, toggleMode, loading, setloading }}
            >
                {props.children}
            </ContextApi.Provider>
        </>
    );
}

export default ContextState;
