import React from "react";
import guyChilling from "../../assets/guy-chilling.png";

const Home = () => {
  const phrases = [
    "is a Web Developer",
    "Loves to read",
    "thinks you are pretty cool",
    "cooks a mean lasagna",
    "Loves Flexbox and Grid",
    "is pretty good at Wordpress",
    "needs some Coffee",
  ];
  window.onload = () => {
    setInterval(() => {
      const descriptor = document.getElementById("descriptor");
      descriptor.classList.add("descriptorAnimation");
      descriptor.textContent =
        phrases[Math.floor(Math.random() * phrases.length)];
      setTimeout(() => {
        descriptor.classList.remove("descriptorAnimation");
      }, 1000);
    }, 5000);
  };
  return (
    <section className="hero min-h-screen">
      <div className="flex-col hero-content lg:flex-row-reverse gap-12">
        <img
          src={guyChilling}
          alt="Guy sitting with a laptop and a cup of coffee"
          className="max-w-sm text-center"
        />
        <div className="rowdies text-left">
          <h1>
            <span className="text-9xl block px-4 py-2">David</span>
            <span
              className="block text-9xl bg-primary text-base-100 px-4 py-2"
              style={{ width: "42rem" }}
            >
              Correa
            </span>
          </h1>
          <div className="">
            <span className="block text-5xl px-4 py-2" id="descriptor">
              is a Web Developer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
