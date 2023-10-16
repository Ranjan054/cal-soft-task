import React, { useEffect, useState } from 'react';
import axios from 'axios'

import UserCard from '../../component/UserCard/UserCard';
import data from '../../data.json'

import search from '../../asset/icons/search-blue.svg';
import circle from '../../asset/icons/circle.svg';
import arrowBlue from '../../asset/icons/arrow-blue.svg';

const RightSection = () => {
    const [userData, setUserData] = useState(data || []);

    useEffect(() => {
        axios.get('https://run.mocky.io/v3/ab0ae267-69ba-44a2-8fcb-8de257c74d3c')
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    setUserData(res.data || data)
                }
            })
            .catch(err => {
                //setting local json data so ui will be visible incase mock api not works
                setUserData(data)
                console.log(err);
            })
    }, [])

    return (
        <div className=''>
            <div className='flex justify-between items-center'>
                <p className='text-3xl text-grey4 font-bold'>Spotlight</p>
                <div className='relative'>
                    <input
                        className='text-blue1 outline-none py-2.5 pr-2.5 pl-11 border border-blue1 rounded-full placeholder-blue3'
                        type="text"
                        placeholder='Search by portfolio name'
                    />
                    <img
                        className='absolute top-4 left-4'
                        src={search}
                        alt="search" />
                </div>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <div className='flex justify-between items-center'>
                    <p className='text-black text-2xl font-medium'>Top Portfolios by 30 Day PNL</p>
                    <img
                        className='ml-4 w-8 h-8'
                        src={circle}
                        alt="round" />
                </div>
                <div className='flex justify-between items-center cursor-pointer'>
                    <p className='text-blue1 text-base font-medium'>Explore More</p>
                    <img
                        className='ml-3'
                        src={arrowBlue}
                        alt="round" />
                </div>
            </div>

            <div className='flex flex-wrap gap-6 mt-7'>
                {
                    userData.length > 0 ? (
                        userData.map(el => (
                            <UserCard key={el.id} userDetail={el} />
                        ))
                    ) : (
                        <p className='text-black text-base'>Loading...</p>
                    )
                }
            </div>
        </div>
    )
}

export default RightSection;