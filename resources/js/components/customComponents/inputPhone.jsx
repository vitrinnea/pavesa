import React from "react";
import InputMask from "react-input-mask";

export default function InputPhone({error="",...args}) {
    return (
        <div className="flex flex-col w-full">
            <InputMask
                type="text"
                {...args}
                mask="+503 9999-9999"
                className="border-2 border-gray-300 bg-white px-5 rounded focus:outline-none w-full"
            />
            {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
        </div>
    );
}
