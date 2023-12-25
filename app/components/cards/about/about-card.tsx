import React from "react";
import MotionDivWrapper from "../../motion-card/motion-card";

const AboutCard = () => {
	const primaryTools = [
		"JavaScript",
		"React",
		"React-Native",
		"NextJs",
		"Firebase",
		"Typescript",
	];
	return (
		<MotionDivWrapper
			variants={{
				hidden: { opacity: 0, x: 0, y: 250 },
				enter: { opacity: 1, x: 0, y: 0 },
			}}
			delay={0.5}
			className=" flex flex-col gap-2 border border-[#2C2C2C] bg-[#171717]  hover:border-secondary  p-5 rounded-md  md:row-span-6"
		>
			<div className="text-base font-normal">About Me</div>
			<div className="text-sm text-white/90">
				Hi, I&apos;m Zahid, a front-end software developer from India.
				My primary tools of choice includes:
			</div>
			<div className="text-xs text-white font-normal">
				{primaryTools.map((tool, index) => (
					<div className="py-1" key={index}>
						• {tool}
					</div>
				))}
			</div>
			<div className="text-sm text-white/90 gap-2 flex flex-col">
				<p className="">
					Beyond coding, I am an artist who breathes life into tiny
					drawings, navigating a minimalist lifestyle where every
					stroke seeks perfection.
				</p>
				<p className="">
					While I have some preferred tools, I always choose the best
					one for the job, even if it&apos;s not on my usual list. My
					goal is to find the right solution for each project.
				</p>
			</div>
		</MotionDivWrapper>
	);
};

export default AboutCard;
