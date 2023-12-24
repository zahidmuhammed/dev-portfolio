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
				<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-12 md:mx-24 px-6 md:px-12">
					<WelcomeCard />
					{/*  */}
					<AboutCard />
					{/*  */}
					<ContactCard />
					{/*  */}
					<ProjectsCard />
					{/*  */}
					<ExperienceCard />
					{/*  */}
					<TimeCard />
					{/*  */}
					<NowCard />
					{/*  */}
					<InfoCard />
					{/*  */}
				</div>
			</div>
		</main>
	);
};

export default Home;
