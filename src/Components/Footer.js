import React from "react";
import banner1 from '../Assests/banner1.webp'
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialYoutube } from "react-icons/sl";

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="flex justify-around items-center bg-ebeeef p-4">
        <div>
          <img src={banner1} alt="Banner" />
        </div>
        <div>
          <h1 className="mt-5 text-3xl font-bold">TRY THE OLX APP</h1>
          <p className="text-xl font-semibold w-[500px] border-r-2 border-gray-400">
            Buy, sell and find just about anything using the app on your mobile.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold mb-3">GET YOUR APP TODAY</p>
          <div className="flex gap-3">
            <img width="125px" src="../../../Images/appstore_2x.webp" alt="appstore" />
            <img width="125px" src="../../../Images/playstore.webp" alt="playstore" />
          </div>
        </div>
      </div>
      <div className="content flex justify-around p-4">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list text-gray-500">
            <ul>
              <li className="hover:text-gray-700 cursor-pointer">kolkata</li>
              <li className="hover:text-gray-700 cursor-pointer">Mumbai</li>
              <li className="hover:text-gray-700 cursor-pointer">Chennai</li>
              <li className="hover:text-gray-700 cursor-pointer">Pune</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>TRENDING LOCATIONS</p>
          </div>
          <div className="list text-gray-500">
            <ul>
              <li className="hover:text-gray-700 cursor-pointer">Bhubaneshwar</li>
              <li className="hover:text-gray-700 cursor-pointer">Hyderabad</li>
              <li className="hover:text-gray-700 cursor-pointer">Chandigarh</li>
              <li className="hover:text-gray-700 cursor-pointer">Nashik</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list text-gray-500">
            <ul>
              <li className="hover:text-gray-700 cursor-pointer">About OLX Group</li>
              <li className="hover:text-gray-700 cursor-pointer">Careers</li>
              <li className="hover:text-gray-700 cursor-pointer">Contact Us</li>
              <li className="hover:text-gray-700 cursor-pointer">OLXPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>OLX</p>
          </div>
          <div className="list text-gray-500">
            <ul>
              <li className="hover:text-gray-700 cursor-pointer">Help</li>
              <li className="hover:text-gray-700 cursor-pointer">Sitemap</li>
              <li className="hover:text-gray-700 cursor-pointer">Legal & Privacy information</li>
              <li className="hover:text-gray-700 cursor-pointer">Vulnerability Disclosure Program</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>FOLLOW US</p>
          </div>
          <div className="flex gap-3 mt-3">
            <TiSocialFacebook className="cursor-pointer" size={24} color="gray" />
            <SlSocialInstagram className="cursor-pointer" size={24} color="gray" />
            <TiSocialTwitter className="cursor-pointer" size={24} color="gray" />
            <SlSocialYoutube className="cursor-pointer" size={24} color="gray" />
          </div>
          <div className="flex gap-2 mt-5">
            <img src="../../../Images/olx-footer-google-and-appstore 2.webp" alt="banner1" />
            <img src="../../../Images/olx-footer-google-and-appstore.webp" alt="banner2" />
          </div>
        </div>
      </div>
      <div className="footer flex justify-between items-center p-4 bg-002f34 text-white">
        <p className="cursor-pointer">Help-Sitemap</p>
        <p>All rights reserved © 2006-2023 OLX</p>
      </div>
    </div>
  );
}

export default Footer;
