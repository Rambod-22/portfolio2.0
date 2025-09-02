//'use client'
// Updated name to Rambod Zafar

import Image from "next/image";
import Head from 'next/head'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSocials } from "@/utils/fetchSocials";




export default async function Home() {
  async function getProps() {
    const pageInfo: PageInfo = await fetchPageInfo();
    // console.log("inside getprops", {pageInfo})
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();
  
    return {
        pageInfo,
        experiences,
        skills,
        projects,
        socials
      }
  }
  const {pageInfo, experiences, projects, socials, skills} = await getProps()
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        {pageInfo?.name} Portfolio
      </Head>

      <Header socials={socials}/>
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo}/> 

      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} isVisible={true} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            
            <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="https://mail.google.com/mail/u/0?ui=2&ik=c4a8ba441d&attid=0.1&permmsgid=msg-f:1791390008079734444&th=18dc4bb89dc6d6ac&view=att&disp=safe" alt="" />
          </div>
        </footer>
      </Link>
     


    </div>
  );
}


