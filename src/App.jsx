import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import OurDifferenceSection from "./components/OurDifferenceSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import { useState } from "react";
import EffectSection from "./components/EffectsSection";

export default function App() {
	const [visible, setVisible] = useState(true);
	const [tab, setTab] = useState("effect");

	// setTimeout(() => {
	// 	setVisible(false);
	// }, 3000);

	return (
		<>
			{visible && <Header />}
			<main>
				<IntroSection />

				<TabsSection active={tab} onChange={(current) => setTab(current)} />

				{tab === "main" && (
					<>
						<TeachingSection />
						<OurDifferenceSection />
					</>
				)}
				{tab === "feedback" && (
					<>
						<FeedbackSection />
					</>
				)}
				{tab === "effect" && (
					<>
						<EffectSection />
					</>
				)}
			</main>
		</>
	);
}
