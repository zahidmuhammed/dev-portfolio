import React from "react";
import MotionDivWrapper from "../../motion-card/motion-card";

const ContactCard = () => {
	const socialLinks = [
		{
			id: "001",
			title: "Linkedin",
			link: "https://www.linkedin.com/in/zahidzayi/",
		},
		{
			id: "002",
			title: "Github",
			link: "https://github.com/zahidmuhammed",
		},
		{ id: "003", title: "Twitter", link: "https://twitter.com/Zahid_zayi" },
		{
			id: "004",
			title: "Codepen",
			link: "https://codepen.io/zahidmuhammed",
		},
		{
			id: "005",
			title: "Instagram",
			link: "https://www.instagram.com/zahid_zayi/",
		},
		{
			id: "006",
			title: "Discord",
			link: "https://discordapp.com/users/zahid_zayi",
		},
		{ id: "007", title: "Telegram", link: "https://t.me/+919567834429" },
		{ id: "008", title: "WhatsApp", link: "https://wa.me/+919567834429" },
	];

	return (
		<MotionDivWrapper
			variants={{
				hidden: { opacity: 0, x: 0, y: 250 },
				enter: { opacity: 1, x: 0, y: 0 },
			}}
			delay={1}
			className="border border-[#2C2C2C] bg-[#171717]  hover:border-secondary p-5 rounded-md md:row-span-4"
		>
			<div className="flex flex-col gap-2">
				<div className="text-base font-normal">
					Let&apos;s start working together!
				</div>
				<div className="flex flex-col gap-2">
					<div className="text-white/40 font-normal">
						Contact Details
					</div>
					<div className="text-xs text-white/90 cursor-text">
						<a href="mailto:muhammedzahid38@gmail.com">
							muhammedzahid38@gmail.com
						</a>
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="text-white/40 font-normal">Socials</div>
					<div className="text-xs text-white/90 flex flex-col gap-2">
						{socialLinks.map((social) => (
							<div
								className="cursor-pointer max-w-min"
								key={social.id}
							>
								<a href={social.link} target="_blank">
									{social.title}
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</MotionDivWrapper>
	);
};

export default ContactCard;
