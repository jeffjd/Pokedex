import React from "react";
import { Layout } from "./header.style";

const Header = () => {
    return (
        <Layout className="header">
            <div className="grid head">
                <p>Logo pokemon</p>
            </div>
            <div className="grid home">
                <button type="button">Home</button>
            </div>
            <div className="grid pokedex">
                <button type="button">Pokedex</button>
            </div>
        </Layout>
    );
};

export default Header;
