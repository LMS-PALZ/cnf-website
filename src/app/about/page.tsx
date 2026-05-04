import Founderpage from "./founder";
import StoryPage from "./story";
import Team from "./team";
import CoreValues from "./values";

const stats = [
  {
    value: "5,000+",
    title: "INDIVIDUALS REACHED",
    subtitle: "Across 4 states, 9 communities",
  },
  {
    value: "86%",
    title: "ECONOMIC ACTIVATION",
    subtitle: "SSU Programme graduates",
  },
  {
    value: "2024",
    title: "YEAR FOUNDED",
    subtitle: "CAC Registered May 2024",
  },
  {
    value: "100%",
    title: "FREE – IN-PERSON PROGRAMMES",
    subtitle: "All programs at zero cost",
  },
];

export default function AboutPage() {




  return (
    <>
      <section className="w-full bg-[#101C14] text-white py-25 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
              Who We Are & <br />
              Why We <span className="text-[#E8B94C]">Exist</span>
            </h1>

            <p className="text-[#7B8C82] max-w-lg leading-relaxed">
              The Chiggy Nsofor Foundation was born from one simple belief:
              that where you start in life should never determine where you end up.
              We exist to close that gap — one skill, one community, one opportunity at a time.
            </p>
          </div>

          <div className="grid grid-cols-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
            {stats.map((item, index) => (
              <div
                key={index}
                className=" p-6 flex flex-col justify-between min-h-[160px]"
              >
                <h2 className="text-3xl md:text-4xl text-[#E8B94C] font-semibold">
                  {item.value}
                </h2>

                <div className="mt-4">
                  <p className="text-xs tracking-widest text-[#A0A4A1]">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#A0A4A1] mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-0 bottom-0 w-[300px] h-[300px] bg-yellow-[#15311E] blur-[120px] rounded-full pointer-events-none"></div>
      </section>
      <StoryPage />
      <CoreValues />
      <Founderpage />
      <Team />
    </>
  );
}





