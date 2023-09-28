import Posts from "./components/Posts"
import ImageSlider from "./components/Carousel"
import NavBar from "./components/NavBar"
import Services from "./components/Services"
import Footer from "./components/Footer"
import dynamic from "next/dynamic"
const Feedback = dynamic(()=>import("./components/Feedback"),{
  ssr: false,
  loading: () => <p>Loading...</p>
});
const Gallery = dynamic(()=>import("./components/Gallery"),{
  ssr: false,
  loading: () => <p>Loading...</p>
})
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
