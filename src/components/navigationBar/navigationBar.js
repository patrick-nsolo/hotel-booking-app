import React, { useState } from 'react';
import './navigationBar.css';

function NavigationBar() {
    const [profileImage, setProfileImage] = useState('default-image.jpg');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src='logo.png' alt='hotel-logo'/>

            </div>
        
        </div>
    )
}

export default NavigationBar;

