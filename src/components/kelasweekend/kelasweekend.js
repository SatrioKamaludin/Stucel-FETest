import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faClock, faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import React, { Component } from 'react';
import { RibbonContainer, RightRibbon, RightLargeRibbon } from "react-ribbons";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './kelasweekend.css'

const state = {
    responsive:{
        480: {
            items:1
        },
        720: {
            items:3
        }
    }
}

class KelasWeekend extends Component {
    render(){
        return(
            <div className='main'>
                <OwlCarousel className='owl-theme' margin={15} items="1" nav={false} responsive={state.responsive}>
                    <div className='card1'>
                        <RibbonContainer className="gratis">
                            <RightLargeRibbon
                                backgroundColor="#ffffff"
                                color="#000000"
                                fontWeight="700"
                            >
                            GRATIS
                            </RightLargeRibbon>
                            <FontAwesomeIcon icon={faClock} />
                            &nbsp;&nbsp;&nbsp;KELAS WEEKEND
                            <div className='title'>Membangun Tim Muda yang Berkualitas dan Solid di Masa Pandemi</div>
                            <div className='date'>
                                <FontAwesomeIcon icon={faCalendarDays}/>
                                &nbsp;&nbsp;&nbsp;17 Desember 2020
                            </div>
                            <div className='bill'>
                                <FontAwesomeIcon icon={faMoneyBill}/>
                                &nbsp;&nbsp;&nbsp;Gratis
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className='watch'>
                                TONTON VIDEO&nbsp;&nbsp;&nbsp;
                                <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                        </RibbonContainer>
                        <div className='footer'>INFORMASI LEBIH LENGKAP</div>
                    </div>
                    <div className='card2'>
                        <RibbonContainer className="baru">
                            <RightLargeRibbon
                                backgroundColor="#ad0000"
                                color="#ffffff"
                                fontWeight="700"
                            >
                            BARU
                            </RightLargeRibbon>
                            &nbsp;&nbsp;&nbsp;KEPEMIMPINAN
                        </RibbonContainer>
                        <img src='https://img.beritasatu.com/cache/investor/798x449-2/20170714071818545.jpg'></img>
                        <div className='info'>
                            <div className='weekend'>
                                <FontAwesomeIcon icon={faClock} />
                                &nbsp;&nbsp;&nbsp;KELAS WEEKEND
                            </div>
                            <div className='title'>Memimpin Tim Milenials</div>
                            <div className='date'>
                                <FontAwesomeIcon icon={faCalendarDays}/>
                                &nbsp;&nbsp;&nbsp;17 Desember 2020
                            </div>
                            <div className='footer'>INFORMASI LEBIH LENGKAP</div>
                        </div>
                    </div>
                    <div className='card2'>
                        <RibbonContainer className="baru">
                            <RightLargeRibbon
                                backgroundColor="#ffffff"
                                color="#000000"
                                fontWeight="700"
                            >
                            GRATIS
                            </RightLargeRibbon>
                            &nbsp;&nbsp;&nbsp;KERJASAMA TIM
                        </RibbonContainer>
                        <img src='https://img.beritasatu.com/cache/investor/798x449-2/20170714071818545.jpg'></img>
                        <div className='info'>
                            <div className='weekend'>
                                <FontAwesomeIcon icon={faClock} />
                                &nbsp;&nbsp;&nbsp;KELAS WEEKEND
                            </div>
                            <div className='title'>Memimpin dalam masa dan keadaan yang tidak pasti</div>
                            <div className='date'>
                                <FontAwesomeIcon icon={faCalendarDays}/>
                                &nbsp;&nbsp;&nbsp;17 Desember 2020
                            </div>
                            <div className='footer'>INFORMASI LEBIH LENGKAP</div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        )
    }
}

export default KelasWeekend;