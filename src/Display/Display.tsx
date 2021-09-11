import React from "react";
import './display.css'

//background styling for ease of use objects
const bgStyles = {
    light: {backgroundColor: 'white'},
    dark: {backgroundColor: '#2e2e2e'}
}
const {light, dark} = bgStyles;

const Display = (props: any) => {
    const { buttonClick, lightThemed, width, height } = props;
    const theme = lightThemed ? 'dark' : 'light'
    const widthStyles ={
        large: {width: width*0.8, height: height*0.85},
        small: {width: width*0.45, height: height*0.65}
    }
    const {large,small} = widthStyles
    // initiating styling based on falsity of lighThemed for situations where the line is too long
    const h4Text = lightThemed ? 'I am Light Themed!' : 'I am Dark Themed!';
    const h4Style = lightThemed ? {color: 'white'} : {color: '#2e2e2e'};
    const buttonStyle = lightThemed ? {...light, color: '#2e2e2e'} : {...dark, color: 'white'};
    const buttonText = `Click Me to Change to ${theme} Theme`;
    return(
        <div className={'display'} style={{...large}}>
            <div className={'display-container'} style={lightThemed ? {...light, ...large} : {...dark, ...large} }>
                <div className={'display-inner-container'} style={lightThemed ? {...dark, ...small} : {...light, ...small}}>
                    <div className={lightThemed ? 'circle' : 'circle-dark'} style={lightThemed ? {...light} : {...dark} }></div>
                    <h4 style={h4Style} className='h4'>{h4Text}</h4>
                    <button style={buttonStyle} onClick={buttonClick} className='button'>{buttonText}</button>
                </div>
            </div>
        </div>
    );
}
export default Display;