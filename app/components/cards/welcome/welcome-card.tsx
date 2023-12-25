import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin, FaRegFaceSmile } from "react-icons/fa6";
import MotionDivWrapper from "../../motion-card/motion-card";

const WelcomeCard = () => {
	//
	return (
		<MotionDivWrapper
			variants={{
				hidden: { opacity: 0, x: 0, y: 250 },
				enter: { opacity: 1, x: 0, y: 0 },
			}}
			delay={0}
			className="flex border border-[#2C2C2C] bg-[#171717] hover:border-secondary p-5 rounded-md md:col-span-3 md:row-span-4 lg:col-span-3 "
		>
			<div className="flex flex-col gap-5 md:gap-0 h-full justify-between">
				<div>
					<div className="text-xs text-[#737373]">welcome </div>
					<div className=" text-xl">
						Hi, I&apos;m{" "}
						<span className="font-medium">Muhammed Zahid</span>, a
						software developer with strong focus on the user
						experience, animations and micro interactions
					</div>
				</div>
				<div className="flex gap-5">
					<a href="https://github.com/zahidmuhammed" target="_blank">
						<div className="group cursor-pointer border border-secondary px-5 py-2 rounded-md hover:shadow-none shadow-inner shadow-secondary">
							<FaGithub className="w-5 h-5 group-hover:text-secondary" />
						</div>
					</a>

					<a
						href="https://www.linkedin.com/in/zahidzayi/"
						target="_blank"
					>
						<div className="group cursor-pointer border border-secondary px-5 py-2 rounded-md hover:shadow-none  shadow-inner shadow-secondary">
							<FaLinkedin className="w-5 h-5 group-hover:text-secondary" />
						</div>
					</a>

					{/* <a href="https://github.com/zahidmuhammed" target="_blank"> */}
					<div className="group cursor-pointer border border-secondary px-5 py-2 rounded-md hover:shadow-none  shadow-inner shadow-secondary">
						<FaRegFaceSmile className="w-5 h-5 group-hover:text-secondary" />
					</div>
					{/* </a> */}
				</div>
			</div>
			<div className="flex justify-center items-center select-none">
				<div>
					<Image
						alt="memoji"
						width={500}
						height={500}
						draggable={false}
						src={"/images/memoji.png"}
					/>
				</div>
			</div>
		</MotionDivWrapper>
	);
};

export default WelcomeCard;
