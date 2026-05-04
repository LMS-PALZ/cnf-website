import { BookIcon, GlobeIcon, HeartIcon, HandshakeIcon, ImageOffIcon, RocketIcon, StarIcon } from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { fontDisplay } from "@/lib/fonts";
import { pageMetadata } from "@/lib/metadata";
import { sdgCards } from "@/data/our-work/sdgs";

export const metadata = pageMetadata(
  "About — mission and impact",
  "Mission, vision, and values of the Chiggy Nsofor Foundation, a Nigerian nonprofit advancing skills, education, and humanitarian aid.",
);

const teamMembers = [
  {
    name: "Pamela Ibemesi",
    role: "Partnerships & Programs Officer",
    description:
      "Pamela drives CNF's partnership development and programme coordination — building the relationships and operational structures that keep every pillar running effectively. She also serves as Board Secretary.",
    initials: "PI",
    bg: "from-cnf-primary to-cnf-primary/90 text-white",
  },
  {
    name: "Victor A.",
    role: "Operations & Finance Lead",
    description:
      "Oversees CNF's day-to-day operations and financial management — ensuring every naira is tracked, every process is sound, and every programme is delivered on time and on budget.",
    initials: "VA",
    bg: "from-cnf-primary/90 via-cnf-night to-cnf-primary/80 text-white",
  },
  {
    name: "Hajimrea K.",
    role: "Communications",
    description:
      "Tells CNF's story across platforms — from impact reports and social media to partner communications — making sure the world knows what is being built in Abuja's communities.",
    initials: "HK",
    bg: "from-cnf-pillar-humanitarian via-cnf-primary to-cnf-primary/80 text-white",
  },
  {
    name: "Dorothy Uji",
    role: "Programme Delivery",
    description:
      "On the ground, every session, every cohort. Dorothy ensures the SSU Programme and community outreaches are delivered with consistency, care, and quality for every beneficiary.",
    initials: "DU",
    bg: "from-cnf-pillar-skills/80 via-cnf-primary/80 to-cnf-primary/90 text-white",
  },
  {
    name: "Marho Imodje",
    role: "Teaching Assistant & LMS Developer",
    description:
      "An SSU Cohort graduate who returned to the classroom — this time as a teacher. Marho now leads development of CNF's Moodle-based LMS platform, launching Q3 2026.",
    initials: "MI",
    bg: "from-cnf-pillar-education via-cnf-primary/70 to-cnf-primary/90 text-white",
  },
];

const boardMembers = [
  {
    name: "Chiggy Nsofor",
    title: "Founder & CEO",
    description:
      "Founder and executive lead. Responsible for CNF's strategic direction, partnerships, and programme development.",
    role: "Founder",
    initials: "CN",
    tone: "bg-cnf-primary text-white",
  },
  {
    name: "Dickson Nsofor",
    title: "Trustee — Technology & Innovation",
    description:
      "Founder of Kora Technologies. Provides strategic oversight on CNF's digital infrastructure and technology programmes. Relationship disclosed; recusal policy in place.",
    role: "Technology",
    initials: "DN",
    tone: "bg-cnf-pillar-skills text-white",
  },
  {
    name: "Afolabi Abiodun Ademola",
    title: "Trustee — Finance & Governance",
    description:
      "Director of Finance & Accounts at NEITI. Fellow ICAN, Fellow CCSA, Associate ACCA. Two PhDs. Provides rigorous financial oversight and governance leadership.",
    role: "Finance",
    initials: "AA",
    tone: "bg-cnf-accent text-cnf-accent-ink",
  },
];

const values = [
  {
    title: "Integrity",
    description: "We do the right thing — always. With our resources, our people, and our beneficiaries.",
    icon: StarIcon,
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standard in everything we deliver, because the people we serve deserve nothing less.",
    icon: BookIcon,
  },
  {
    title: "Possibility",
    description:
      "We believe no circumstance is permanent. We bring creative, forward-thinking solutions to challenges others have accepted as fixed.",
    icon: RocketIcon,
  },
  {
    title: "People First",
    description:
      "We are stronger together — our team, our communities, our beneficiaries. No one is left behind, no one works alone.",
    icon: HandshakeIcon,
  },
  {
    title: "Growth",
    description:
      "We don’t just serve — we build. Every programme is designed to leave people more capable, more confident, and more independent than we found them.",
    icon: HeartIcon,
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-cnf-primary text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_24%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(196,162,74,0.08),transparent_32%)]" />
        <Container className="relative py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-cream/70">
                HOME <span className="text-cnf-accent">/ ABOUT US</span>
              </p>
              <h1 className={`${fontDisplay.className} mt-6 text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl`}>
                Who We Are &
                <span className="block text-white">Why We <span className="text-cnf-accent">Exist</span></span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-cnf-cream/90 md:text-lg">
                The Chiggy Nsofor Foundation was born from one simple belief: that where you start in life should never determine where you end up. We exist to close that gap — one skill, one community, one opportunity at a time.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-cnf-night/80 p-1 shadow-2xl shadow-black/20 md:p-2">
              <div className="grid gap-px rounded-[1.75rem] bg-white/10 sm:grid-cols-2">
                {[
                  {
                    value: "5,000+",
                    label: "Individuals reached",
                    detail: "Across 4 states, 9 communities",
                  },
                  {
                    value: "86%",
                    label: "Economic activation",
                    detail: "SSU Programme graduates",
                  },
                  {
                    value: "2024",
                    label: "Year founded",
                    detail: "CAC Registered May 2024",
                  },
                  {
                    value: "100%",
                    label: "Free — in-person programmes",
                    detail: "All programmes at zero cost",
                  },
                ].map((item) => (
                  <div
                    key={item.value}
                    className="group overflow-hidden rounded-[1.75rem] bg-cnf-night/75 p-6 transition-colors duration-300 hover:bg-cnf-night/60"
                  >
                    <p className="text-4xl font-semibold text-cnf-accent">{item.value}</p>
                    <p className="mt-3 text-sm uppercase tracking-[0.18em] text-cnf-cream/70">{item.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-cnf-cream/80">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-primary">Our Story</p>
            <h2 className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-cnf-ink`}>From a Calling to a Foundation</h2>
            <div className="mt-12 space-y-8">
              {[
                {
                  date: "January 2024",
                  title: "CNF is founded by Chiggy Nsofor in Abuja, Nigeria",
                },
                {
                  date: "May 2024",
                  title: "Formally registered with the Corporate Affairs Commission (CAC No. 7511818)",
                },
                {
                  date: "June 2024",
                  title: "Skill Scale-Up (SSU) Programme launches — Cohort 1 begins training",
                },
                {
                  date: "2024 – 2025",
                  title: "Humanitarian, education, and healthcare outreaches expand across FCT, Nasarawa, Kaduna, and Plateau",
                },
                {
                  date: "March 2026",
                  title: "Cohort 3 active, 74+ graduates across three cohorts, LMS platform in development for Q3 2026 launch",
                },
              ].map((item) => (
                <div key={item.date} className="flex gap-4">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cnf-primary" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cnf-primary">{item.date}</p>
                    <p className="mt-2 text-base leading-7 text-cnf-muted">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-primary">The story so far</p>
            <h3 className="text-3xl font-semibold text-cnf-ink">Building a movement from conviction, not from a boardroom.</h3>
            <div className="space-y-5 text-base leading-8 text-cnf-muted">
              <p>
                The Chiggy Nsofor Foundation did not begin in a boardroom. It began with a decision — to leave behind a successful international fintech career in Toronto and return home to Nigeria to answer a more pressing question: <strong>what happens to the millions of young Nigerians who never get a fair shot?</strong>
              </p>
              <p>
                Nigeria has one of the highest youth unemployment rates in the world. According to the National Bureau of Statistics, over 53% of young Nigerians are unemployed or underemployed. Over 80% of graduates enter the workforce without the practical digital skills that today’s economy demands. For communities in the FCT, Nasarawa, Kaduna, and Plateau — these are not statistics. They are neighbours, family members, and neighbours' children.
              </p>
            </div>
            <div className="rounded-3xl border border-cnf-primary/10 bg-cnf-cream p-7">
              <p className="text-lg italic leading-8 text-cnf-ink">
                “I kept asking myself: what if these young people simply had the tools? What if someone just showed up — consistently — with real skills, real support, and real belief in them? That question became CNF.”
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-cnf-primary">— Chiggy Nsofor, Founder & CEO</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cnf-night py-20 md:py-28 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-accent">Our Foundation</p>
          <h2 className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-white`}>Mission & Vision</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-cnf-cream/80">
            Every decision we make — every programme we run, every partner we choose — flows from these core commitments.
          </p>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            {[
              {
                title: "Our Mission",
                headline: "To Provide & To Build",
                text: "To provide essential support and build lasting capacity in individuals and communities across Nigeria — creating pathways out of vulnerability and into opportunity.",
                icon: BookIcon,
              },
              {
                title: "Our Vision",
                headline: "A Nigeria Where No One Is Left Behind",
                text: "We envision a Nigeria where every vulnerable person — regardless of background, location, or circumstance — is given a genuine opportunity to live a better quality of life.",
                icon: GlobeIcon,
              },
            ].map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/10">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cnf-accent text-cnf-accent-ink">
                  <item.icon className="h-5 w-5" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-cnf-cream/75">{item.title}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{item.headline}</h3>
                <p className="mt-4 text-base leading-8 text-cnf-cream/80">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-primary">What We Stand For</p>
          <h2 className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-cnf-ink`}>Our Core Values</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-cnf-muted">
            Five values that define how we work, who we are, and what every beneficiary, partner, and team member can always expect from CNF.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3 xl:grid-cols-5">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-[2rem] border border-cnf-border bg-white p-7 text-center shadow-sm">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-cnf-accent/15 text-cnf-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-cnf-ink">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-cnf-muted">{value.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-cnf-cream py-20 md:py-28">
        <Container className="grid gap-16 xl:grid-cols-[0.95fr_1.05fr] items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-primary">Meet the Founder</p>
            <h2 className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-cnf-ink`}>Chiggy Nsofor — The Person Behind the Purpose</h2>
            <p className="mt-6 text-base leading-8 text-cnf-muted">
              Chiggy Nsofor is the Founder and CEO of the Chiggy Nsofor Foundation. Before founding CNF, she served as Lead Financial Trader at both Kora and Fincra in Toronto, bringing sharp financial acumen and operational discipline back to the work she cares about most.
            </p>
            <p className="mt-5 text-base leading-8 text-cnf-muted">
              Her path to CNF was not conventional. Prior to fintech, she founded Farmstripe, an agri-tech platform operating across five Nigerian states. She holds degrees from the University of Sunderland and Covenant University Nigeria, and completed a leadership programme at Harvard University (2025).
            </p>
            <p className="mt-5 text-base leading-8 text-cnf-muted">
              What Chiggy brings to CNF is not just her academic credentials or professional track record — it is an unwillingness to accept that youth unemployment, educational exclusion, and poverty are simply facts of Nigerian life. Under her leadership, CNF has grown from a personal conviction into a structured, data-driven organisation that has touched over 5,000 lives in under two years.
            </p>

            <ul className="mt-10 space-y-3 text-sm text-cnf-muted">
              {[
                "Harvard University, 2025",
                "University of Sunderland",
                "Covenant University Nigeria",
                "Former Lead Financial Trader — Kora & Fincra, Toronto",
                "Founder, Farmstripe (Agri-tech, 5 Nigerian States)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-cnf-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-cnf-border bg-cnf-primary p-8 text-white shadow-2xl shadow-black/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_20%)]" />
              <div className="relative flex min-h-[420px] flex-col items-center justify-center rounded-[1.75rem] border border-white/10 bg-cnf-primary/70">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-3xl text-cnf-cream">
                  <ImageOffIcon className="h-10 w-10" />
                </div>
                <p className="mt-5 text-center text-sm uppercase tracking-[0.28em] text-cnf-cream/75">Place Chiggy’s professional photo here</p>
              </div>
            </div>
            <div className="rounded-3xl border border-cnf-primary/15 bg-white p-6 text-cnf-ink shadow-sm">
              <p className="text-base leading-7 text-cnf-ink">
                “I kept asking myself: what if these young people simply had the tools? What if someone just showed up — consistently — with real skills, real support, and real belief in them? That question became CNF.”
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-primary">Our People</p>
          <h2 className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-cnf-ink`}>The Team Making It Happen</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-cnf-muted">
            CNF is powered by a small, dedicated team of professionals committed to delivering high-quality programmes at the community level every single day.
          </p>

          <div className="mt-10 grid gap-6 xl:grid-cols-2">
            {teamMembers.map((member) => (
              <div key={member.name} className="overflow-hidden rounded-[2rem] border border-cnf-border bg-white shadow-sm">
                <div className="rounded-t-[1.75rem] bg-cnf-surface/80 p-6 text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-cnf-cream text-cnf-primary">
                    <ImageOffIcon className="h-10 w-10" />
                  </div>
                  <p className="mt-4 text-sm uppercase tracking-[0.25em] text-cnf-muted">Photo coming soon</p>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-cnf-ink">{member.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-cnf-primary">{member.role}</p>
                  <p className="mt-4 text-sm leading-7 text-cnf-muted">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cnf-surface py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-primary">Governance</p>
          <h2 className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-cnf-ink`}>Our Board of Trustees</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-cnf-muted">
            CNF is governed by a dedicated board that brings together expertise in technology, finance, and organisational development to ensure accountability and strategic oversight.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {boardMembers.map((member) => (
              <div key={member.name} className="rounded-[2rem] border border-cnf-border bg-white p-7 shadow-sm">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl ${member.tone} text-sm font-semibold`}>{member.initials}</div>
                <h3 className="mt-5 text-xl font-semibold text-cnf-ink">{member.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-cnf-primary">{member.title}</p>
                <p className="mt-4 text-sm leading-7 text-cnf-muted">{member.description}</p>
                <span className="mt-4 inline-flex rounded-full bg-cnf-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cnf-primary">
                  {member.role}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] bg-cnf-night px-8 py-10 text-white shadow-2xl shadow-black/10">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cnf-accent/80">Accountability & Transparency</p>
                <h3 className="mt-4 text-3xl font-semibold">CNF 2025 Annual Report</h3>
                <p className="mt-4 text-base leading-8 text-cnf-cream/80">
                  Full programme results, financials, and impact data — published openly for every partner, funder, and community we serve.
                </p>
              </div>
              <div className="flex items-center justify-start lg:justify-end">
                <ButtonLink href="/news" className="bg-cnf-accent text-cnf-accent-ink hover:bg-cnf-accent-hover">
                  Download Report
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-primary">Global Alignment</p>
          <h2 className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-cnf-ink`}>Our Work & the Sustainable Development Goals</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-cnf-muted">
            CNF's four programme pillars are directly aligned with three United Nations Sustainable Development Goals.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sdgCards.map((card) => (
              <div key={card.number} className="rounded-[2rem] border border-cnf-border bg-white p-7 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cnf-surface text-3xl font-semibold text-cnf-primary">
                    {card.number}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cnf-primary">SDG {card.number}</p>
                    <h3 className="mt-2 text-xl font-semibold text-cnf-ink">{card.title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-cnf-muted">{card.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] bg-cnf-primary px-8 py-12 text-white shadow-2xl shadow-black/10">
            <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr] lg:items-center">
              <div>
                <h3 className="text-3xl font-semibold">Believe in What We’re Building?</h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-cnf-cream/80">
                  Support CNF's work — through donations, partnerships, or volunteering — and help us reach 30,000 young Nigerians by 2030.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/donate">Donate Today</ButtonLink>
                <ButtonLink href="/get-involved" variant="secondary">
                  Partner With Us
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
