import React from "react";
import { PokedexLayout } from "./pokedex.style";
import ImgPokedex from "../../../assets/img/pokedex.webp";

const Pokedex = () => {
    return (
        <PokedexLayout>
            <div>
                <img src={ImgPokedex} alt="Pokedex" />
            </div>
        </PokedexLayout>
    );
};

export default Pokedex;
