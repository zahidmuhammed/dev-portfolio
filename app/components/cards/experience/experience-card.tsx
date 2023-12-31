"use client";

import React from "react";
import MotionDivWrapper from "../../motion-card/motion-card";

import { Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/effect-cards";

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
			<div className="snap-y snap-mandatory overflow-scroll cursor-row-resize h-full">
				<Swiper
					grabCursor={true}
					pagination={true}
					className="h-full"
					modules={[Pagination, Autoplay]}
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
				>
					{experiences?.map((exp) => (
						<SwiperSlide>
							<div className="snap-center text-xs h-full flex flex-col gap-1 pb-6 my-6 ">
								<div className="font-thin">{exp.role}</div>
								<div>{exp.company}</div>
								<div>
									{exp.start_date} -{" "}
									{exp.isCurrent ? "Present" : exp.end_date}
								</div>
								<div>{exp.address}</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</MotionDivWrapper>
	);
};

export default ExperienceCard;
