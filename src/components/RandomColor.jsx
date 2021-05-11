import React from 'react'

export default function RandomColor({babyPicture,color}) {

    if(babyPicture){
        return (<img src='https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg' style={{height:'350px', width:'350px'}}/>)
    }
    else return (
        <div style={{height:'350px', width: '350px',        background:color,border:'1px solid black'}}>
        </div>
    )
}
        