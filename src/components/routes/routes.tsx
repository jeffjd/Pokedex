import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "./routes.style";

import Header from "../header";
import Footer from "../footer";

import Home from "../page/home";

const RootElement = () => {
    return (
        <BrowserRouter>
            <Container>
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
                <Footer />
            </Container>
        </BrowserRouter>
    );
};

export default RootElement;
