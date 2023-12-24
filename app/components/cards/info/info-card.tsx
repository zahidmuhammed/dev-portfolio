import React from "react";

const InfoCard = () => {
	const date = new Date();
	return (
		<div className="flex items-center border border-[#2C2C2C] bg-[#171717]  hover:border-secondary p-5 rounded-md md:row-span-1">
			<div className="text-xs text-white/60 ">
				<span title="Design inspired from https://gianmarco.xyz/">
					©
				</span>{" "}
				{date.getFullYear()} · Crafted with
				<span className="text-secondary"> ♥️ </span>using{" "}
				<span className="text-secondary">NextJs</span> by Zahid.
			</div>
		</div>
	);
};

export default InfoCard;
