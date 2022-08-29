import React from 'react'
import Homebooks from './Home/Homebooks'
import Homeform from './Home/Homeform'
import Ourteachers from './Home/Ourteachers'
import Carousel from './Home/Homecarousel'
import Homecoursecard from './Home/Homecoursecard'
import Homecomment from './Home/homecomment'

const Home = () => {
  return (
    <>
    <Carousel />
    <Homeform />
    <Homecoursecard />
    <Homecomment />
    <Homebooks />
    <Ourteachers />
    </>
  )
}

export default Home