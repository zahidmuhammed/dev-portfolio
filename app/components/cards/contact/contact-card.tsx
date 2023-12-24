import React from "react";

const ContactCard = () => {
	const socialLinks = [
		{ id: "001", title: "Linkedin", link: "" },
		{ id: "002", title: "Github", link: "" },
		{ id: "003", title: "Twitter", link: "" },
		{ id: "004", title: "Instagram", link: "" },
		{ id: "005", title: "Discord", link: "" },
		{ id: "006", title: "Telegram", link: "" },
		{ id: "007", title: "WhatsApp", link: "" },
	];
	return (
		<div className="border border-[#2C2C2C] bg-[#171717]  hover:border-secondary p-5 rounded-md md:row-span-4">
			<div className="flex flex-col gap-2">
				<div>Let&apos;s start working together!</div>
				<div className="flex flex-col gap-2">
					<div className="text-white/40">Contact Details</div>
					<div className="text-xs cursor-text">
						muhammedzahid38@gmail.com
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="text-white/40">Socials</div>
					<div className="text-xs flex flex-col gap-2">
						{socialLinks.map((social) => (
							<div className="cursor-pointer" key={social.id}>
								{social.title}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
