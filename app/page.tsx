const Home = () => {
	const primaryTools = [
		"JavaScript",
		"React",
		"React-Native",
		"NextJs",
		"Firebase",
		"Typescript",
	];

	const socialLinks = [
		{ id: "", title: "Linkedin", link: "" },
		{ id: "", title: "Github", link: "" },
		{ id: "", title: "Twitter", link: "" },
		{ id: "", title: "Instagram", link: "" },
	];

	return (
		<main className="flex flex-col min-h-screen w-full justify-center items-center">
			<div>
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-12 md:mx-24 px-6 md:px-12">
					<div className="border border-[#2C2C2C] bg-[#171717] hover:border-secondary  p-5 rounded-md md:col-span-3 md:row-span-4">
						<div className="text-xs text-[#737373]">welcome </div>
						<div className="w-2/3 text-base">
							Hi, I'm{" "}
							<span className="font-bold">Muhammed Zahid</span>, a
							software developer with strong focus on the user
							experience, animations and micro interactions
						</div>
						<div></div>
					</div>
					{/*  */}
					<div className=" flex flex-col gap-2 border border-[#2C2C2C] bg-[#171717]  hover:border-secondary  p-5 rounded-md md:row-span-6">
						<div className="text-base">About Me</div>
						<div className="text-sm text-white/60">
							Hi, I'm Zahid, a front-end software developer from
							India. My primary tools of choice includes:
						</div>
						<div className="text-xs">
							{primaryTools.map((tool: string) => (
								<div className="py-1">• {tool}</div>
							))}
						</div>
						<div className="text-sm text-white/60 gap-2 flex flex-col">
							<p className="">
								Beyond coding, I am an artist who breathes life
								into tiny drawings, navigating a minimalist
								lifestyle where every stroke seeks perfection.
							</p>
							<p className="">
								While I have some preferred tools, I always
								choose the best one for the job, even if it's
								not on my usual list. My goal is to find the
								right solution for each project.
							</p>
						</div>
					</div>
					{/*  */}
					<div className="border border-[#2C2C2C] bg-[#171717]  hover:border-secondary p-5 rounded-md md:row-span-4">
						<div className="flex flex-col gap-2">
							<div>Let's start working together!</div>
							<div className="flex flex-col gap-2">
								<div className="text-white/40">
									Contact Details
								</div>
								<div className="text-xs cursor-text">
									muhammedzahid38@gmail.com
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<div className="text-white/40">Socials</div>
								<div className="text-xs flex flex-col gap-2">
									{socialLinks.map((social) => (
										<div className="cursor-pointer">
											{social.title}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					{/*  */}
					<div className="border border-[#2C2C2C] bg-[#171717]  hover:border-secondary p-5 rounded-md md:row-span-2 md:col-span-2">
						<div className="flex flex-col content-stretch justify-around h-full">
							<div>Time zone</div>
							<div className="text-5xl">5:00:14 PM GMT</div>
						</div>
					</div>
					{/*  */}
					<div className="border border-[#2C2C2C] bg-[#171717]  hover:border-secondary p-5 rounded-md md:row-span-2">
						Projects
					</div>
					{/*  */}
					<div className="border border-[#2C2C2C] bg-[#EEEEEE]  hover:border-secondary p-5 rounded-md md:col-span-1 md:row-span-1">
						<div className="text-black">Experience</div>
					</div>
					{/*  */}
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
									@ Techgebra
								</span>
							</div>
						</div>
					</div>
					{/*  */}
					<div className="border border-[#2C2C2C] bg-[#171717]  hover:border-secondary p-5 rounded-md md:row-span-1">
						<div className="text-xs text-white/60">
							© 2023 · Crafted with
							<span className="text-red-500"> ♥️ </span>using
							NextJs by Zahid.
						</div>
					</div>
					{/*  */}
				</div>
			</div>
		</main>
	);
};

export default Home;
