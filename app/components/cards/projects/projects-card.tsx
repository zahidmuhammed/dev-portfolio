"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiGithubFill } from "react-icons/ri";
import { HiMiniGlobeAmericas } from "react-icons/hi2";
import MotionDivWrapper from "../../motion-card/motion-card";

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from "../../carousel-embla/EmblaCarouselArrowButtons";


const projects = [{
	id: 1,
	title: "Treflo.com",
	description: "",
	technologies: [],
	deployed_link: "https://www.treflo.com/",
	source_code: "",
	thumbnail_url: "/treflo.png"
}, {
	id: 2,
	title: "Piggi.ai",
	description: "",
	technologies: [],
	deployed_link: "https://piggi.ai/",
	source_code: "",
	thumbnail_url: "/piggi.png"
}, {
	id: 3,
	title: "Polosys",
	description: "",
	technologies: [],
	deployed_link: "https://polosys-erp-landing.vercel.app/",
	source_code: "",
	thumbnail_url: "/polosys.png"
}, {
	id: 4,
	title: "Royal Drive",
	description: "",
	technologies: [],
	deployed_link: "https://www.royaldrive.in/",
	source_code: "",
	thumbnail_url: "/royaldrive.png"
},
{
	id: 5,
	title: "Exthgen",
	description: "",
	technologies: [],
	deployed_link: "https://exthgen.com/",
	source_code: "",
	thumbnail_url: "/exthgen.png"
},
{
	id: 6,
	title: "Rick and Morty",
	description: "",
	technologies: [],
	deployed_link: "https://zahidmuhammed.github.io/rick-and-morty/",
	source_code: "https://github.com/zahidmuhammed/rick-and-morty",
	thumbnail_url: "/rickmorty.png"
},
{
	id: 7,
	title: "Bhive",
	description: "",
	technologies: [],
	deployed_link: "https://bhive-wrokspace.vercel.app/",
	source_code: "https://github.com/zahidmuhammed/bhive-wrokspace",
	thumbnail_url: "/bhive.png"
},
{
	id: 8,
	title: "QuillAudit",
	description: "",
	technologies: [],
	deployed_link: "https://zahidmuhammed.github.io/QuillAudits/",
	source_code: "https://github.com/zahidmuhammed/QuillAudits",
	thumbnail_url: "/quillaudits.png"
}, {
	id: 9,
	title: "Hash Security",
	description: "",
	technologies: [],
	deployed_link: "https://hash-security.vercel.app/",
	source_code: "https://github.com/zahidmuhammed/hash-security",
	thumbnail_url: "/hash.png"
}, {
	id: 10,
	title: "Workflow",
	description: "",
	technologies: [],
	deployed_link: "https://workflow-crework.vercel.app/login",
	source_code: "https://github.com/zahidmuhammed/workflow",
	thumbnail_url: "/worksheet.png"
}]

const ProjectsCard = () => {

	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: "y" }, [Autoplay()])

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick
	} = usePrevNextButtons(emblaApi)

	return (
		<MotionDivWrapper
			variants={{
				hidden: { opacity: 0, x: 0, y: 250 },
				enter: { opacity: 1, x: 0, y: 0 },
			}}
			delay={3}
			className="border border-[#2C2C2C] bg-[#171717]  hover:border-secondary p-5 rounded-md  md:col-span-1 md:row-span-2 lg:col-span-2"
		>
			<div>
				<div className="text-base font-normal flex flex-col gap-1">
					<div className="text-base font-normal">Projects</div>
					<div className="embla overflow-hidden flex justify-between gap-2" ref={emblaRef}>
						<div className="embla__container h-28  flex flex-col">
							{projects?.map((project, index) => (
								<div key={project.id} className="embla__slide text-xs flex-[0_0_100%] flex min-h-0 gap-2 ">
									<Image
										alt=""
										height={320}
										width={530}
										className="h-28 w-60"
										src={`/images/projects${project?.thumbnail_url}`}
									/>
									<div className="md:hidden lg:flex lg:flex-col lg:gap-1">
										{project?.source_code && <Link href={project?.source_code} target="_">
											<RiGithubFill className="h-5 w-5 cursor-pointer" />
										</Link>}
										{project?.deployed_link && <Link href={project?.deployed_link} target="_">
											<HiMiniGlobeAmericas className="h-5 w-5 cursor-pointer" />
										</Link>}
									</div>
								</div>
							))}
						</div>
						<div className="flex flex-col justify-end  md:hidden lg:flex">
							<div className="sm:space-x-2">
								<PrevButton className="border border-[#4B5563] rounded-full rotate-90 p-1" onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
								<NextButton className="border border-[#4B5563] rounded-full rotate-90 p-1" onClick={onNextButtonClick} disabled={nextBtnDisabled} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</MotionDivWrapper>
	);
};

export default ProjectsCard;
