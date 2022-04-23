import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Img = styled.img`
  cursor: pointer;
  display: block;
  width: 85%;
  margin: auto;

padding:30px;
height:400px;
  border-radius:20px;
  border: 1px solid;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    backface-visibility: visible;
  }
`;

const Wrapper = styled.header`
  max-width: 100%;
  min-width: 100%;
//   position: relative;
  margin: auto;
 margin-top: 70px;
//  padding: 20px 0;

  color:grey;
  border: 1px solid red;
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

};


export const ImageSlider = () => {


    const image = ["https://img.freepik.com/free-vector/education-horizontal-typography-banner-set-with-learning-knowledge-symbols-flat-illustration_1284-29493.jpg?w=2000",

        "https://img.freepik.com/free-vector/futuristic-light-red-blue-gaming-header-social-media-banner-template_136469-1321.jpg",

        "https://img.freepik.com/free-vector/space-exploration-cartoon-web-banner_107791-6772.jpg?w=2000",

        "https://as1.ftcdn.net/v2/jpg/01/94/01/00/1000_F_194010093_9tC5JNVsiEOlVDs2F5Y6d0paYrdWTdbT.jpg",

        "https://thumbs.dreamstime.com/b/music-banner-mobile-smartphone-screen-music-application-sound-headphones-audio-voice-radio-beats-black-music-banner-221042724.jpg",

        "https://storyinc.asia/rw_common/themes/elegance/images/editable_images/banner_14.jpg",

        "https://thumbs.dreamstime.com/b/camera-pencil-brush-banner-pencils-brushes-photography-design-art-concept-website-72389892.jpg"];


    return (
        // <Wrapper>className="container my-3"
        <div style={{ width: "97%", margin: "auto", borderRadius: 5, marginTop: "90px", background: "#000000" }}>
            <div >
                <Slider {...settings}>
                    {image.map((el) => {

                        return <div key={el} className="col" >
                            <Img src={el} />

                        </div>
                    })}

                </Slider>
            </div>
        </div>
        //  </Wrapper>
    );
}

