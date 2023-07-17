import Image from "next/image";
import React from "react";

const NoContent = () => {
    return (
        <div className="w-full flex flex-col gap-10 justify-center items-center">
            <Image
                width={400}
                height={400}
                src={"/images/no_data.png"}
                alt="no_data"
                className="aspect-square rounded-md"
            />
            <h1 className="text-lg font-bold">Currently no data available</h1>
        </div>
    );
};

export default NoContent;
