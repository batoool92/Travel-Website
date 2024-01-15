import Hero from "../../components/Hero/Hero"
import './PackagesStyle.css'
import PackagesImg from '../../assets/img/PackagesImg.png'
import Footer from "../../components/Footer/Footer"
import Destination from "../../components/Destination/Destination"
import MaldivesImg from "../../assets/img/MaldivesImg.png"
import SwitzerlandImg from "../../assets/img/SwitzerlandImg.png"
import BerlinImg from "../../assets/img/BerlinImg.png"
import TorrontoImg from "../../assets/img/TorrontoImg.png"
import BakuImg from "../../assets/img/BakuImg.png"
import ChineseImg from "../../assets/img/ChineseImg.png"

const Packages = () => {
  const Destinations = [
    {
      DestinationImg: MaldivesImg,
      DestinationDate: "27, September 2023",
      DestinationNumber: "30+ People",
      DestinationName: "Maldives",
      DestinationDescription: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      DestinationCost: "3000 $",
      DestinationEvalNum: "5.0"
    },
    {
      DestinationImg: SwitzerlandImg,
      DestinationDate: "13, October 2023",
      DestinationNumber: "120+ People",
      DestinationName: "Switzerland",
      DestinationDescription: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      DestinationCost: "1290 $",
      DestinationEvalNum: "4.9"
    },
    {
      DestinationImg: BerlinImg,
      DestinationDate: "2, November 2022",
      DestinationNumber: "139+ People",
      DestinationName: "Berlin",
      DestinationDescription: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      DestinationCost: "2790 $",
      DestinationEvalNum: "5.0"
    },
    {
      DestinationImg: TorrontoImg,
      DestinationDate: "14, December 2022",
      DestinationNumber: "50+ People",
      DestinationName: "Torronto",
      DestinationDescription: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      DestinationCost: "1110 $",
      DestinationEvalNum: "4.0"
    },
    {
      DestinationImg: BakuImg,
      DestinationDate: "20, September 2022",
      DestinationNumber: "80+ People",
      DestinationName: "Baku",
      DestinationDescription: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      DestinationCost: "1220 $",
      DestinationEvalNum: "4.5"
    },
    {
      DestinationImg: ChineseImg,
      DestinationDate: "27, August 2022",
      DestinationNumber: "100+ People",
      DestinationName: "Chinese",
      DestinationDescription: "Qui tempore voluptate qui quia commodi rem praesentium alias et.",
      DestinationCost: "2500 $",
      DestinationEvalNum: 5.0
    },
  ]
  return (
    <>
      <Hero image={PackagesImg} title="Travel With Us" fontFamily="fontFamilyAboutPackages" />
      <div className="packagesContainer">
        {Destinations.map((e, index)=>{

            return (
              <Destination key={index} DestinationImg={e.DestinationImg} DestinationDate={e.DestinationDate} DestinationNumber={e.DestinationNumber}
              DestinationName={e.DestinationName} DestinationDescription={e.DestinationDescription} DestinationCost={e.DestinationCost} DestinationEvalNum={e.DestinationEvalNum}/>
            )
        })}
      </div>

      <Footer />
    </>
  )
}

export default Packages