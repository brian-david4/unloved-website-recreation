import ScrollSection from "./components/ScrollSection/ScrollSection";

function App() {
  return (
    <>
      <main>
        <ScrollSection></ScrollSection>
        <ScrollSection>
          <h1>we are the unloved.</h1>
        </ScrollSection>
        <ScrollSection>we are an independent creative studio</ScrollSection>
        <ScrollSection>
          we use design and digital to find answers to your questions
        </ScrollSection>
        <ScrollSection>creative problem solving is a process,</ScrollSection>
        <ScrollSection>a process we live by.</ScrollSection>
        <ScrollSection>are you feeling unloved?</ScrollSection>
        <ScrollSection>
          beloved@theunloved.co.uk <br />
          <br />
          +44 (0)116 218 2233 <br />
          <br />
          instagram twitter
        </ScrollSection>
        <ScrollSection>
          <p>#beautifulbydesign</p>
        </ScrollSection>

        <div className="videopage">
          <video
            autoPlay
            loop
            muted
            playsInline
            src="https://theunloved.co.uk/Unloved_Site_V4.1.mp4"
          ></video>
        </div>
      </main>
    </>
  );
}

export default App;
