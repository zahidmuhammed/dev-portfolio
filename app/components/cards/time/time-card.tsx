"use client";

import React, { useEffect, useState } from "react";

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
		<div className="border border-[#2C2C2C] bg-[#EEEEEE] text-black hover:border-secondary p-5 rounded-md md:col-span-1 md:row-span-1">
			<div className="flex flex-col  justify-around h-full">
				<div>Time zone</div>
				<div className="font-medium">{isClient && time} GMT</div>
			</div>
		</div>
	);
};

export default TimeCard;
