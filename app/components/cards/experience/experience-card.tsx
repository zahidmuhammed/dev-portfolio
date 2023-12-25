import React from "react";
import MotionDivWrapper from "../../motion-card/motion-card";

const ExperienceCard = () => {
	const experiences = [
		{
			id: "EXP001",
			company: "Treflo - Ardour Labs Pvt Ltd",
			website: "",
			role: "JUNIOR SOFTWARE DEVELOPER",
			type: "internship",
			employment: "full-time",
			logo: "",
			start_date: "Mar 2022",
			end_date: "Jan 2023",
			address: "Bengaluru, Karnataka, India",
			isCurrent: false,
		},
		{
			id: "EXP002",
			company: "Techgebra Software LLP",
			website: "https://www.techgebra.com/",
			role: "SOFTWARE DEVELOPER",
			type: "internship",
			employment: "full-time",
			logo: "",
			start_date: "Mar 2023",
			end_date: "",
			address: "Govt. Cyber Park, Calicut, Kerala",
			isCurrent: true,
		},
	];

	return (
		<MotionDivWrapper
			variants={{
				hidden: { opacity: 0, x: 0, y: 250 },
				enter: { opacity: 1, x: 0, y: 0 },
			}}
			delay={2}
			className="flex flex-col gap-1 border border-[#2C2C2C] bg-[#171717]  hover:border-secondary p-5 rounded-md  md:row-span-2"
		>
			<div className="text-base font-normal">Experience</div>
			<div className=" snap-y snap-mandatory overflow-scroll cursor-row-resize">
				<div className="snap-center  text-xs h-full flex flex-col mb-1">
					<div className="font-thin">{experiences[0].role}</div>
					<div>{experiences[0].company}</div>
					<div>
						{experiences[0].start_date} - {experiences[0].end_date}
					</div>
					<div>{experiences[0].address}</div>
				</div>
				<div className="snap-center text-xs h-full flex flex-col ">
					<div className="font-thin">{experiences[1].role}</div>
					<div>{experiences[1].company}</div>
					<div>
						{experiences[1].start_date} - {experiences[1].end_date}
					</div>
					<div>{experiences[1].address}</div>
				</div>
			</div>
		</MotionDivWrapper>
	);
};

export default ExperienceCard;
