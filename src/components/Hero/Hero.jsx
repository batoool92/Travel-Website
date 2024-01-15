/* eslint-disable react/prop-types */
import NavBar from '../NavBar/NavBar'
import './HeroStyle.css'

const Hero = ({ title, image ,fontFamily }) => {
    return (
        <div className='Hero' style={{backgroundImage:`url(${image})`}}>
            
            <NavBar menu={[{title:"Home", path:"/", id:1}, {title: "About", path:"/about",id:2}, {title:"Packages",path:"/Packages",id:3}, {title:"Services", path:"/",id:4}]} logo="Travel" btn="Get in Touch" />
            <h1 className={`HeroTitle ${fontFamily}`}>{title}</h1>

        </div>
    )
}

export default Hero