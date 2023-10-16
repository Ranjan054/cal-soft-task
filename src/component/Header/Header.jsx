import React from 'react';
import cx from 'classnames'

import logo from '../../asset/images/logo.svg';
import sidePan from '../../asset/images/side-pan.svg';
import arrowGrey from '../../asset/icons/arrow-grey.svg';
import home from '../../asset/icons/home.svg';
import dashboard from '../../asset/icons/dashboard.svg';
import trading from '../../asset/icons/trading.svg';
import market from '../../asset/icons/market.svg';
import masterTrader from '../../asset/icons/master-trader.svg';
import platform from '../../asset/icons/platform.svg';
import referral from '../../asset/icons/referral.svg';
import subscription from '../../asset/icons/subscription.svg';
import exchanges from '../../asset/icons/exchanges.svg';
import master from '../../asset/icons/master.svg';
import admin from '../../asset/icons/admin.svg';
import light from '../../asset/icons/light.svg';
import dark from '../../asset/icons/dark.svg';

import './Header.css';
import { Link } from 'react-router-dom';

const menuData = [
    {
        title: 'Home',
        icon: home,
        url: '/nav-url',
        subMenu: []
    },
    {
        title: 'Dashboard',
        icon: dashboard,
        url: '/nav-url',
        subMenu: [
            {
                title: 'submenu1',
                icon: home,
                url: '/nav-url',
            },
            {
                title: 'submenu2',
                icon: home,
                url: '/nav-url',
            }
        ]
    },
    {
        title: 'Copy Trading',
        icon: trading,
        url: '/nav-url',
        subMenu: [{
            title: 'submenu1',
            icon: trading,
            url: '/nav-url',
        }]
    },
    {
        title: 'Market Place',
        icon: market,
        url: '/nav-url',
        subMenu: [{
            title: 'submenu1',
            icon: market,
            url: '/nav-url',
        }]
    },
    {
        title: 'Master Traders',
        icon: masterTrader,
        url: '/nav-url',
        subMenu: [{
            title: 'submenu1',
            icon: masterTrader,
            url: '/nav-url',
        }]
    },
    {
        title: 'Platform Wallet',
        icon: platform,
        url: '/nav-url',
        subMenu: []
    },
    {
        title: 'Referral',
        icon: referral,
        url: '/nav-url',
        subMenu: []
    },
    {
        title: 'Subscripton',
        icon: subscription,
        url: '/nav-url',
        subMenu: [{
            title: 'submenu1',
            icon: subscription,
            url: '/nav-url',
        }]
    },
    {
        title: 'Become Master Trader',
        icon: masterTrader,
        url: '/nav-url',
        subMenu: []
    },
    {
        title: 'My Exchanges',
        icon: exchanges,
        url: '/nav-url',
        subMenu: []
    },
    {
        title: 'Master Trader Profile',
        icon: master,
        url: '/nav-url',
        subMenu: []
    },
    {
        title: 'Admin',
        icon: admin,
        url: '/nav-url',
        subMenu: [{
            title: 'submenu1',
            icon: admin,
            url: '/nav-url',
        }]
    },
]

const Header = () => {
    return (
        <header className='w-[332px] shrink-0 bg-white shadow1 relative h-screen'>

            <div className='flex justify-between items-center p-6'>
                <Link to={'/'}>
                    <div className='w-[166px] h-[50px] cursor-pointer'>
                        <img src={logo} alt="logo" />
                    </div>
                </Link>
                <div className='w-9 h-9 cursor-pointer'>
                    <img src={sidePan} alt="sidepan" />
                </div>
            </div>

            <div className='menu-height overflow-auto p-6'>
                <div className='mb-4 flex flex-col gap-8'>
                    {
                        menuData.map((el, index) => (
                            <div key={el.title} className={cx('rounded-full w-fit', index === 0 ? 'border border-blue1 bg-blue2' : '')}>
                                <Link to={el.url} >
                                    <div className='flex items-center cursor-pointer py-2 px-4 rounded-full hover:bg-gray-200'>
                                        <img className='w-[22px] h-[22px] mr-3.5' src={el.icon} alt={el.title} />
                                        <span className='text-grey1 text-lg font-medium'>
                                            {el.title}
                                        </span>
                                        {
                                            el.subMenu.length > 0 ? (
                                                <img className='ml-2' src={arrowGrey} alt="sidepan" />
                                            ) : ''
                                        }
                                    </div>

                                </Link>
                            </div>
                        ))
                    }
                </div>

                <div className='bg-white w-[332px] absolute bottom-0 left-0 px-4 pt-2'>
                    <div className='flex rounded-full shadow2 p-1.5 mb-6'>
                        <div className='flex items-center justify-center py-2.5 rounded-full w-1/2 cursor-pointer bg-grey3 shadow3'>
                            <img src={light} alt="icon" />
                            <p className='text-grey2 text-base font-medium ml-2'>Light</p>
                        </div>
                        <div className='flex items-center justify-center py-2.5 rounded-full w-1/2 cursor-pointer'>
                            <img src={dark} alt="icon" />
                            <p className='text-grey2 text-base font-medium ml-2'>Dark</p>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default Header;