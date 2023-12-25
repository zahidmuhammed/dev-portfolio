import React from "react";
import MotionDivWrapper from "../../motion-card/motion-card";

const ProjectsCard = () => {
	return (
		<MotionDivWrapper
			variants={{
				hidden: { opacity: 0, x: 0, y: 250 },
				enter: { opacity: 1, x: 0, y: 0 },
			}}
			delay={1.5}
			className="border border-[#2C2C2C] bg-[#171717]  hover:border-secondary p-5 rounded-md md:col-span-1 md:row-span-2 lg:col-span-2"
		>
			<div>
				<div className="text-base font-normal">Projects</div>
			</div>
		</MotionDivWrapper>
	);
};

export default ProjectsCard;
