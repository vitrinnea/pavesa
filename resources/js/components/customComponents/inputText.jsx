import React from "react";

export default function InputText({error="",...args}) {
    return (
        <>
            <input type="text" {...args} className="border-2 border-gray-300 bg-white px-5 rounded focus:outline-none w-full"/>
            <p className={`text-red-500 ${!error && "hidden"}`}>{error}</p>
        </>
    );
}
