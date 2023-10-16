import React, { useState } from 'react';
import lock from '../../asset/icons/lock.svg';
import hide from '../../asset/icons/hide.svg';


const ResetPassword = ({ handleCurrentScreen }) => {
    const [password, setPassword] = useState('');
    const [resetPassword, setResetPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [resetPasswordVisible, setResetPasswordVisible] = useState(false);

    const inputCahngeHandler = (e, inputIdentifier) => {
        if (inputIdentifier === 'password') {
            setPassword(e.target.value)
        } else if (inputIdentifier === 'resetPassword') {
            setResetPassword(e.target.value)
        }
    }

    const handleSubmit = () => {
        if (password && resetPassword) {
            handleCurrentScreen('RECOVER_PASSWORD')
        } else {
            window.alert('Please enter password and reset password')
        }
    }

    return (
        <div className='w-[540px] text-center mx-auto sm:w-full'>
            <p className='text-blue1 text-5xl font-medium'>Reset Password</p>

            <div className='mt-24'>
                <div className='relative '>
                    <input
                        className='text-black text-xl w-full outline-none py-3.5 px-16 border border-blue1 rounded-full placeholder-grey1'
                        type={passwordVisible ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => inputCahngeHandler(e, 'password')}
                        placeholder='Enter new password'
                    />
                    <img className='absolute top-[0.563rem] left-4 w-9 h-8' src={lock} alt="lock" />
                    <img onClick={() => setPasswordVisible(!passwordVisible)} className='absolute top-[0.563rem] right-4 w-9 h-8 cursor-pointer' src={hide} alt="eye" />
                </div>
                <div className='relative mt-9'>
                    <input
                        className='text-black text-xl w-full outline-none py-3.5 px-16 border border-blue1 rounded-full placeholder-grey1'
                        type={resetPasswordVisible ? 'text' : 'password'}
                        value={resetPassword}
                        onChange={(e) => inputCahngeHandler(e, 'resetPassword')}
                        placeholder='Re-enter new password'
                    />
                    <img className='absolute top-[0.563rem] left-4 w-9 h-8' src={lock} alt="lock" />
                    <img onClick={() => setResetPasswordVisible(!resetPasswordVisible)} className='absolute top-[0.563rem] right-4 w-9 h-8 cursor-pointer' src={hide} alt="eye" />
                </div>
            </div>
            <div className='flex items-center justify-between mt-24'>
                <div onClick={() => window.alert('This will close the modal')} className='bg-white border w-64 py-3.5 px-2 border-blue1 rounded-full cursor-pointer'>
                    <span className='text-blue1 text-xl font-medium uppercase'>Cancel</span>
                </div>
                <div onClick={() => handleSubmit()} className='bg-blue1 border w-64 py-3.5 px-2 rounded-full cursor-pointer'>
                    <span className='text-white text-xl font-medium uppercase'>Create</span>
                </div>
            </div>

        </div>
    )
}

export default ResetPassword;