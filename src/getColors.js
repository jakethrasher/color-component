const getColor = () =>{
    const colorsArray = ['#DAF7A6','#FFC300','#FF5733','#C70039','#EFADE1']
    return colorsArray[Math.floor(Math.random()*colorsArray.length)]
}
module.exports= getColor;
    