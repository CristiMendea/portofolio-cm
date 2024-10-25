"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
type ProjectProps = (typeof projectsData)[number];
function Project({ title, description, tags, imageUrl }: ProjectProps) {
  return <div>{title}</div>;
}
