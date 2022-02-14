import React from "react";

import envelope from "../../assets/envelope.png";
import { VscMail } from "react-icons/vsc";

const Cta = () => {
  return (
    <section className="lg:mt-6 lg:mb-36 lg:py-36 text-center bg-secondary mt-12 pb-12">
      <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row">
        <img
          src={envelope}
          alt="Portrait of David Correa"
          className="max-w-[60%] lg:max-w-md mt-12 lg:mt-0"
        />
        <div className="text-center flex flex-col justify-center align-center">
          <h2 className="major mx-8 text-4xl lg:text-5xl lg:max-w-xl lg:mx-auto">
            Want to get in touch?
          </h2>
          <div className="">
            <p className="text-lg mx-8 my-8 lg:max-w-prose">
              I'm always open to talk. Even if I'm not currently looking for new
              opportunities, my inbox is always avaliable. Let me know what you
              think, ask me a question, or just say hi. I'll get back to you.
            </p>
            <a
              href="mailto:david.correav@gmail.com?subject=Mail from dcorrea.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">
                <VscMail size="24" className="mr-3" /> Contact me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
