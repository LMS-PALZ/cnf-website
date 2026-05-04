"use client";

import { title } from "process";
import React from "react";

const values = [
    {
        pics: "PI",
        name: "Pamela Ibemesi",
        title: "Partnerships & Programs Officer",
        colour: "#13376C",
        description:
            "Pamela drives CNF's partnership development and programme coordination — building the relationships and operational structures that keep every pillar running effectively. She also serves as Board Secretary.",
    },
    {
        pics: "VA",
        name: "Victor A.",
        title: "Operations & Finance Lead",
        colour: "#217441",
        description:
            "Oversees CNF's day-to-day operations and financial management — ensuring every naira is tracked, every process is sound, and every programme is delivered on time and on budget.",
    },
    {
        pics: "HK",
        name: "Hajimrea K.",
        title: "Communications",
        colour: "#712F15",
        description:
            "Tells CNF's story across platforms — from impact reports and social media to partner communications — making sure the world knows what is being built in Abuja's communities.",
    },
    {
        pics: "DU",
        name: "Dorothy Uji",
        title: "Programme Delivery",
        colour: "#0F4A3B",
        description:
            "On the ground, every session, every cohort. Dorothy ensures the SSU Programme and community outreaches are delivered with consistency, care, and quality for every beneficiary.",
    },
    {
        pics: "MI",
        name: "Marho Imodje",
        title: "Teaching Assistant & LMS Developer",
        colour: "#13376C",
        description:
            "An SSU Cohort graduate who returned to the classroom — this time as a teacher. Marho now leads development of CNF's Moodle-based LMS platform, launching Q3 2026.",
    },
];

export default function Team() {
    return (
        <section className="bg-[#f7f9f8] py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <strong className="text-xs sm-text-[17px] tracking-widest text-[#7B8C82] mb-4">
                    OUR PEOPLE
                </strong>

                <h2 className="text-4xl md:text-5xl font-serif mb-6">
                    The <span className="text-[#196B3A]">Core Team</span> Making It Happen
                </h2>

                <p className="text-[#7B8C82] max-w-xl mb-12 leading-relaxed">
                    CNF is powered by a small, dedicated team of professionals committed to delivering
                    high-quality programmes at the community level every single day.
                </p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="rounded-2xl text-center border transition-all border-[#E2EBE6] duration-300">
                            <div className={`flex items-center justify-center py-16 w-full rounded-t-xl`} style={{ backgroundColor: value.colour }}>
                                <p className="bg-transparent flex items-center justify-center w-15 h-15 rounded-full border-2 border-[]">
                                    {value.pics}
                                </p>
                            </div>

                            <div className="flex items-start flex-col p-6">
                                <h3 className="text-lg font-semibold mb-3">
                                    {value.name}
                                </h3>

                                <p className="text-sm text-[#7B8C82] leading-relaxed">
                                    {value.title}
                                </p>
                                <p className="text-[#7B8C82] mt-4 text-start">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}