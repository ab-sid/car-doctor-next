import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-20 mb-44 md:mb-60">
      <div className="relative order-2 md:order-1 ">
        <div className="">
          <Image
            className="w-full"
            src={"/assets/images/about_us/person.jpg"}
            alt="person"
            width={400}
            height={400}
          ></Image>
        </div>
        <div className="absolute top-2/3 md:top-2/3 right-10 md:right-20 border-8 border-white">
          <Image
            className="w-[300px] md:w-[400px]"
            src={"/assets/images/about_us/parts.jpg"}
            alt="person"
            width={400}
            height={300}
          ></Image>
        </div>
      </div>
      <div className="order-1 md:order-2 w-2/3 mx-auto md:mx-10 mt-10 mb-10 md:mb-0 md:mt-0 flex flex-col space-y-6">
        <h4 className="text-primary">About Us</h4>
        <h2 className="text-xl font-bold">
          We are qualified & of experience in this field
        </h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable
          Lorem Ipsum available.{" "}
        </p>
        <button className="btn btn-primary w-44">Get More Info</button>
      </div>
    </div>
  );
};

export default About;
