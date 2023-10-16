import React from 'react';
import './Homepage.css'
import Header from '../../component/Header/Header';
import UserDetail from '../../component/UserDetail/UserDetail';
import RightSection from '../RightSection/RightSection';



const Homepage = () => {
  return (
    <div>
      <div className='flex'>
        <Header />
        <div className='w-full px-6 pt-5 pb-7'>
          <UserDetail userName='User001' />

          <div className='py-6 px-7 mt-5 rounded-2xl shadow4 cardDetail-wrapper'>
            <RightSection />
          </div>

        </div>
      </div>
    </div>

  )
}

export default Homepage;