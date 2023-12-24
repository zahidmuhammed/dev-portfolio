import React from "react";

const NowCard = () => {
	return (
		<div className="border border-[#2C2C2C] bg-[#171717]  hover:border-secondary p-5 rounded-md md:row-span-2">
			<div className="flex flex-col gap-2">
				<div className="flex justify-between items-center">
					<div>Now</div>
					<div className="relative px-3 flex justify-center items-center">
						<span className="absolute animate-ping bg-[#22C55D] h-3 w-3 rounded-full"></span>
						<span className="absolute bg-[#22C55D] h-2 w-2 rounded-full"></span>
					</div>
				</div>
				<div className=" text-xs text-white/60">
					Currently working as Software Developer
					<span className="cursor-pointer px-1 ">
						<a href={"https://www.techgebra.com/"} target="_blank">
							@ Techgebra
						</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default NowCard;
