import React from "react";
import { Error404Layout } from "./error404.style";
import ImgError404 from "../../../assets/img/error404.webp";

const Error404 = () => {
    return (
        <Error404Layout className="error404">
            <h1>ERROR 404</h1>
            <div>
                <img src={ImgError404} alt="Error404" />
            </div>
        </Error404Layout>
    );
};

export default Error404;
