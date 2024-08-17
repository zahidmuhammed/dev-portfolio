import React from "react";
import MotionDivWrapper from "../../motion-card/motion-card";
import Link from "next/link";

const NowCard = () => {
	return (
		<MotionDivWrapper
			variants={{
				hidden: { opacity: 0, x: 0, y: 50 },
				enter: { opacity: 1, x: 0, y: 0 },
			}}
			delay={1.5}
			className="border border-[#2C2C2C] bg-[#171717]  hover:border-secondary p-5 rounded-md md:row-span-2"
		>
			<div className="flex flex-col gap-2">
				<div className="flex justify-between items-center">
					<div className="text-base font-normal">Now</div>
					<div className="relative px-3 flex justify-center items-center">
						<span className="absolute animate-ping bg-[#22C55D] h-3 w-3 rounded-full"></span>
						<span className="absolute bg-[#22C55D] h-2 w-2 rounded-full"></span>
					</div>
				</div>
				<div className=" text-xs text-white/50">
					<Link href={"https://sive.rs/nowff"} target="_">what&apos;s that ?</Link>
				</div>
				<div className=" text-xs text-white/90">
					Currently working as freelancer
				</div>
			</div>
		</MotionDivWrapper>
	);
};

export default NowCard;
