import React from "react";

const Wrapper = ({ children, className } :any) => {
    return (
        <div
            className={`md:w-full md:max-w-[1380px] md:px-20 md:py-10  md:mx-auto ${
                className || ""
            }`}
        >
            {children}
        </div>
    );
};

export default Wrapper;