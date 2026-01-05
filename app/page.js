import Navbar from "@/components/Home/navbar";
import HeroSection from "@/components/Home/heroSection";
import AboutCompany from "@/components/Home/aboutCompanyLandingpage";
import ImpactStats from "@/components/Home/impactStats";
import LatestNews from "@/components/Home/news";
import YoutubeVideos from "@/components/Home/Videos";
import VolunteerWithUs from "@/components/Home/VolunteerWithUs";
import Footer from "@/components/Home/footer";

export default function Home() {
  return (
    <main className="flex overflow-x-hidden min-h-screen flex-col items-center justify-between bg-white w-100vw">
      <Navbar/>
      <HeroSection/>
      <AboutCompany/>
      <ImpactStats/>
      <LatestNews/>
      <YoutubeVideos/>
      <VolunteerWithUs/>
      <Footer/>
    </main>
  );
}
