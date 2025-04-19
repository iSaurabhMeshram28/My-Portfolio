import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/Minecraft.png";
import project2 from "../../public/images/projects/Synthwave.png";
import project3 from "../../public/images/projects/Marble-race.png";
import project4 from "../../public/images/projects/Raging-sea.png";
import project5 from "../../public/images/projects/Terrain.png";
import project6 from "../../public/images/projects/WebGL.png";
import project7 from "../../public/images/projects/Black.png";
import project8 from "../../public/images/projects/Black.png";
import project9 from "../../public/images/projects/OpenGL.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid
        border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl
        xs:p-4
        "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[100.5%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl 
             xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
             "
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                        sm:px-4 sm:text-base"
          >
            {" "}
            Visit Project{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
        "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
            md:-right-2 md:w-[101%] xs:h-[102%] xsrounded-[1.5rem]
            "
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl mt-2 lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            {" "}
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Saurabh&apos;s | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl "
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="MINECRAFT"
                img={project1}
                summary="The Minecraft project is a browser-based game developed using Three.js, inspired by the popular game Minecraft. It features real-time 3D rendering, interactive block-building, and terrain exploration, all optimized for smooth performance in a web environment. Built with JavaScript, HTML, and CSS, this project highlights expertise in 3D graphics rendering and demonstrates how modern web technologies can be utilized to create immersive gaming experiences."
                link="https://minecraft-sm.vercel.app/"
                github="https://github.com/iSaurabhMeshram28/Minecraft-Clone"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="SYNTHWAVE SCENE"
                img={project2}
                link="https://synthwave-scene.vercel.app/"
                github="https://github.com/iSaurabhMeshram28/synthwave-scene"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="MARBLE RACE"
                img={project3}
                link="https://marble-race-sm.vercel.app/"
                github="https://github.com/iSaurabhMeshram28/Marble-Race"
                type="Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="RAGING SEA"
                img={project4}
                link="https://raging-sea-sm.vercel.app/"
                github="https://github.com/iSaurabhMeshram28/raging-sea"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="PROCEDURAL TERRAIN"
                img={project5}
                link="https://procedural-terrain-sm.vercel.app/"
                github="https://github.com/iSaurabhMeshram28/Procedural-Terrain"
                type="Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="NATIVE-WEBGL GAME ENGINE"
                img={project6}
                summary="In our WebGL demo, we brought S.D. Burman's timeless music to life using advanced graphics techniques implemented with native WebGL. The experience features a skybox for immersive depth, instancing for performance, and cubemaps for realistic reflections. Realistic terrain, dynamic water, godrays, fog, and point lighting build the atmosphere, while artistic effects like grayscale, vignette, and FBM noise add visual flair. A custom particle system and static model loading complete this real-time, emotionally rich, browser-based experience. (GitHub link unavailable — private repository.)"
                link="https://www.youtube.com/watch?v=0TnZE2jztNw&ab_channel=AstroMediComp"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="COMING SOON"
                img={project7}
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="COMING SOON"
                img={project8}
                link="/"
                github="/"
                type="Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="OPENGL GAME ENGINE"
                img={project9}
                summary="In our OpenGL demo “Manzar Hai Yeh Naya” (from Uri: The Surgical Strike), we used OpenGL 4.6, Win32 SDK, GLSL, and C++ to craft an emotionally immersive real-time experience. Key features include Bézier curve-based camera animation, cloth and grass rendering, dynamic and static model loading, realistic terrain, dynamic water, cubemaps, and godrays. We incorporated post-processing effects like anti-aliasing, multisampling, vignette, grayscale, and FBM noise, alongside a particle system, and OpenGL-CUDA interop for enhanced performance. Built for Windows 11, this demo merges technical depth with cinematic storytelling. (GitHub link unavailable — private repository.)"
                link="https://www.youtube.com/watch?v=m3pOsg6cCUo&ab_channel=AstroMediComp"
                github="/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="COMING SOON"
                img={project7}
                link="/"
                github="/"
                type="Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="COMING SOON"
                img={project8}
                link="/"
                github="/"
                type="Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
