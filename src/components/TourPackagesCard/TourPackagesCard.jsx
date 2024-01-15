/* eslint-disable react/prop-types */
import './TourPackagesCardStyle.css'
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
// import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";


const TourPackagesCard = ({ PackImage, PackDuration, PackCapacity, PackDestination, PackDesFlag, PackEvaluation, PackDescription }) => {

    const list = []
    
    for (let i = 0; i < 5; i++) {
        if (i < PackEvaluation) {
            list.push(<FaStar className='activeStar' />)
        }
        else {
            list.push(<FaStar />)
        }
    }
    return (
        <div className='TourPackagesCard' >
            <div className='ImgFlagContainer'>
                <img className='PackImage' src={PackImage} alt="Destination" />
                <img className='PackDesFlag' src={PackDesFlag} alt="" />
            </div>
            <div className="PackCapacityDuration">
                <p className='PackDuration'><CiCalendar className='CiCalendar' />{PackDuration}</p>
                <p className='PackCapacity'><CiUser className='CiUser' />{PackCapacity}</p>
            </div>

            <div className='PackDesEval'>
                <h1 className='PackDestination'>{PackDestination}</h1>
                <div>
                    {list}
                </div>

            </div>
            <p className='PackDescription'>{PackDescription}</p>
            <button className='ExploreBtn'>Explore Now</button>
        </div>
    )
}

export default TourPackagesCard