import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div className="min-h-screen bg-white">
      <center>
        <div className="text-black  bg-white ">
          <p className="mt-16 bg-white">
            WELCOME TO THE NEXT GEN BLOG PPLICATION!
          </p>
        </div>
      </center>
      <div className="flex flex-col mt-24 ml-4 gap-4 p-12 md:flex-row">
        <div className="text-xl md:w-1/2">
          Welcome to next-gen blogging app made with the help of NEXTjs and
          TYPESCRIPT.
          <p className="mt-4">
            This blog app has blogs from my side that are interesting, and you
            may read it every day.
          </p>
        </div>

        <div className="md:w-1/2">
          <Image
            src="/land.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <h1>hello streak hello </h1>
    </div>
  );
};

export default page;
