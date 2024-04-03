import React from 'react';
import './Image.css';

const image1 = '/assets/image-wedding.jpg';
const image2 = '/assets/image-wedding2.jpg';
const image3 = '/assets/image-wedding3.jpg';

function Image() {
    return (
        <div className='image-wedding'>
            <div className='image1' style={{backgroundImage: `url(${image1})`}}></div>
            <div className='image2' style={{backgroundImage: `url(${image2})`}}>WELCOME TO EVENTS DESIGN</div>
            <div className='image3' style={{backgroundImage: `url(${image3})`}}></div>
        </div>
    );
}

export default Image;