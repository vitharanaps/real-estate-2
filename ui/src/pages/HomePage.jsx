import DreamSection from '@/components/shared/DreamSection'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/shared/Hero'
import Navbar from '@/components/shared/Navbar'
import OurClient from '@/components/shared/OurClient'
import PropertiesList from '@/components/shared/PropertiesList'
import React from 'react'

const HomePage = () => {
  return (
    <div className=' flex h-full w-full flex-col gap-7'>
      <Navbar />
      <Hero />
      <PropertiesList title="test Title" desc="fdsfd fd fj dsf dsj fhds fnds fjkd jkf dskj fjkds fkjds kfjd kjf dsjkf jkdsf jkds fkjds fjkds fjkds "/>
      <DreamSection />
      <PropertiesList title="test Title" desc="fdsfd fd fj dsf dsj fhds fnds fjkd jkf dskj fjkds fkjds kfjd kjf dsjkf jkdsf jkds fkjds fjkds fjkds "/>
     <OurClient />
     <PropertiesList title="test Title" desc="fdsfd fd fj dsf dsj fhds fnds fjkd jkf dskj fjkds fkjds kfjd kjf dsjkf jkdsf jkds fkjds fjkds fjkds "/>

      <Footer />
    </div>
  )
}

export default HomePage
