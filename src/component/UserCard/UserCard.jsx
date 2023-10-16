import React from 'react';

import start from '../../asset/icons/start.svg';
import userPlus from '../../asset/icons/user-plus.svg';
import dollar from '../../asset/icons/dollar.svg';
import cardUser from '../../asset/images/cardUser.svg';

const UserCard = ({ userDetail }) => {

    const { name, followers, currency, tradeStyle, type, roi, pnl, aum, balance } = userDetail;

    return (
        <div className='w-[350px] rounded-2xl border border-blue1 gradient-border p-4'>
            <div className='flex items-center'>
                <img
                    className='w-[115px] h-[115px]'
                    src={cardUser}
                    alt="user"
                />
                <div className='ml-4'>
                    <div className='flex items-center'>
                        <p className='text-black font-2xl font-medium'>{name}</p>
                        <img className='ml-1.5' src={start} alt="star" />
                    </div>
                    <div className='flex items-center gap-2 mt-2 shrink-0'>
                        <div className='flex items-center justify-center min-w-[50px] bg-blue1 rounded py-1.5 px-1.5'>
                            <img className='mr-1' src={userPlus} alt="star" />
                            <p className='text-white text-[10px] leading-[1px] font-medium'>{followers}</p>
                        </div>
                        <div className='flex items-center justify-center min-w-[50px] bg-blue1 rounded py-1 px-1.5'>
                            <img className='mr-1' src={dollar} alt="star" />
                            <p className='text-white text-[10px] leading-[1px] font-medium'>{currency}</p>
                        </div>
                    </div>
                    <div className='flex mt-2'>
                        <div>
                            <p className='text-grey5 text-xs font-medium'>Trade Style</p>
                            <p className='text-blue1 text-sm font-medium'>{tradeStyle}</p>
                        </div>
                        <div className='ml-4'>
                            <p className='text-grey5 text-xs font-medium'>Type</p>
                            <p className='text-blue1 text-sm font-medium'>{type}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex mt-4'>
                <div>
                    <div>
                        <p className='text-grey5 text-sm font-medium'>30D ROI</p>
                        <p className='text-blue1 text-2xl font-medium'>{roi}</p>
                    </div>
                    <div className='mt-4'>
                        <p className='text-grey5 text-sm font-medium'>AUM</p>
                        <p className='text-blue1 text-2xl font-medium'>{aum} <span className='text-sm'>USD</span></p>
                    </div>
                </div>
                <div className='ml-7'>
                    <div>
                        <p className='text-grey5 text-sm font-medium'>30D PNL</p>
                        <p className='text-blue1 text-2xl font-medium'>{pnl}</p>
                    </div>
                    <div className='mt-4'>
                        <p className='text-grey5 text-sm font-medium'>Balance</p>
                        <p className='text-blue1 text-2xl font-medium'>{balance} <span className='text-sm'>USD</span></p>
                    </div>
                </div>
            </div>

            <div
                onClick={() => window.alert(`clicked ${name}`)}
                className='flex justify-center w-full bg-blue1 rounded-full p-2 mt-6 cursor-pointer'
            >
                <span className='text-white text-base font-medium'>Follow</span>
            </div>

        </div>
    )
}

export default UserCard;