import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Nopage from "./pages/nopage/Nopage";
import ContextState from "./context/ContextState";
import Login from "./pages/registration/Login";
import SignUp from "./pages/registration/SignUp";
import ProductInfo from "./pages/productinfo/ProductInfo";
import Addproduct from "./pages/admin/page/Addproduct";
import Updateproduct from "./pages/admin/page/Updateproduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <ContextState>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/e-commerce"
                            element={<Home />}
                        />
                        <Route
                            path="/order"
                            element={
                                <ProtectedRoute>
                                    <Order />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/cart"
                            element={<Cart />}
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRouteForAdmin>
                                    <Dashboard />
                                </ProtectedRouteForAdmin>
                            }
                        />
                        <Route
                            path="/*"
                            element={<Nopage />}
                        />
                        <Route
                            path="/login"
                            element={<Login />}
                        />
                        <Route
                            path="/signup"
                            element={<SignUp />}
                        />
                        <Route
                            path="/productinfo/:id"
                            element={<ProductInfo />}
                        />
                        <Route
                            path="/addproduct"
                            element={
                                <ProtectedRouteForAdmin>
                                    <Addproduct />
                                </ProtectedRouteForAdmin>
                            }
                        />
                        <Route
                            path="/updateproduct"
                            element={
                                <ProtectedRouteForAdmin>
                                    <Updateproduct />
                                </ProtectedRouteForAdmin>
                            }
                        />
                    </Routes>
                    <ToastContainer />
                </BrowserRouter>
            </ContextState>
        </>
    );
}

export default App;

export const ProtectedRoute = ({ children }) => {
    const user = localStorage.getItem("user");
    if (user) {
        return children;
    } else {
        return <Navigate to={"/login"} />;
    }
};

export const ProtectedRouteForAdmin = ({ children }) => {
    const admin = JSON.parse(localStorage.getItem("user"));
    if (admin.user.email === "yash@gmail.com") {
        return children;
    } else {
        return <Navigate to={"/login"} />;
    }
};
