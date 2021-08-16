import React from 'react'
import  styled  from 'styled-components';
// import './card.css';

const Card = (props) => {
    console.log(props)
    const {borderRadius=false, size='lg', name, profile, workedAt} = props 
    return (
        <StyledComponents.MainWrapper>
            <div className="profile-image">
                <div className="skill-image"/>
                <span className="tooltiptext">
                    <p>{name}</p>
                    <p>{profile}</p>
                    <p>Previously @{workedAt}</p>
            </span>
            </div>
            
        </StyledComponents.MainWrapper>
    )
}

const StyledComponents = {
    MainWrapper: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: url("https://images.unsplash.com/photo-1626293051573-76141ac83bd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        .profile-image {
            background-image: url("https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png");
            background-position: center;
            background-repeat: no-repeat;
            background-size: contain;
            flex-direction: column;
            height: 100px;
            width: 100px;
            display: flex;
            justify-content: flex-end;
            align-items: flex-end;
            border-bottom-left-radius: 25px;
            }

            .skill-image {
                background-image: url("https://miro.medium.com/max/720/1*LjR0UrFB2a__5h1DWqzstA.png");
                height: 30px;
                width: 30px;
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
            }

            .profile-image .tooltiptext {
                visibility: hidden;
                height: 100px;
                width: 160px;
                background-color: black;
                color: #fff;
                text-align: center;
                border-radius: 6px;
                padding: 5px 0;
                position: absolute;
                margin-bottom: -10%;
            }

            .profile-image .tooltiptext::after {
            content: "";
            position: absolute;
            bottom: 100%;
            left: 50%;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent black transparent;
            }

            .profile-image:hover .tooltiptext {
            visibility: visible;
            }
    `
}

export default Card