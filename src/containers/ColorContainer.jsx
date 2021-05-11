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
                this.setState({babyPicture:true})
            }else{
                this.setState({
                    bgColor:color,
                    babyPicture:false,
                })
            }
        },500)
    }
    render() {
        return (
            <div>
                <RandomColor babyPicture={this.state.babyPicture}color={this.state.bgColor}/>
            </div>
        )
    }
}   
            