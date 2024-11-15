import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import ScrollSection from "./components/ScrollSection/ScrollSection";
import xSvg from "/x.svg";

function App() {
  const bottomRef = useRef<HTMLDivElement>(null!);

  const isInView = useInView(bottomRef, { amount: 1 });

  useEffect(() => {
    console.log(isInView);
  }, [isInView]);

  return (
    <>
      <main>
        <ScrollSection></ScrollSection>
        <ScrollSection>
          <p className="sectionDetails">we are the unloved.</p>
        </ScrollSection>

        <ScrollSection>
          <p className="sectionDetails">
            we are an independent creative studio
          </p>
        </ScrollSection>

        <ScrollSection>
          <p className="sectionDetails">
            we use design and digital to find answers to your questions
          </p>
        </ScrollSection>

        <ScrollSection>
          <p className="sectionDetails">
            creative problem solving is a process,
          </p>
        </ScrollSection>
        <ScrollSection>
          <p className="sectionDetails">a process we live by.</p>
        </ScrollSection>
        <ScrollSection>
          <p className="sectionDetails">are you feeling unloved?</p>
        </ScrollSection>
        <ScrollSection>
          <p className="sectionDetails">
            <a className="contactLink" href="mailto:beloved@theunloved.co.uk">
              beloved@theunloved.co.uk
            </a>{" "}
            <a className="contactLink" href="tel:01162182233">
              +44 (0)116 218 2233
            </a>
            <span className="socials">
              <a
                className="contactLink"
                href="https://www.instagram.com/the_un.loved/"
              >
                instagram
              </a>{" "}
              <a className="contactLink" href="https://x.com/the_un_loved">
                twitter
              </a>
            </span>
          </p>
        </ScrollSection>
        <div ref={bottomRef} className="finalSectionWrapper">
          <ScrollSection>
            <p className="sectionDetails">#beautifulbydesign</p>
          </ScrollSection>
        </div>

        <div className="videopage">
          <motion.img
            animate={{
              filter: [`brightness(0.5)`, `brightness(1)`, `brightness(0.5)`],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            src={xSvg}
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            src="https://theunloved.co.uk/Unloved_Site_V4.1.mp4"
          ></video>
        </div>

        <ScrollButton bottomInView={isInView} />
      </main>
    </>
  );
}

export default App;
