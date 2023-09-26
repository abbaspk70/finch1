import Script from "next/script"
import Posts from "./Posts"
import ImageSlider from "./components/Carousel"
import Feedback from "./components/Feedback"
import Gallery from "./components/Gallery"
import NavBar from "./components/NavBar"
import Services from "./components/Services"
import Head from "next/head"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div>
      <NavBar/>
      <ImageSlider/>
      <Gallery/>
      <Services/>
      <Feedback/>
      <Posts/>
      <Footer/>
    </div>
  )
}
