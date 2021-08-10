import React from 'react'
import styled from 'styled-components';
import './card.css';


const Card = (props) => {
    console.log(props)
    const {borderRadius=false, size='lg', name, profile, workedAt, mainBg, profileImg, skillImg} = props 
    return (
        <StyledComponents.MainWrapper borderRadius={borderRadius} size={size} skillImg={skillImg} profileImg={profileImg} mainBg={mainBg}>
            <div className="profile-image" data-tooltip={name}>
                <div className="skill-image"/>
            </div>
        </StyledComponents.MainWrapper>
    )
}

export default Card

const handleSizeType = (size) => {
    switch (size) {
      case "lg":
        return "width: 100%; height: 100vh";
      case "md":
        return "width: 50%; height: 75vh";
      default:
        return "width: 25%; height: 50vh";
    }
  };

const StyledComponents = {
    MainWrapper: styled.div`
        display: flex;
        background-color: red;
        justify-content: center;
        border-radius: ${(props)=>props.borderRadius?'15px':0};
        align-items: center;
        background-image: ${(props)=> `url(${props.mainBg})`};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        ${({ size}) => handleSizeType(size)};
        .profile-image {
            background-image: ${(props)=> `url(${props.profileImg})`};
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            flex-direction: column;
            height: 100px;
            width: 100px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            border-bottom-left-radius: 25px;
            }

            .skill-image {
            background-image: ${(props)=> `url(${props.skillImg})`};
            height: 30px;
            width: 30px;
            align-self: flex-start;
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            }

            .profile-image::before,
            .profile-image::after {
            --scale: 0;
            content: "";
            position: absolute;
            transform: translateY(40px) scale(var(--scale));
            transition: 150ms transform;
            }

            .profile-image::before {
            content: attr(data-tooltip);
            padding: 0.5rem;
            background-color: black;
            color: white;
            width: max-content;
            }

            .profile-image:hover::before,
            .profile-image:hover::after {
            --scale: 1;
            }
    `
}

