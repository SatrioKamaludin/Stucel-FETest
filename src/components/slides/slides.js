import React, { Component } from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './slides.css'
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const state = {
    responsive:{
        480: {
            items:1.5
        },
        844: {
            items:3
        },
        1280: {
            items:5
        }
    }
}

class slides extends Component {

    render(){
        return(
            <div className='main'>
                <div className='slidesWeb'>
                    <br className='line'></br>
                    <div className='slidesTitle'>Experience The World</div>
                    <OwlCarousel className='owl-theme' loop margin={30} items="5" nav touchDrag={true} responsive={state.responsive}>
                        <Card className='Card' inverse>
                            <CardImg 
                                src='https://www.teahub.io/photos/full/86-865642_big-ben-westminster-abbey-houses-of-parliament.jpg'
                            />
                            <CardImgOverlay className='CardImgOverlay'>
                                <CardTitle tag="h3">Majestic London</CardTitle>
                                <CardText>9 Days</CardText>
                                <CardText className='exploretrip'>EXPLORE TRIP &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                        <Card className='Card' inverse>
                            <CardImg 
                                src='https://images.wallpaperscraft.com/image/single/rome_italy_vatican_st_peters_basilica_vatican_city_st_peters_cathedral_architecture_city_night_sky_sunset_79265_720x1280.jpg'
                            />
                            <CardImgOverlay className='CardImgOverlay'>
                                <CardTitle tag="h3">Glorious Rome</CardTitle>
                                <CardText>9 Days</CardText>
                                <CardText className='exploretrip'>EXPLORE TRIP &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                        <Card className='Card' inverse>
                            <CardImg 
                                src='https://wallpapercave.com/wp/wp5714416.jpg'
                            />
                            <CardImgOverlay className='CardImgOverlay'>
                                <CardTitle tag="h3">Authentic Bangkok</CardTitle>
                                <CardText>9 Days</CardText>
                                <CardText className='exploretrip'>EXPLORE TRIP &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                        <Card className='Card' inverse>
                            <CardImg 
                                src='https://cdn.pixabay.com/photo/2016/05/07/14/44/washington-monument-1377516_1280.jpg'
                            />
                            <CardImgOverlay className='CardImgOverlay'>
                                <CardTitle tag="h3">Historical Washington</CardTitle>
                                <CardText>9 Days</CardText>
                                <CardText className='exploretrip'>EXPLORE TRIP &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                        <Card className='Card' inverse>
                            <CardImg 
                                src='https://images.wallpaperscraft.com/image/single/moscow_russia_red_square_light_evening_69285_720x1280.jpg'
                            />
                            <CardImgOverlay className='CardImgOverlay'>
                                <CardTitle tag="h3">Glamorous Moscow</CardTitle>
                                <CardText>9 Days</CardText>
                                <CardText className='exploretrip'>EXPLORE TRIP &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                        <Card className='Card' inverse>
                            <CardImg 
                                src='https://i.pinimg.com/originals/a2/3c/05/a23c057b6d336fd9e5050030540059ea.jpg'
                            />
                            <CardImgOverlay className='CardImgOverlay'>
                                <CardTitle tag="h3">Singapore's Singapore</CardTitle>
                                <CardText>9 Days</CardText>
                                <CardText className='exploretrip'>EXPLORE TRIP &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight}/>
                                </CardText>
                            </CardImgOverlay>
                        </Card>
                    </OwlCarousel>
                </div>
            </div>
        )
    }
}

export default slides;