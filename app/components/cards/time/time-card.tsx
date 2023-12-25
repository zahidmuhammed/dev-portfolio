"use client";

import React, { useEffect, useState } from "react";
import MotionDivWrapper from "../../motion-card/motion-card";

const TimeCard = () => {
	const [isClient, setIsClient] = useState(false);
	const [time, setTime] = useState(
		new Date().toLocaleTimeString([], { hour12: true })
	);

	useEffect(() => {
		setIsClient(true);
		setInterval(() => {
			setTime(new Date().toLocaleTimeString([], { hour12: true }));
		}, 1000);
	}, []);

	return (
		<MotionDivWrapper
			variants={{
				hidden: { opacity: 0, x: 0, y: 50 },
				enter: { opacity: 1, x: 0, y: 0 },
			}}
			delay={2.5}
			className="border border-[#2C2C2C] bg-[#EEEEEE] text-black hover:border-secondary p-5 rounded-md md:col-span-1 md:row-span-1"
		>
			<div className="flex flex-col justify-around h-full">
				<div className="text-base font-light">Time zone</div>
				<div className="font-medium">{isClient && time} GMT</div>
			</div>
		</MotionDivWrapper>
	);
};

export default TimeCard;
