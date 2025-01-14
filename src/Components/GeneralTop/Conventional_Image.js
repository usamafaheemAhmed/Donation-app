import React from 'react'
import { Image } from 'react-bootstrap'

import C_img from "../Assets/images/Conventional_Image.jpg"

const Conventional_Image = () => {
    return (
        <div className='Conventional_Image'>
            <div className='back3'>
                <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="a">
                    <path fill="currentColor" d="M830 610.5Q804 721 718 814t-195 21.5q-109-71.5-189.5-114T219 589.5Q185 500 177.5 380t101-174q108.5-54 225-64T694 218.5q74 86.5 118 184t18 208Z" /></clipPath>
                    <pattern id="b" patternUnits="userSpaceOnUse" width="25" height="25" viewBox="0 0 100 100" fill="#212121">
                        <circle cx="25" cy="25" r="8.333" /><circle cx="75" cy="75" r="8.333" /></pattern></defs>
                    <g clip-path="url(#a)"><path fill="url(#b)" d="M830 610.5Q804 721 718 814t-195 21.5q-109-71.5-189.5-114T219 589.5Q185 500 177.5 380t101-174q108.5-54 225-64T694 218.5q74 86.5 118 184t18 208Z" /></g></svg>
            </div>
            <div className='image'>
                <Image src={C_img} fluid />
            </div>
        </div>
    )
}

export default Conventional_Image