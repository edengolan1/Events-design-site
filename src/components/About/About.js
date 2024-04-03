import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about'>
            <h3 className='inShort'>..בקצרה</h3>
            <p>!כל סוגי האירועים במחיר לכל כיס</p>
            <p>..חתונה | ערב מקווה | בת\בר מצווה | ימי הולדת | ועוד כל רעיון שעולה לך</p>
            <p> .אני מתחייבת לשירות מהטובים שיש ומתן מענה לכל הרעיונות והדרישות של הלקוח</p>
            <p>.העיצוב של בסטייל ומודרני בדגש על בקשות וטעם הלקוח, אני לא מתפשרת על איכות ומוצר מוגמר</p>
            <p>!!!!בקיצור יאללה בואו כבר ניסגור ונעשה לכם את אירוע השנה</p>
            <p className='div-link-contact'>
              <a href='#contact' className='link-to-contact'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                </svg>
                לפרטים 
              </a>
            </p>
            <span className='phone-customer'>0557784622</span>
        </div>
    );
}

export default About;