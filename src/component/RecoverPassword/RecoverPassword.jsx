import React, { useState } from 'react';
import OTPInput from "otp-input-react";

const RecoverPassword = ({ handleCurrentScreen }) => {
    const [otp, setOTP] = useState("");

    const handleSubmit = () => {
        if (otp.length === 6) {
            handleCurrentScreen('SUCCESS_PASSWORD');
        } else {
            window.alert('Please enter all otp value');
        }
    }

    return (
        <div className='w-[616px] text-center mx-auto sm:w-full'>
            <p className='text-blue1 text-5xl font-medium'>Recover Password</p>
            <p className='text-grey1 text-2xl font-normal mt-4'>An email containing link to recover your password will be sent to the below mentioned mail address</p>

            <OTPInput
                value={otp}
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                className={'flex items-center justify-center gap-3 mt-12'}
                inputClassName={'w-12 h-14 rounded-xl bg-white border border-blue1 text-base font-medium text-center outline-none text-blue1'}
                inputStyles={{ width: '48px', height: '56px', marginRight: '0' }}
            />

            <p onClick={() => window.alert('New code sent!')} className='text-blue1 text-base font-normal mt-3 cursor-pointer'>Request a new code</p>
            <p className='text-grey1 text-2xl font-normal mt-8'>After 5 unsuccessful login attempts, your account will be locked for 2 hours</p>
            <div className='flex items-center justify-between mt-9 w-[540px] mx-auto sm:w-full'>
                <div onClick={() => handleCurrentScreen('RESET_PASSWORD')} className='bg-white border w-64 py-3.5 px-2 border-blue1 rounded-full cursor-pointer'>
                    <span className='text-blue1 text-xl font-medium uppercase'>Cancel</span>
                </div>
                <div onClick={() => handleSubmit()} className='bg-blue1 border w-64 py-3.5 px-2 rounded-full cursor-pointer'>
                    <span className='text-white text-xl font-medium uppercase'>Proceed</span>
                </div>
            </div>
        </div>
    )
}

export default RecoverPassword;