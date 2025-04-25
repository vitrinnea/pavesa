import React from "react";

export default function InputTextArea({error="",...args}) {
    return (
        <>
            <textarea {...args} className="h-full border-2 border-gray-300 bg-white px-5 rounded focus:outline-none"/>
            <p className={`text-red-500 ${!error && "hidden"}`}>{error}</p>
        </>
    );
}
