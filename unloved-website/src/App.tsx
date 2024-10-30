import ScrollSection from "./components/ScrollSection/ScrollSection";

function App() {
  return (
    <>
      <main>
        <ScrollSection>scroll Secttion</ScrollSection>
        <ScrollSection>scroll Secttion</ScrollSection>
        <ScrollSection>scroll Secttion</ScrollSection>
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
