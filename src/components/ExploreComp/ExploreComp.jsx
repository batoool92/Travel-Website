/* eslint-disable react/prop-types */
import './ExploreCompStyle.css'


const ExploreComp = ({backgroundImage, title}) => {
  return (
    <div className='ExploreComp' style={{backgroundImage:`url(${backgroundImage})`}}>
        <p className='Promotion'>Promotion</p>
        <h1 className='ExploreTitle'>{title}</h1>
        <button className='ViewPackagesExploreBtn'>View Packages</button>
    </div>
  )
}

export default ExploreComp