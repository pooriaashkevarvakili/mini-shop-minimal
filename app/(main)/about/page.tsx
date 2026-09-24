import AboutSection from "../../components/About/AboutSection";
import OurStorySection from "../../components/About/OurStorySection";
import TeamSection from "../../components/About/TeamSection";
import ValuesSection from "../../components/About/ValuesSection";

export default function page(){
    return(
<div className="min-h-screen">
      <AboutSection />
      <OurStorySection/>
      <ValuesSection/>
      <TeamSection/>
    </div>    )
}