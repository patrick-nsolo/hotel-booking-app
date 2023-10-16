import React, { useState } from 'react';
import { FaEdit, FaHome, FaCity, FaEnvelope, FaHeart, FaCog, FaArrowRight } from 'react-icons/fa';
import './navigationBar.css';


function NavigationBar() {
    const [profileImage, setProfileImage] = useState(null);
    const [isEditingImage, setIsEditingImage] = useState(false);
    const [activeLink, setActiveLink] = useState(0);


    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
        setIsEditingImage(false);
    };

    const openImageUpload = () =>{
        if (!isEditingImage) {
            document.getElementById('image-upload').click();
        }
    };

    const handleClick = (index) => {
        setActiveLink(index);
    };

    return (
        <div className='navbar'>
            <div className='logo'>
                <h1 className='logo-name'>Mima<span>Booking</span></h1>
                <label className='profile-image-label' onClick={openImageUpload}>
                    {profileImage ? (
                        <img src={profileImage} alt='Profile'/>
                    ):(
                        <div className='default-image'>
                            <FaEdit/>
                        </div>
                    )}
                </label>
                <input type='file' id='image-upload' accept='image/*' onChange={handleImageUpload} style={{display:'none'}}/>
                <h2 className='profile-name'>Ilia Jan</h2>
            </div>
            <div className='navigation'>
                <ul className='nav-links'>
                    <li className={`nav-item ${activeLink === 0 ? 'clicked' : ''}`} onClick={() => handleClick(0)}><FaHome/>Dashboard</li>
                    <li className={`nav-item ${activeLink === 1 ? 'clicked' : ''}`} onClick={() => handleClick(1)}><FaCity/>Explore City</li>
                    <li className={`nav-item ${activeLink === 2 ? 'clicked' : ''}`} onClick={() => handleClick(2)}><FaEnvelope/>Ticket</li>
                    <li className={`nav-item ${activeLink === 3 ? 'clicked' : ''}`} onClick={() => handleClick(3)}><FaHeart/>Favorites</li>
                    <li className={`nav-item ${activeLink === 4 ? 'clicked' : ''}`} onClick={() => handleClick(4)}><FaCog/>Settings</li>
                </ul>
            </div>
            <div className='logout'>
                <span ><FaArrowRight/>Dashboard</span>

            </div>
        </div>
    )
}

export default NavigationBar;

