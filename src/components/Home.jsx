import React from 'react'
import Allservices from './Allservices'
import Ourwork from './Ourwork'
import Toolbox from './Toolbox'
import Proudmoments from './Proudmoments'
import Projectcompleted from './Projectcompleted'
import OurTeam from './OurTeam'
import Testimonial from './Testimonial'
import { Faqs } from './Faqs'

const Home = () => {
    return (
        <div>

            <Allservices />
            <Ourwork />
            <Toolbox />
            <Faqs />

            <Proudmoments />
            <Projectcompleted />
            <OurTeam />
            <Testimonial />

        </div>
    )
}

export default Home