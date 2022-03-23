import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../header";
import Footer from "../footer";

import Home from "../page/home";

const RootElement = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default RootElement;
