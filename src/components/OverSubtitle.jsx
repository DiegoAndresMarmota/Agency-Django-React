import React from "react";
import imagenSubHome from "../assets/img/SubUndercover.jpg";

const OverSubtitle = (props) => {
    return (
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-full -scroll-mx-12 pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-white lg:top-[calc(100%-45rem)] sm:top-[calc(100%-30rem)]">
              <img
                src={imagenSubHome}
                className="w-full h-full object-cover"
                alt="undercover-home"
              />
            </div>
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-7xl text-white text-shadow">
                  {props.title}
                </h1>
                <p className="mt-6 text-lg leading-8 sm:text-center text-white text-shadow">
                  {props.subtitle}
                </p>
                <p className="mt-1 text-lg leading-8 sm:text-center text-white text-shadow">
                  {props.author}
                </p>
                <div className="mt-8 flex gap-x-4 sm:justify-center"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
};

export default OverSubtitle;
