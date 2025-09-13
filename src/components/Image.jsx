import React from "react";
import "../index.css";

const shapeStyles = {
    "rounded-corners": "h-96 w-full rounded-lg object-cover object-center",
    "circle": "h-96 w-96 rounded-full object-cover object-center md:float-right md:circle md:ml-6 md:mb-4",
};

export default function Image({ src, alt, shape = "rounded-square" }) {
    const shapeClassName = shape in shapeStyles ? shapeStyles[shape] : shapeStyles["rounded-corners"];

    return (
        <img
            src={src}
            alt={alt}
            class={shapeClassName} />
    );
}