import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderLayout } from "./header.style";

const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderLayout className="header">
            <div className="grid head">
                <p>Logo pokemon</p>
            </div>
            <div className="grid home">
                <button type="button" onClick={() => navigate("/")}>
                    Home
                </button>
            </div>
            <div className="grid pokedex">
                <button type="button" onClick={() => navigate("/pokedex")}>
                    Pokedex
                </button>
            </div>
        </HeaderLayout>
    );
};

export default Header;
