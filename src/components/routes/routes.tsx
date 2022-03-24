import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout, SectionLayout } from "./routes.style";

import Header from "../header";
import Footer from "../footer";

import Home from "../page/home";

const RootElement = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Header />
                <SectionLayout className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </SectionLayout>
                <Footer />
            </MainLayout>
        </BrowserRouter>
    );
};

export default RootElement;
