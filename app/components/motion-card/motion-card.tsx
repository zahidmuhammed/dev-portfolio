"use client";

import { Variants, motion, stagger } from "framer-motion";

interface MotionDivWrapperProps {
	children: React.ReactNode;
	variants?: Variants;
	className?: string;
	delay?: number;
}

const MotionDivWrapper = ({
	children,
	variants,
	className,
	delay = 0,
}: MotionDivWrapperProps) => {
	return (
		<motion.main
			variants={variants}
			initial="hidden"
			animate="enter"
			transition={{ type: "spring", delay, duration: 1.5 }}
			className={className}
		>
			{children}
		</motion.main>
	);
};

export default MotionDivWrapper;
