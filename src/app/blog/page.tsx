import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div className="bg-gray-200 min-h-screen ">
    <div className="p-2 flex justify-center items-center ">
      <div className="w-3/4 p-2 bg-white mt-8 ">
        <div className="header mt-2 font-bold sm:text-base md:text-2xl text-center ">
          TITLE: Embracing Change: A Path to Personal Growth
        </div>
        <div className="profile mb-2 mr-4 text-right sm:text-base md:text-xl">By : Aditya Shah</div>
        <div className="p-4">
        In a world that constantly evolves, embracing change becomes a key to unlocking personal growth. Change is not merely a force to adapt to; it's an opportunity for transformation. Whether it's a career shift, a new perspective, or a challenging situation, change can push us beyond our comfort zones, fostering resilience and creativity. Instead of fearing the unknown, view change as a stepping stone to self-discovery. Embrace the discomfort, as it often leads to profound breakthroughs. By cultivating an open mindset, we can harness the power of change, turning it into a catalyst for positive personal development.
          
        </div>
        <center>
            <Image
              src="/land.png"
              width={500}
              height={500}
              alt="Picture of the author"
              className="mt-8"
            />
          </center>
          <p>21/01/2023</p>
      </div>
      
    </div>
    </div>
  );
};

export default Blog;
