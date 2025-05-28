import React from 'react'
import DoctorSlider from './DoctorSlider'
import { Swiper } from '../Swiper'
import TreatmentSlider from './TreatmentSlider'
import { Createpatientformm } from '../Createpatientformm'
import Slider from './Slider'
import DigitalHealthSolutions from './DigtalHealthsolution'
import Herosection from './Herosection'
import { AffordablePackagesSection } from './AffordablePackagesSection'

const Home = () => {
  return (
    <div>
      <Herosection />
      <DigitalHealthSolutions />
      <AffordablePackagesSection/>
      <Swiper />
      <Slider />

    </div>
  )
}

export default Home