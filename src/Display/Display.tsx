import React from "react";
import './display.css'
const Display = (props: any) => {
    const { buttonClick, lightThemed, width, height } = props;
    const theme = !lightThemed ? 'light' : 'dark'
    return(
        <div className={'display'} style={{width: width*0.8, height: height*0.8}}>
            <div className={'display-container'} style={lightThemed ? {backgroundColor: 'white', width: width*0.8, height: height*0.8} : {backgroundColor: '#2e2e2e', width: width*0.8, height: height*0.8} }>
                <div className={'display-inner-container'} style={lightThemed ? {backgroundColor: '#2e2e2e', width: width*0.45, height: height*0.65} : {backgroundColor:'white', width: width*0.45, height: height*0.65}}>
                    <div className='circle' style={lightThemed ? {backgroundColor: 'white'} : {backgroundColor: '#2e2e2e'} }></div>
                    <h4 style={lightThemed ? {color: 'white'} : {color: '#2e2e2e'}} className='h4'>{lightThemed ? 'I am Light Themed!' : 'I am Dark Themed!'}</h4>
                    <button style={lightThemed ? {backgroundColor: 'white', color: '#2e2e2e'} : {backgroundColor: '#2e2e2e', color: 'white'}} onClick={buttonClick} className='button'>{`Click Me to Change to ${theme} Theme`}</button>
                </div>
            </div>
        </div>
    );
}
export default Display;