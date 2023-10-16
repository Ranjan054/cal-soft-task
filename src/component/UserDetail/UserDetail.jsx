import React, { useState } from 'react';
import cx from 'classnames'
import user from '../../asset/images/user.svg';
import notification from '../../asset/icons/notification.svg';
import arrowBlueDown from '../../asset/icons/arrow-blue-down.svg';
import dashboard from '../../asset/icons/dashboard.svg';

const UserDetail = ({ userName }) => {
    const [dropDown, setDropDown] = useState(false)

    return (
        <div className='flex items-center justify-end'>
            <div className='w-8 h-8 cursor-pointer shrink-0 mr-4'>
                <img src={notification} alt="notification" />
            </div>

            <div className='relative'>
                <div onClick={() => setDropDown(!dropDown)}
                    className='py-2 px-4 rounded-full w-fit border-2 border-blue1'>
                    <div className='flex items-center cursor-pointer'>
                        <img className='w-[30px] h-[30px] mr-2' src={user} alt='user' />
                        <span className='text-blue1 text-lg font-bold'>
                            {userName}
                        </span>
                        <img className={cx('ml-2' ,dropDown ? 'rotate-180' : '')} src={arrowBlueDown} alt="sidepan" />
                    </div>
                </div>

                {
                    dropDown ? (
                        <div className='absolute z-10 top-14 -left-7 bg-white py-4 px-3 shadow rounded-md'>
                            <div className='py-3 px-4 rounded-full w-fit hover:bg-gray-200'>
                                <div className='flex items-center cursor-pointer'>
                                    <img className='w-[22px] h-[22px] mr-2' src={dashboard} alt='menu' />
                                    <span className='text-grey1 text-base font-bold'>
                                        dashboard -1
                                    </span>
                                </div>
                            </div>
                            <div className='py-3 px-4 rounded-full w-fit hover:bg-gray-200'>
                                <div className='flex items-center cursor-pointer'>
                                    <img className='w-[22px] h-[22px] mr-2' src={dashboard} alt='menu' />
                                    <span className='text-grey1 text-base font-bold'>
                                        dashboard -1
                                    </span>
                                </div>
                            </div>
                            <div className='py-3 px-4 rounded-full w-fit hover:bg-gray-200'>
                                <div className='flex items-center cursor-pointer'>
                                    <img className='w-[22px] h-[22px] mr-2' src={dashboard} alt='menu' />
                                    <span className='text-grey1 text-base font-bold'>
                                        dashboard -3
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : ''
                }




            </div>


        </div>
    )
}

export default UserDetail;