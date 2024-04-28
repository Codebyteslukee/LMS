import React from 'react'
import Back from '../common/back/Back'
import OnlineCourse from './OnlineCourse'
import CoursesCard from './CoursesCard'


const CoursesHome = () => {
  return (
    <>
      <Back title="Explore Courses" />
      <CoursesCard />
      <OnlineCourse />
    </>
  )
}

export default CoursesHome
