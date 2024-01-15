import './HomePageStyle.css'
import Hero from '../../components/Hero/Hero'
import TourPackagesCard from '../../components/TourPackagesCard/TourPackagesCard'
import ServicesCard from '../../components/ServicesCard/ServicesCard'
import ExploreComp from '../../components/ExploreComp/ExploreComp'
import HeroImg from '../../assets/img/Hero.jpg'
import tourguide from '../../assets/img/tour-guide.png'
import travelling from '../../assets/img/travelling.png'
import hands from '../../assets/img/hands.png'
import medicalTeam from '../../assets/img/medical-team.png'
import ExploreNature from '../../assets/img/Explore-Nature.png'
import ExploreCities from '../../assets/img/Explore-Cities.png'
import AmazonForest from '../../assets/img/AmazonForest.png'
import SwizerlandCity from '../../assets/img/SwizerlandCity.png'
import GizaCity from '../../assets/img/GizaCity.png'
import BrazilFlag from '../../assets/img/BrazilFlag.svg'
import EgyptFlag from '../../assets/img/EgyptFlag.svg'
import SwizerlandFlag from '../../assets/img/SwizerlandFlag.svg'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
    let services = [
        {
          id: 1,
          img: tourguide,
          ServiceName: "Guided Tours",
          ServiceDesc: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
        },
        {
          id: 2,
          img: travelling,
          ServiceName: "Best Flights Options",
          ServiceDesc: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
        },
        {
          id: 3,
          img: hands,
          ServiceName: "Religious Tours",
          ServiceDesc: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
        },
        {
          id: 4,
          img: medicalTeam,
          ServiceName: "Medical insurance",
          ServiceDesc: "sunt qui repellat saepe quo velit aperiam id aliquam placeat."
        }
      ]
      let TourPackagesCards = [
        {
          id: 1,
          PackImage: SwizerlandCity,
          PackDuration: "8 Days",
          PackCapacity: "30 people going",
          PackDestination: "Switzerland",
          PackDesFlag: SwizerlandFlag,
          PackEvaluation: 5,
          PackDescription: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
        },
        {
          id: 2,
          PackImage: AmazonForest,
          PackDuration: "8 Days",
          PackCapacity: "60 people going",
          PackDestination: "Amazon",
          PackDesFlag: BrazilFlag,
          PackEvaluation: 5,
          PackDescription: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
        },
        {
          id: 3,
          PackImage: GizaCity,
          PackDuration: "8 Days",
          PackCapacity: "120 people going",
          PackDestination: "Giza",
          PackDesFlag: EgyptFlag,
          PackEvaluation: 5,
          PackDescription: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
        },
      ]
      return (
        <>
          <Hero image={HeroImg} title="No matter where you’re going to,
          we’ll take you there" fontFamily="fontFamilyHome" />
          <section className='ServicesSection'>
            <p className='category'>CATEGORY</p>
            <h1 className='servicesSectionTitle'>We Offer Best Services</h1>
            <div className="services">
              {services.map((element, index) => {
                return (<ServicesCard key={index} img={element.img} ServiceName={element.ServiceName} ServiceDesc={element.ServiceDesc} />)
              })}
            </div>
          </section>
          <section className="exploreSection">
            <ExploreComp backgroundImage={ExploreNature} title="Explore Nature" />
            <ExploreComp backgroundImage={ExploreCities} title="Explore Cities" />
          </section>
          <section className="TourPackagesSection">
            <p className="trendy">trendy</p>
            <h1 className="TrendingPackages">Our Trending Tour Packages</h1>
            <div className='TourPackagesCards'>
              {TourPackagesCards.map((element, index) => {
                return (
                  <TourPackagesCard key={index} PackImage={element.PackImage} PackDuration={element.PackDuration} PackCapacity={element.PackCapacity} PackDestination={element.PackDestination} PackDesFlag={element.PackDesFlag} PackEvaluation={element.PackEvaluation} PackDescription={element.PackDescription} />
                )
              })}
            </div>
          </section>
          <Footer />
    
        </>
      )
    
}

export default HomePage