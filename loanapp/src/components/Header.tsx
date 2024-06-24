import React, { useState } from 'react';
import LoginPopUp from './LoginPopUp';
import RegisterPopUp from './RegisterPopUp';

export default function Header() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const handleLogin = () => {
    setLoginVisible(!loginVisible);
    setRegisterVisible(false); // Close register popup when opening login popup
  };

  const handleRegister = () => {
    setRegisterVisible(!registerVisible);
    setLoginVisible(false); // Close login popup when opening register popup
  };

  return (
    <header className="bg-white sticky top-0 z-100 p-4">
      <div className="max-w-5xl mx-auto justify-between flex-column">
        <img
          className="max-w-[160px]"
          src="https://images.ctfassets.net/ns4x1kunro08/6ZSL1rWEVELl8oO3XgdzL6/eb23348aef5b0f4bf540169d2ca5a734/AC_Logo.png"
          alt="Paygeon-Logo"
        />
        <div className="justify space-between flex-column">
          <button onClick={handleLogin}>
            <h2>Login</h2>
          </button>
          <button onClick={handleRegister}>
            <h2 className = 'ml-10'>Register</h2>
          </button>
        </div>
      </div>
      {loginVisible && <LoginPopUp />}
      {registerVisible && <RegisterPopUp />}
    </header>
  );
}
