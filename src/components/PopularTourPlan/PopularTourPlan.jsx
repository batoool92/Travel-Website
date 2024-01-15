import './PopularTourPlanStyle.css'

const PopularTourPlan = () => {
    return (
        <div className='PopularTourPlan'>
            <p className="trend">TREND</p>
            <h1 className="OurPopularPlans">Our Popular Tour Plans</h1>
            <p className="OurPopularPlansText">Et labore harum non nobis ipsum eum molestias
                mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum
                molestias mollitia et corporis praesentium a laudantium.</p>
            <div className="OurPlansPercent">
                <div className='OurPlansPercentNumCon'> 
                    <p className="OurPlansPercentNum">75</p><p className="Percent">%</p>
                 </div>
                <div className='OurPlansPercentNumCon'><p className="OurPlansPercentNum">55</p><p className="Percent">%</p></div>
            </div>
            <div className='vacationsHoneymoonCon'>
                <p className='vacationsHoneymoon'>VACATIONS</p>
                <p className='vacationsHoneymoon'>HONEYMOON</p>
            </div>
        </div>
    )
}

export default PopularTourPlan