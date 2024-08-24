"use client";

import React, { useCallback } from "react";
import MotionDivWrapper from "../../motion-card/motion-card";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from "../../carousel-embla/EmblaCarouselDotButton";


const ExperienceCard = () => {

	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

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
			end_date: "July 2024",
			address: "Govt. Cyber Park, Calicut, Kerala",
			isCurrent: false,
		},
	];

	const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
		const autoplay = emblaApi?.plugins()?.autoplay
		if (!autoplay) return

		const resetOrStop =
			autoplay.options.stopOnInteraction === false
				? autoplay.reset
				: autoplay.stop

		resetOrStop()
	}, [])

	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
		emblaApi,
		onNavButtonClick
	)

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
			<div className="embla overflow-hidden" ref={emblaRef}>
				<div className="embla__container flex">
					{experiences?.map((exp, index) => (
						<div key={exp.id} className="embla__slide text-xs flex-[0_0_100%] min-w-0 gap-1 pb-6 my-6 ">
							<div className="font-thin">{exp.role}</div>
							<div>{exp.company}</div>
							<div>
								{exp.start_date} -{" "}
								{exp.isCurrent ? "Present" : exp.end_date}
							</div>
							<div>{exp.address}</div>
						</div>
					))}
				</div>
				<div className="flex justify-between items-center">
					<div className="flex gap-2">
						{scrollSnaps.map((_, index) => (
							<DotButton
								key={index}
								onClick={() => onDotButtonClick(index)}
								className={`rounded-full h-2 w-2 ${index === selectedIndex ? "border " : " bg-gray-600"} `}
							/>
						))}
					</div>
				</div>
			</div>
		</MotionDivWrapper>
	);
};

export default ExperienceCard;
