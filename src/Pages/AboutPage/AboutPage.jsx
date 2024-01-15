import AboutUsImg from '../../assets/img/AboutUsImg.png'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import PopularTourPlan from '../../components/PopularTourPlan/PopularTourPlan'
import './AboutPageStyle.css'
const AboutPage = () => {
  return (
    <>
      <Hero image={AboutUsImg} title="About Us" fontFamily="fontFamilyAboutPackages" />
      <section className='AboutUsSecSection'>
        <div className="SecSectionFirstPart">

          <p className='promotionAboutUs'>Promotion</p>
          <h1 className='SecSectionTitle'>We Provide You Best Europe Sightseeing Tours</h1>
          <p className='SecSectionText'>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium
            a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui
            soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
          <button className='ViewPackagesBtn'>View Packages</button>
        </div>
        <div className="SecSectionSecondPart">
          <div className='abouUsImgBorder'>
            <img src='/src/assets/img/abouUsImgBorder.png' alt="" />
          </div>
          <div className='AboutSecSectionImage'>
            <img src='/src/assets/img/AboutSecSectionImage.png' />
          </div>
        </div>
      </section>
      <section>
        <div className='WanderlustContainer'>
          <div className="Wanderlust">Wanderlust</div>
          <div className="WanderlustIcon">
          <svg xmlns="http://www.w3.org/2000/svg" width="107" height="106" viewBox="0 0 107 106" fill="none">
            <rect x="27.3633" y="27" width="55.2833" height="55" fill="white" />
            <path d="M53.4977 6.625C27.756 6.625 6.88379 27.3902 6.88379 53C6.88379 78.6098 27.756 99.375 53.4977 99.375C79.2393 99.375 100.112 78.6098 100.112 53C100.112 27.3902 79.2393 6.625 53.4977 6.625ZM68.4911 53.7143L45.7668 70.1629C45.6423 70.252 45.4954 70.3051 45.3424 70.3166C45.1894 70.328 45.0363 70.2973 44.8997 70.2277C44.7631 70.1582 44.6485 70.0526 44.5683 69.9224C44.4882 69.7923 44.4457 69.6427 44.4454 69.49V36.6135C44.4449 36.4605 44.487 36.3105 44.567 36.1799C44.6469 36.0493 44.7617 35.9433 44.8986 35.8736C45.0354 35.8039 45.189 35.7733 45.3422 35.7851C45.4955 35.797 45.6424 35.8508 45.7668 35.9406L68.4911 52.3789C68.5985 52.4544 68.686 52.5545 68.7465 52.6707C68.8069 52.7869 68.8385 52.9158 68.8385 53.0466C68.8385 53.1774 68.8069 53.3063 68.7465 53.4225C68.686 53.5387 68.5985 53.6387 68.4911 53.7143Z" fill="#DF6951" />
          </svg>
          </div>
        
        </div>

      </section>
      <section className='PopularTourSection'>
        <div className='AboutUsPopularTourImg'>
          <img src='/src/assets/img/AboutUsPopularTourImg.png' alt="" />
        </div>
        <PopularTourPlan />
      </section>
      <Footer />
    </>
  )
}

export default AboutPage