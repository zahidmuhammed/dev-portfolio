import NowCard from "./components/cards/now/now-card";
import InfoCard from "./components/cards/info/info-card";
import TimeCard from "./components/cards/time/time-card";
import AboutCard from "./components/cards/about/about-card";
import WelcomeCard from "./components/cards/welcome/welcome-card";
import ContactCard from "./components/cards/contact/contact-card";
import ProjectsCard from "./components/cards/projects/projects-card";
import ExperienceCard from "./components/cards/experience/experience-card";

const Home = () => {
	return (
		<main className="flex flex-col min-h-screen w-full justify-center items-center font-thin">
			<div>
				<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 md:m-6 lg:m-10 xl:mx-28">
					<WelcomeCard />
					{/*  */}
					<AboutCard />
					{/*  */}
					<ContactCard />
					{/*  */}
					<NowCard />
					{/*  */}
					<ExperienceCard />
					{/*  */}
					<TimeCard />
					{/*  */}
					<ProjectsCard />
					{/*  */}
					<InfoCard />
					{/*  */}
				</div>
			</div>
		</main>
	);
};

export default Home;
