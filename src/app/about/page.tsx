import { CnfImage } from "@/components/ui/CnfImage";
import type { ReactNode } from "react";
import { AboutAnnualReportSection } from "@/components/sections/about/AboutAnnualReportSection";
import { AboutCoreValuesSection } from "@/components/sections/about/AboutCoreValuesSection";
import { AboutFoundationSection } from "@/components/sections/about/AboutFoundationSection";
import { PageBanner } from "@/components/sections/PageBanner";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { pageBannerImages } from "@/data/page-banners";
import { fontDisplay } from "@/lib/fonts";
import { pageContentWidthClass } from "@/lib/layout";
import { pageMetadata } from "@/lib/metadata";
import { sdgCards } from "@/data/our-work/sdgs";
export const metadata = pageMetadata("About: mission and impact", "Mission, vision, and values of the Chiggy Nsofor Foundation, a Nigerian nonprofit advancing skills, education, and humanitarian aid.");

type TeamMember = {
    name: string;
    role: string;
    description: string;
    image?: string;
    imageAlt?: string;
    linkedin?: string;
};

const founderLinkedIn = "https://www.linkedin.com/in/chigoziensofor";

function PortraitLinkedInLink({
    href,
    label,
    children,
}: {
    href?: string;
    label: string;
    children: ReactNode;
}) {
    if (!href) {
        return <>{children}</>;
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} on LinkedIn`}
            className="block transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cnf-primary"
        >
            {children}
        </a>
    );
}

/** Team portrait frame. */
const portraitFrameClass =
    "relative aspect-[4/5] w-full max-h-[28rem] overflow-hidden bg-cnf-surface";
/** Founder portrait — slightly taller than team. */
const founderPortraitFrameClass =
    "relative aspect-[4/5] w-full max-h-[32rem] overflow-hidden bg-cnf-surface";
const portraitImageClass = "object-cover object-[50%_18%]";

const teamMembers: TeamMember[] = [
    {
        name: "Pamela Ibemesi",
        role: "Partnerships & Programs Officer",
        description: "Pamela drives CNF's partnership development and programme coordination, building the relationships and operational structures that keep every pillar running effectively. She also serves as Board Secretary.",
        image: "/assets/team/IMG_8009.jpg",
        imageAlt: "Pamela Ibemesi, Partnerships & Programs Officer at the Chiggy Nsofor Foundation",
        linkedin: "https://www.linkedin.com/in/pamela-ibemesi-9a7778373",
    },
    {
        name: "Victor A.",
        role: "Operations & Finance Lead",
        description: "Oversees CNF's day-to-day operations and financial management, ensuring every naira is tracked, every process is sound, and every programme is delivered on time and on budget.",
        image: "/assets/team/victor.jpg",
        imageAlt: "Victor A., Operations & Finance Lead at the Chiggy Nsofor Foundation",
        linkedin: "https://www.linkedin.com/in/victor-anyirigwo-b64788229",
    },
    {
        name: "Hajimrea K.",
        role: "Communications",
        description: "Tells CNF's story across platforms, from impact reports and social media to partner communications, making sure the world knows what is being built in Abuja's communities.",
        image: "/assets/team/hajim.jpg",
        imageAlt: "Hajimrea K., Communications at the Chiggy Nsofor Foundation",
        linkedin: "https://www.linkedin.com/in/hajimrea-kawuwa-aa7392185",
    },
    {
        name: "Dorothy Uji",
        role: "Programme Delivery",
        description: "On the ground, every session, every cohort. Dorothy ensures the Programme and community outreaches are delivered with consistency, care, and quality for every beneficiary.",
        image: "/assets/team/dorothy.jpeg",
        imageAlt: "Dorothy Uji, Programme Delivery at the Chiggy Nsofor Foundation",
        linkedin: "https://www.linkedin.com/in/dorothy-uji-b9b188220",
    },
    {
        name: "Marho Imodje",
        role: "Teaching Assistant & LMS Developer",
        description: "An SSU Cohort graduate who returned to the classroom, this time as a teacher. Marho now leads development of CNF's module-based LMS platform.",
    },
];
const boardMembers = [
    {
        name: "Chiggy Nsofor",
        title: "Founder & CEO",
        description: "Founder and executive lead. Responsible for CNF's strategic direction, partnerships, and programme development.",
        role: "Founder",
        initials: "CN",
        tone: "bg-cnf-primary text-white",
    },
    {
        name: "Dickson Nsofor",
        title: "Trustee, Technology & Innovation",
        description: "Founder of Kora Technologies. Provides strategic oversight on CNF's digital infrastructure and technology programmes.",
        role: "Technology",
        initials: "DN",
        tone: "bg-cnf-pillar-skills text-white",
    },
    {
        name: "Afolabi Abiodun Ademola",
        title: "Trustee, Finance & Governance",
        description: "Director of Finance & Accounts at NEITI. Fellow ICAN, Fellow CCSA, Associate ACCA. Two PhDs. Provides rigorous financial oversight and governance leadership.",
        role: "Finance",
        initials: "AA",
        tone: "bg-cnf-accent text-cnf-accent-ink",
    },
];
export default function AboutPage() {
    return (<>
      <PageBanner
        id="about-hero-title"
        breadcrumbLabel="About Us"
        image={pageBannerImages.about}
        title={
          <>
            Who We Are &amp;
            <br />
            Why We <span className="text-cnf-accent">Exist</span>
          </>
        }
        description="The Chiggy Nsofor Foundation was born from one simple belief: that where you start in life should never determine where you end up. We exist to close that gap, one skill, one community, one opportunity at a time."
      />

      <section className="py-20 md:py-28">
        <Container className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr] items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-primary">Our Story</p>
            <h2 className={`${fontDisplay.className} mt-6 text-balance text-5xl font-semibold leading-[1.08] text-cnf-ink`}>How we started</h2>
            <div className="mt-12 space-y-8">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore deserunt eligendi cumque et saepe totam accusamus fugiat odio, architecto molestiae itaque ipsam id ratione corporis, voluptas obcaecati, quis atque! Praesentium?
                Doloremque ipsum quidem quam nisi totam in culpa nesciunt iusto quasi autem tenetur ex voluptate maxime et aspernatur maiores quibusdam non illum, aut minima nemo, quod amet perspiciatis. Sint, nihil!
                Repudiandae porro repellat corrupti, atque ad blanditiis perspiciatis delectus quasi quibusdam minus? Odit error voluptatibus doloribus quidem ab in animi, eum tempore minus, perspiciatis explicabo sequi maxime vero iste iusto.
                Similique aspernatur, numquam delectus, quam ducimus dignissimos, officiis cum aliquid dolores mollitia atque ipsa nesciunt blanditiis? Ipsum delectus hic similique est maiores unde necessitatibus voluptatibus explicabo dolor. Illum, velit doloremque?
                Assumenda cumque sed mollitia necessitatibus, commodi, dolor similique placeat qui impedit porro eos quae doloremque repellat, quos vel aliquam fuga amet molestiae rerum ea consequuntur praesentium. Veniam recusandae sint ullam?
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative bg-cnf-surface">
              <CnfImage alt="How it started" className="h-auto w-full object-cover" width={1200} height={800} priority={false} sizes="(max-width: 1024px) 100vw, 50vw" src="/assets/howItStarted/howitstarted.jpg"/>
            </div>
            <div className="rounded-3xl border border-cnf-primary/10 bg-cnf-cream p-7">
              <p className="text-lg italic leading-8 text-cnf-ink">
                “I kept asking myself: what if these young people simply had the tools? What if someone just showed up, consistently, with real skills, real support, and real belief in them? That question became CNF.”
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-cnf-primary">- Chiggy Nsofor, Founder & CEO</p>
            </div>
          </div>
        </Container>
      </section>

      <AboutFoundationSection />

      <AboutCoreValuesSection />


      <section className="bg-cnf-surface py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-primary">Governance</p>
          <h2 className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-cnf-ink`}>Our Board of Trustees</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-cnf-muted">
            CNF is governed by a dedicated board that brings together expertise in technology, finance, and organisational development to ensure accountability and strategic oversight.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-[2rem] border border-cnf-border bg-white p-7 shadow-sm"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl ${member.tone} text-sm font-semibold`}
                >
                  {member.initials}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-cnf-ink">{member.name}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-cnf-primary">{member.title}</p>
                <p className="mt-4 text-sm leading-7 text-cnf-muted">{member.description}</p>
                <span className="mt-4 inline-flex rounded-full bg-cnf-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cnf-primary">
                  {member.role}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cnf-cream py-20 md:py-28">
        <Container width="full">
          <div
            className={`${pageContentWidthClass} grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16`}
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-primary">Meet the Founder</p>
              <h2 className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-cnf-ink`}>Chiggy Nsofor, The Person Behind the Purpose</h2>
            <p className="mt-6 text-base leading-8 text-cnf-muted">
              Chiggy Nsofor is the Founder and CEO of the Chiggy Nsofor Foundation.
            </p>
            <p className="mt-5 text-base leading-8 text-cnf-muted">
              She holds degrees from the University of Sunderland and Covenant University Nigeria, and completed a leadership programme at Harvard University (2025).
            </p>
            <p className="mt-5 text-base leading-8 text-cnf-muted">
              What Chiggy brings to CNF is not just her academic credentials, it is an unwillingness to accept that youth unemployment, educational exclusion, and poverty are simply facts of Nigerian life. Under her leadership, CNF has grown from a personal conviction into a structured, data-driven organisation that has touched over 5,000 lives.
            </p>
          </div>

          <div className="flex w-full max-w-lg flex-col gap-6 justify-self-center lg:justify-self-start">
            <div className="w-full overflow-hidden border border-cnf-border bg-white shadow-sm">
              <PortraitLinkedInLink href={founderLinkedIn} label="Chiggy Nsofor">
                <div className={founderPortraitFrameClass}>
                  <CnfImage
                    src="/assets/team/chiggy.jpg"
                    alt="Chiggy Nsofor, Founder and CEO of the Chiggy Nsofor Foundation"
                    fill
                    className={portraitImageClass}
                    sizes="(max-width: 640px) 100vw, 512px"
                    priority
                  />
                </div>
              </PortraitLinkedInLink>
            </div>
            <blockquote className="rounded-3xl border border-cnf-primary/10 bg-white p-6 shadow-sm md:p-7">
              <p className="text-base italic leading-7 text-cnf-ink">
                “I kept asking myself: what if these young people simply had the tools? What if someone just showed up, consistently, with real skills, real support, and real belief in them? That question became CNF.”
              </p>
              <footer className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-cnf-primary">
                — Chiggy Nsofor, Founder &amp; CEO
              </footer>
            </blockquote>
          </div>
          </div>
        </Container>
      </section>

      <section id="team" className="scroll-mt-28 py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-primary">Our People</p>
          <h2 className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-cnf-ink`}>The Team Making It Happen</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-cnf-muted">
            CNF is powered by a small, dedicated team of professionals committed to delivering high-quality programmes at the community level every single day.
          </p>

          <div className="mt-10 grid justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="w-full max-w-sm overflow-hidden rounded-[2rem] border border-cnf-border bg-white shadow-sm"
              >
                <PortraitLinkedInLink href={member.linkedin} label={member.name}>
                  <div className={portraitFrameClass}>
                    {member.image ? (
                      <CnfImage
                        src={member.image}
                        alt={member.imageAlt ?? member.name}
                        fill
                        className={portraitImageClass}
                        sizes="(max-width: 640px) 100vw, 384px"
                      />
                    ) : (
                      <div className="flex h-full min-h-[16rem] items-center justify-center">
                        <ImagePlaceholder label={member.name} tone="light" className="py-4"/>
                      </div>
                    )}
                  </div>
                </PortraitLinkedInLink>
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

      <AboutAnnualReportSection />

      <section className="py-20 md:py-28">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cnf-primary">Global Alignment</p>
          <h2 className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-cnf-ink`}>Our Work & the Sustainable Development Goals</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-cnf-muted">
            CNF&apos;s four programme pillars are directly aligned with three United Nations Sustainable Development Goals.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sdgCards.map((card) => (<div key={card.number} className="rounded-[2rem] border border-cnf-border bg-white p-7 shadow-sm">
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
              </div>))}
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] bg-cnf-primary px-8 py-12 text-white shadow-2xl shadow-black/10">
            <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr] lg:items-center">
              <div>
                <h3 className="text-3xl font-semibold">Believe in What We’re Building?</h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-cnf-cream/80">
                  Support CNF&apos;s work, through donations, partnerships, or volunteering, and help us reach 30,000 young Nigerians by 2030.
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
    </>);
}





