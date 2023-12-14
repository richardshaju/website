import React, { useState, useEffect } from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { MdDesignServices } from "react-icons/md";  
import { MdHomeRepairService } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import './Navbar.css'
function Navbar() {

    const [color, setColor] = useState('');

    const listenScrollEvent = () => {
        if (window.scrollY > 100) {
            setColor('rgba(0, 0, 0, 10');
        } else {
            setColor('');
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        const sections = document.querySelectorAll('section')
        const navLi = document.querySelectorAll('nav .right ul li a')

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight
                if (window.scrollY > (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id')
                }
            })
            navLi.forEach(li => {
                li.classList.remove('active');
                if (li.classList.contains(current)) {
                    li.classList.add('active')
                }
            })
        })




        /* window.addEventListener('scroll', () => {
             const scrollY = window.pageXOffset;
             console.log(sections);
             sections.forEach((current) => {
                 const sectionHeight = current.offsetHeight
                 const sectionTop = current.offsetTop - 200;
                 const sectionId = current.getAttribute('id')
                 console.log(sectionId);
                 if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                     document
                         .querySelector('li a[href*="' + sectionId + '"]')
                         .classList.add('active')
                 } else {
                     document
                         .querySelector('li a[href*="' + sectionId + '"]')
                         .classList.remove('actve')
                 }
             })
         })*/

    })
    return (


        <div className='navbar' style={{ backgroundColor: color }}>
            <nav>
                <div className='left'>
                    <a href="#home" className='home'>
                        <h2 className='name'><span style={{ color: 'red' }}>R</span>ichard Shaju</h2>
                    </a>
                </div>
                <div className='right'>
                    <ul>
                        <li >
                            <a href="#home" className='home'>
                            <IoHomeSharp size={20}size={20}
                            
                            /><p>Home</p>
                            </a>
                        </li>
                        <li >
                            <a href="#about" className='about'>
                            <IoMdPerson size={20}/><p>About</p>
                            </a>
                        </li>
                        <li  >
                            <a href="#service" className='service'>
                            <MdDesignServices size={20}/><p>Service</p>
                            </a>
                        </li>
                        <li >
                            <a href="#work" className='work'>
                            <MdHomeRepairService size={20}/><p>Works</p>
                            </a>
                        </li>
                        <li >
                            <a href="#contact" className='contact'>
                            <IoMail size={20} /><p>Contact</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default Navbar