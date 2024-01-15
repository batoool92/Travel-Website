/* eslint-disable react/prop-types */
import "./ServicesCardStyle.css"

const ServicesCard = ({img, ServiceName, ServiceDesc}) => {
  return (
    <div className="serviseCard">
        <img className="serviceImg" src={img} alt="service image" />
        <p className="ServiceName">{ServiceName}</p>
        <p className="ServiceDesc">{ServiceDesc}</p>
    </div>
  )
}

export default ServicesCard