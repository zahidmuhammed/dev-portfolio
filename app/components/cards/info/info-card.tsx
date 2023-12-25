import React from "react";
import MotionDivWrapper from "../../motion-card/motion-card";

const InfoCard = () => {
	const date = new Date().getFullYear();
	return (
		<MotionDivWrapper
			variants={{
				hidden: { opacity: 0, x: 0, y: 50 },
				enter: { opacity: 1, x: 0, y: 0 },
			}}
			delay={3.5}
			className="flex items-center border border-[#2C2C2C] bg-[#171717]  hover:border-secondary p-5 rounded-md md:row-span-1"
		>
			<div className="text-xs text-white/90 ">
				<span title="Design inspired from https://gianmarco.xyz/">
					©
				</span>{" "}
				{date} · Crafted with
				<span className="text-secondary"> ♥️ </span>using{" "}
				<span className="text-secondary">NextJs</span> by Zahid.
			</div>
		</MotionDivWrapper>
	);
};

export default InfoCard;
