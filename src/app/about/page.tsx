import { CnfImage } from "@/components/ui/CnfImage";
import type { ReactNode } from "react";
import { AboutAnnualReportSection } from "@/components/sections/about/AboutAnnualReportSection";
import { AboutCoreValuesSection } from "@/components/sections/about/AboutCoreValuesSection";
import { AboutFoundationSection } from "@/components/sections/about/AboutFoundationSection";
import { PageBanner } from "@/components/sections/PageBanner";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Container } from "@/components/ui/Container";
import { pageBannerImages } from "@/data/page-banners";
import { fontDisplay } from "@/lib/fonts";
import { pageContentWidthClass } from "@/lib/layout";
import { primaryEyebrowClassName } from "@/components/sections/home/homeEyebrow";
import { coverImageTopPosition } from "@/lib/image-fit";
import { pageMetadata } from "@/lib/metadata";
import { sdgCards } from "@/data/our-work/sdgs";

const WHOWEARE = {
    storyStart: "/assets/whoweare/whoweare2.jpg",
    storyNow: "/assets/whoweare/whoweare1.jpg",
} as const;

export const metadata = pageMetadata("About", "Mission, vision, and values of the Chiggy Foundation for Opportunity, a Nigerian nonprofit advancing skills, education, and humanitarian aid.");

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
/** Founder portrait: slightly taller than team. */
const founderPortraitFrameClass =
    "relative aspect-[4/5] w-full max-h-[32rem] overflow-hidden bg-cnf-surface";
const portraitImageClass = "object-cover object-[50%_18%]";

const teamMembers: TeamMember[] = [
    {
        name: "Pamela I",
        role: "Partnerships & Programs",
        description: "Pamela drives CFO's partnership development and programme coordination, building the relationships and operational structures that keep every pillar running effectively.",
        image: "/assets/team/PAMELA%20Inew..png",
        imageAlt: "Pamela Ibemesi, Partnerships & Programs Officer at the Chiggy Foundation for Opportunity",
        linkedin: "https://www.linkedin.com/in/pamela-ibemesi-9a7778373",
    },
    {
        name: "Victor A.",
        role: "Operations & Finance",
        description: "Oversees CFO's day-to-day operations and financial management, ensuring every naira is tracked, every process is sound, and every programme is delivered on time and on budget.",
        image: "/assets/team/victor.jpg",
        imageAlt: "Victor A., Operations & Finance Lead at the Chiggy Foundation for Opportunity",
        linkedin: "https://www.linkedin.com/in/victor-anyirigwo-b64788229",
    },
    {
        name: "Hajimrea K.",
        role: "Communications",
        description: "Tells CFO's story across platforms, from impact reports and social media to partner communications, making sure the world knows what is being built in Nigeria.",
        image: "/assets/team/hajim.jpg",
        imageAlt: "Hajimrea K., Communications at the Chiggy Foundation for Opportunity",
        linkedin: "https://www.linkedin.com/in/hajimrea-kawuwa-aa7392185",
    },
    {
        name: "Dorothy U",
        role: "Programmes",
        description: "Dorothy ensures the Programme and community outreaches are delivered with consistency, care, and quality for every beneficiary.",
        image: "/assets/team/Dorothynew.jpg",
        imageAlt: "Dorothy Uji, Programme Delivery at the Chiggy Foundation for Opportunity",
        linkedin: "https://www.linkedin.com/in/dorothy-uji-b9b188220",
    },
    {
        name: "Marho I",
        role: "Teaching Assistant",
        description: "An SSU graduate who joined with no income. She is now on paid staff, training the next cohort. She is the pathway working, in person.",
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
        description="Chiggy Foundation for Opportunity was born from one simple belief: potential is everywhere, but opportunity is not. Where you start in life should never determine where you end up. We exist to close that gap, one skill, one community, one opportunity at a time."
      />

      <section className="py-20 md:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-14">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className={primaryEyebrowClassName}>Our Story</p>
            <h2
              className={`${fontDisplay.className} mt-6 text-balance text-5xl font-semibold leading-[1.08] text-cnf-accent`}
            >
              How we started
            </h2>
            <p className="mt-12 text-justify">Chiggy Foundation for Opportunity began in 2024 as the Chiggy Nsofor Foundation, born out of a deep conviction that every underserved Nigerian deserves action. 
              It started as a heartfelt response to the growing needs of individuals and communities across Nigeria, beginning with food relief to families in Plateau State. 
              What started as a personal mission quickly grew into a structured foundation, built on the belief that lasting change is possible when driven by purpose, integrity, and selfless service.
              From our very first outreach, we set out to do more than provide temporary assistance; We set out to transform lives.
              </p>
              <p className="mt-6 text-justify">A new name, the same mission. In 2026, as the work grew, the name grew with it. 
              The Chiggy Nsofor Foundation became Chiggy Foundation for Opportunity, putting the mission itself in the name. 
              The registration, the team, and the purpose remain exactly the same. Only the name now says out loud what we have believed from the first outreach: potential is everywhere, but opportunity is not.</p>
          </div>

          <div className="overflow-hidden bg-cnf-surface lg:col-start-2 lg:row-start-1">
            <CnfImage
              src={WHOWEARE.storyNow}
              alt="Chiggy Foundation for Opportunity team and volunteers gathered for a group photo"
              className="h-auto w-full object-cover"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectPosition: coverImageTopPosition }}
            />
          </div>

          <div className="overflow-hidden bg-cnf-surface lg:col-start-1 lg:row-start-2">
            <CnfImage
              src={WHOWEARE.storyStart}
              alt="Chiggy Foundation for Opportunity volunteers in branded shirts at the training hub"
              className="h-auto w-full object-cover"
              width={1200}
              height={800}
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectPosition: coverImageTopPosition }}
            />
          </div>

          <div className="lg:col-start-2 lg:row-start-2">
            <h2
              className={`${fontDisplay.className} text-balance text-5xl font-semibold leading-[1.08] text-cnf-accent`}
            >
              Where We Are Now
            </h2>
            <p className="mt-12 text-justify">Today, CFO reaches communities across Nigeria through our three pillars: Economic Empowerment, Education, and Humanitarian Aid. 
              We have trained young people into real income through our Skill Scale-Up programme, enrolled out of school children back into education, covered exam fees for students in hardship, offset medical bills for mothers and children, and delivered food relief to families in crisis. 
              With our headquarters in Abuja and a growing network of partners across the country, CFO has reached more than 7,000 people across four states, and we are only getting started.
            </p>
          </div>
        </Container>
      </section>

      <AboutFoundationSection />

      <AboutCoreValuesSection />



      <section className="bg-cnf-primary-soft py-20 md:py-28">
        <Container width="full">
          <div
            className={`${pageContentWidthClass} grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16`}
          >
            <div>
              <p className={primaryEyebrowClassName}>Meet the Founder</p>
              <h2 className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-cnf-ink`}>Chiggy Nsofor, The Person Behind the Purpose</h2>
            <p className="mt-6 text-base leading-8 text-cnf-muted">
              Chiggy Nsofor is the Founder and CEO of Chiggy Foundation for Opportunity.
            </p>
            <p className="mt-5 text-base leading-8 text-cnf-muted">
              She holds degrees from Covenant University, Nigeria and the University of Sunderland, England, completed a leadership programme at Harvard University, and completed the Executive Program for Nonprofit Leaders at Stanford University.
            </p>
            <p className="mt-5 text-base leading-8 text-cnf-muted">
              What Chiggy brings to CFO is not just her academic credentials, but an unwillingness to accept that youth unemployment, educational exclusion, and poverty are simply facts of Nigerian life. Under her leadership, CFO has grown from a personal conviction into a structured, data driven organisation that has reached more than 7,000 lives.
            </p>
          </div>

          <div className="flex w-full max-w-lg flex-col gap-6 justify-self-center lg:justify-self-start">
            <div className="w-full overflow-hidden border border-cnf-border bg-white shadow-sm">
              <PortraitLinkedInLink href={founderLinkedIn} label="Chiggy Nsofor">
                <div className={founderPortraitFrameClass}>
                  <CnfImage
                    src="/assets/team/chiggy.jpg"
                    alt="Chiggy Nsofor, Founder and CEO of Chiggy Foundation for Opportunity"
                    fill
                    className={portraitImageClass}
                    sizes="(max-width: 640px) 100vw, 512px"
                    priority
                  />
                </div>
              </PortraitLinkedInLink>
            </div>
            <blockquote className="rounded-3xl border border-cnf-primary/10 bg-white p-6 text-center shadow-sm md:p-7">
              <p className="text-base italic leading-7 text-cnf-ink">
                “I believe something can be given by everyone to make other people’s lives better.
              </p>
              <p className="text-base italic leading-7 text-cnf-ink">That&apos;s Impact!”</p>
              <footer className="mt-4 text-sm font-semibold uppercase tracking-[0.25em] text-cnf-primary">
                Chiggy Nsofor, Founder & CEO
              </footer>
            </blockquote>
          </div>
          </div>
        </Container>
      </section>

      <section id="team" className="scroll-mt-28 py-20 md:py-28">
        <Container>
          <p className={primaryEyebrowClassName}>Our People</p>
          <h2 className={`${fontDisplay.className} mt-6 text-4xl font-semibold text-cnf-ink`}>The Team Making It Happen</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-cnf-muted">
            CFO is powered by a small, dedicated team of professionals committed to delivering high-quality programmes at the community level every single day.
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
    </>);
}





