import Home from "./(main)/home/page";
import Footer from "./components/nav/Footer";
import Navbar from "./components/nav/navbar";
import WelcomeToast from "./components/Home/WelcomeToast";

export default function Page() {
  return (
    <>
      <Navbar />

      <WelcomeToast />

      <Home />

      <Footer />
    </>
  );
}