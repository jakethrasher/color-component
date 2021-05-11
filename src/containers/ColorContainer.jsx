import React, { Component } from 'react'
import RandomColor from '../components/RandomColor'
import getColor from '../getColors'

export default class ColorContainer extends Component {
    state = {
        bgColor:'#DAF7A6',
        babyPicture:false,
    }
    componentDidMount(){
        setInterval(()=>{
            const color = getColor();
            
            if(color === this.state.bgColor){
                console.log(color, 'same color')
                this.setState({babyPicture:true})
            }else{
                this.setState({
                    bgColor:color,
                    babyPicture:false,
                })
                console.log(color)
            }
        },500)
    }
    render() {
        return (
            <div>
            {this.state.babyPicture?
            <img src='https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg' style={{height:'350px', width:'350px'}}/>
            :
            <div>
                <RandomColor color={this.state.bgColor}/>
            </div>}
            </div>
        )
    }
}   
    