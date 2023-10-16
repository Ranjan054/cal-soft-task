import React, { useState } from 'react';
import ResetPassword from '../../component/ResetPassword/ResetPassword';
import RecoverPassword from '../../component/RecoverPassword/RecoverPassword';
import SuccessPassword from '../../component/SuccessPassword/SuccessPassword';

const Password = () => {
  const [currentScreen, setCurrentScreen] = useState('RESET_PASSWORD');

  const handleCurrentScreen = screen => {
    setCurrentScreen(screen)
  }

  const renderScreen = () => {
    switch (currentScreen) {
      case 'RESET_PASSWORD':
        return <ResetPassword handleCurrentScreen={handleCurrentScreen} />;
      case 'RECOVER_PASSWORD':
        return <RecoverPassword handleCurrentScreen={handleCurrentScreen} />;
      case 'SUCCESS_PASSWORD':
        return <SuccessPassword />;
      default:
        return <p className='text-red-400 text-base text-center'>Something went wrong!</p>;
    }
  };

  return (
    <div className='bg-white relative w-full h-screen flex items-center justify-center p-4 overflow-auto'>
      <div className='min-w-[800px] shadow4 rounded-[10px] border border-blue1 p-12 text-center sm:min-w-full'>
        {
          renderScreen()
        }
      </div>
    </div>
  )
}

export default Password;