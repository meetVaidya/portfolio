import Image from "next/image";
import HeroSection from "../app/components/HeroSection";
import AboutMe from "./components/AboutMe";

export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutMe />
        </div>
    );
}
