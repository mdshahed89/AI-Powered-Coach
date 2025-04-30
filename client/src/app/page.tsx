import Courses from "@/components/Courses";
import Faq from "@/components/Faq";
import HeroSection from "@/components/Hero";
import LiveAiCoatch from "@/components/LiveAiCoatch";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <LiveAiCoatch />
      <Courses />
      <Faq />
    </div>
  );
}
