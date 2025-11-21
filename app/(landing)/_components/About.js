import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <div className="flex absolute -top-24 max-w-full overflow-clip">
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 rotate-12"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6 -rotate-6"></div>
        <div className="cloud -ms-6"></div>
        <div className="cloud -ms-6"></div>
      </div>
      <div id="about" className="max-w-[85rem] px-4 py-10 sm:py-14 mx-auto">
        <div className="my-7">
          <h2 className="font-stopbuck text-6xl text-duis text-shadow text-center mt-14">
            About $SPSN
          </h2>
          <h3 className="font-stopbuck text-2xl text-center italic text-black">
            {`(South Park Sucks Now)`}
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <Image
              className="h-full object-cover"
              src="/collection/9.png"
              width={700}
              height={700}
              alt="Dui Image"
            />
          </div>

          <div className="p-4 h-full sm:p-6">
            <h3 className="font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-justify sm:text-left">
              <p className="indent-12">
                <span className="text-3xl font-bold">South Park sucks now</span>, refers
                to a recent storyline in the show itself, originating from the fictional{" "}
                <span className="font-semibold italic">{'“South Park Sucks Now”'}</span>{" "}
                episode that satirizes online fan complaints. In the plot, 
                Stan starts an online page with the same name after feeling the show has 
                become too political and disconnected from its chaotic, old-school charm.{" "}
              </p>
              <p className="indent-12 mt-3">
                The joke escalates when Stan’s rant spirals into a full-blown cryptocurrency scam, turning fan frustration into a meta-commentary about how everything—from entertainment to internet culture—gets monetized. The storyline humorously reflects real-world criticisms that the show has become too focused on current events and politics.{" "}
              </p>
              <p className="indent-12 mt-3">
                $SPSN launched in conjunction with that storyline, bridging the show’s satire with an on-chain experiment. Since then, it has been picked up by several major CEXs and even earned a tongue-in-cheek nod on the official South Park Instagram, where it was shamelessly shilled to the fanbase.
              </p>
            </h3>
          </div>
        </div>

        <div className="mt-10 font-mono text-lg sm:text-2xl text-[#33271e] tracking-widest text-center">
          <p>
            The show may or may not have fallen off.
, <span className="text-3xl font-bold">but the meme lives forever</span>{" "}
          <p className="text-4xl p-10">
            But now{" "}
            <span className="text-5xl font-bold underline decoration-duis">
              South Park Sucks Now
            </span>{" "}
            is forever on{" "}
            <span className="text-5xl bg-gradient-to-r from-[#9945FF] to-[#14F195] inline-block text-transparent bg-clip-text font-bold">
              Solana
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
