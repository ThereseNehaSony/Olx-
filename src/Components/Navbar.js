import React, { useState, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import olx from '../Assests/olx-logo-vector.png';
import lens from '../Assests/search.png';
import arrow from '../Assests/arrow.png';
import search from '../Assests/search1.png';
import Login from './Login';

const Navbar = () => {
  const [loginPop, setLoginPop] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between p-3 bg-slate-100 shadow-md">
        <img src={olx} className="w-11 h-9" alt="OLX Logo" />
        
        <div className="flex mt-3 sm:mt-0 border border-spacing-1 p-1 border-black bg-white">
          <img src={lens} className="w-4 h-4 mt-3" alt="Search Icon" />
          <input type="text" placeholder="Location" className="ml-2 outline-none h-8 sm:h-10 flex-grow sm:w-auto" />
          <img src={arrow} className="w-5 h-5 mt-3" alt="Arrow Icon" />
        </div>

        <div className="flex mt-3 sm:mt-0 border border-black bg-white ml-1">
          <input type="text" placeholder="Find Cars, Mobile phones and more" className="ml-2 h-8 sm:h-10 w-72 sm:w-160 outline-none" />
          <img src={search} alt="Search Icon" className="w-10 h-10" />
        </div>

        <div className="flex mt-3 sm:mt-0 p-2 cursor-pointer">
          <h1 className="font-semibold">ENGLISH</h1>
          <img src={arrow} className="w-5 h-5 ml-1" alt="Arrow Icon" />
        </div>

        <div onClick={() => setLoginPop(!loginPop)} className="flex mt-3 sm:mt-0 p-2 cursor-pointer underline hover:no-underline">
          <h1 className="font-bold text-sm sm:text-lg">Login</h1>
        </div>

        <Link to='/create'>
        <div className="mt-3 sm:mt-0 p-1 cursor-pointer rounded-full border border-yellow-500">
          <h1 className="font-bold text-sm sm:text-lg ml-2">+ SELL</h1>
        </div>
        </Link>
          
          
      </div>

     {loginPop && <Login setLoginPop={setLoginPop} /> }
    </div>
  );
};

export default Navbar;
