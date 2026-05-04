"use client";

import React from "react";

const timeline = [
    {
        date: "JANUARY 2024",
        text: "CNF is founded by Chiggy Nsofor in Abuja, Nigeria",
    },
    {
        date: "MAY 2024",
        text: "Formally registered with the Corporate Affairs Commission (CAC No. 7511818)",
    },
    {
        date: "JUNE 2024",
        text: "Skill Scale-Up (SSU) Programme launches — Cohort 1 begins training",
    },
    {
        date: "2024 – 2025",
        text: "Humanitarian, education, and healthcare outreaches expand across FCT, Nasarawa, Kaduna, and Plateau",
    },
    {
        date: "MARCH 2026",
        text: "Cohort 3 active, 74+ graduates across three cohorts, LMS platform in development for Q3 2026 launch",
    },
];

export default function StoryPage() {
    return (
        <section className="bg-[#f7f9f8] py-20 px-6 md:px-16 text-[#0f2a1f]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
                <div>
                    <strong className="text-xs tracking-widest text-[#196B3A] mb-4">
                        OUR STORY
                    </strong>

                    <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-10">
                        From a Calling <br />
                        to a <span className="text-[#196B3A]">Foundation</span>
                    </h1>

                    <section className="relative border-l border-green-200 pl-6 space-y-10">
                        {timeline.map((item, index) => (
                            <div key={index} className="flex items-start p-0 gap-2">
                                <div className="pt-1">
                                    <p className="w-3 h-3 bg-[#196B3A] rounded-full"></p>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#196B3A]">
                                        {item.date}
                                    </p>

                                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </section>
                </div>

                <div className="space-y-8">
                    <p className="text-lg leading-relaxed">
                        The Chiggy Nsofor Foundation did not begin in a boardroom. It began
                        with a decision — to leave behind a successful international fintech
                        career in Toronto and return home to Nigeria to answer a more pressing
                        question:{" "}
                        <span className="font-semibold">
                            what happens to the millions of young Nigerians who never get a fair shot?
                        </span>
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        Nigeria has one of the highest youth unemployment rates in the world. According to the National Bureau
                        of Statistics, over 53% of young Nigerians are unemployed or underemployed.
                        Over 80% of graduates enter the workforce without the practical
                        digital skills that today&apos;s economy demands. For communities in the FCT,
                        Nasarawa, Kaduna, and Plateau — these are not statistics. They are neighbours,
                        family members, and neighbours&apos; children. </p>


                    <div className="bg-[#EDF7F2] border-l-4 border-[#196B3A] p-6 rounded-xl">
                        <strong className="italic text-gray-800 leading-relaxed">
                            &quot;I kept asking myself: what if these young people simply had the
                            tools? What if someone just showed up — consistently — with real
                            skills, real support, and real belief in them? That question became CNF.&quot;
                        </strong>
                        <p className="mt-4 text-sm text-gray-600">
                            — Chiggy Nsofor, Founder & CEO
                        </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed">
                        CNF was founded in January 2024 with no external grant
                        funding — built entirely on the founder&apos;s personal conviction
                        and resources. In less than two years, it has trained <span className="font-semibold text-black">74+ youth
                            across three cohorts,</span> reached over <span className="font-semibold text-black">1,000+ students</span> through education
                        outreach, supported <span className="font-semibold text-black"> 69+ scholarship beneficiaries, </span> delivered food,
                        medical care, and emergency aid to <span className="font-semibold text-black">4,000+ humanitarian aid
                            recipients,</span> and served communities across FCT, Nasarawa, Kaduna,
                        and Plateau.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        Today, CNF runs four interconnected programme pillars — Skills
                        Acquisition, Education, Healthcare, and Humanitarian Aid — all
                        free to in-person beneficiaries. Our flagship Skill Scale-Up (SSU)
                        Programme teaches future-ready digital and vocational skills,
                        including <span className="font-semibold text-black"> AI-assisted tools, coding, and data analysis,</span> precisely
                        because we believe the young people we serve deserve to compete
                        in the economy of tomorrow, not just today. An online SSU tier with
                        a ₦20,000 application fee is also available, making quality skills
                        training accessible beyond Abuja.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        Every programme we build, every graduate we launch, every scholarship
                        we fund is a living answer to the question CNF was founded to ask.
                    </p>
                </div>
            </div>
        </section>
    );
}