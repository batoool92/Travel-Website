/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import './FooterStyle.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiTwoo } from "react-icons/si";


const Footer = () => {
    return (
        <div className='Footer'>
            <div className='FooterContainer'>
                <div className='TravelContainer'>
                    <div> <h1>Travel</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="125" height="34" viewBox="0 0 125 34" fill="none">
                            <g clip-path="url(#clip0_556_70)">
                                <path d="M0.319436 12.2934C7.60804 19.7161 38.4658 27.4793 59.0352 27.3494C81.2698 27.2456 93.3434 24.2422 116.656 12.8633C116.632 14.1493 116.46 15.1935 116.527 16.1495C116.54 17.2392 116.57 18.3915 116.924 19.4472C117.003 19.7602 117.912 20.247 118.438 20.2586C118.965 20.2701 119.706 19.7468 119.797 19.4168C120.57 16.2589 121.173 13.118 121.845 9.90599C122.018 8.86186 121.317 8.16171 119.79 7.99335C114.003 7.54477 108.199 7.03359 102.342 6.65612C101.017 6.59594 99.5481 6.99948 97.8452 7.16964C99.8879 9.72529 102.874 9.10601 105.262 9.5734C107.751 10.0949 110.331 10.2863 113.501 10.7398C107.32 14.9515 100.721 17.8571 93.4912 19.9915C67.0307 27.8983 40.4106 26.1939 13.9451 17.1574C10.5001 15.9613 7.24721 14.4893 3.87149 13.2221C2.85576 13.0027 1.92517 12.7748 0.319436 12.2934Z" fill="#DF6951" />
                            </g>
                            <defs>
                                <clipPath id="clip0_556_70">
                                    <rect width="119.86" height="21.8567" fill="white" transform="matrix(0.995045 -0.0994248 -0.245055 -0.969509 5.67578 33.4836)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p className="travelFooterText">Travel helps companies manage payments easily.</p>
                    <div className="contactUsIcons">
                        <FaLinkedinIn />
                        <FaFacebookMessenger />
                        <FaTwitter />
                        <SiTwoo />
                    </div>
                </div>
                <div className='CompanyContainer'>
                    <h3>Company</h3>
                    <p>about us</p>
                    <p>careers</p>
                    <p>Blog</p>
                    <p>Pricing</p>
                </div>
                <div className='DestinationsContainer'>
                    <h3>Destinations</h3>
                    <p>Maldives</p>
                    <p>Los Angelas</p>
                    <p>Las Vegas</p>
                    <p>Torronto</p>
                </div>
            </div>

            <p className='CopyRight'>Copyright @ Xpro 2023 All Rights Reserved.</p>
        </div>
    )
}

export default Footer