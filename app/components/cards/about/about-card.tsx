import React from "react";

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
		<div className=" flex flex-col gap-2 border border-[#2C2C2C] bg-[#171717]  hover:border-secondary  p-5 rounded-md md:row-span-6">
			<div className="text-base">About Me</div>
			<div className="text-sm text-white/60">
				Hi, I&apos;m Zahid, a front-end software developer from India.
				My primary tools of choice includes:
			</div>
			<div className="text-xs">
				{primaryTools.map((tool, index) => (
					<div className="py-1" key={index}>
						• {tool}
					</div>
				))}
			</div>
			<div className="text-sm text-white/60 gap-2 flex flex-col">
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
		</div>
	);
};

export default AboutCard;
