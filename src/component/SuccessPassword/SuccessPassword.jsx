import React from 'react';
import success from '../../asset/images/success.svg';


const SuccessPassword = () => {
    return (
        <div className='w-[616px] text-center mx-auto sm:w-full'>
            <p className='text-blue1 text-5xl font-medium'>Your password has been update successfully</p>
            <img className='mx-auto' src={success} alt="success" />
            <div className='flex items-center justify-between mt-4 w-[540px] mx-auto sm:w-full'>
                <div onClick={() => window.alert('This will close the modal')} className='bg-blue1 border w-full py-3.5 px-2 rounded-full cursor-pointer'>
                    <span className='text-white text-xl font-medium uppercase'>Okay</span>
                </div>
            </div>
        </div>
    )
}

export default SuccessPassword;