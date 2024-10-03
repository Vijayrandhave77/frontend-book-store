import React from 'react'
import Cover from '../Components/Cover'
import BsellingBook from '../Components/BsellingBook'
import FeturedBook from '../Components/FeturedBook'
import DealWeek from '../Components/DealWeek'
import NewRelease from '../Components/NewRelease'
import Subsciption from '../Components/Subscription'
function MainPage() {
  return (
    <div>
      <Cover></Cover>
      <BsellingBook></BsellingBook>
      <FeturedBook></FeturedBook>
      <DealWeek></DealWeek>
      <NewRelease></NewRelease>
      <Subsciption></Subsciption>
    </div>
  )
}

export default MainPage
