import PropTypes from 'prop-types';

const Button=({label,backgroundColor='red',size='md',handleClick})=>{
    let scale=1;
    if(size==='sm'){scale=0.75}
    if(size==='lg'){scale=1.5}
 let style={
     backgroundColor,
     border:'none',
     padding: `${scale*0.5}rem ${scale}rem`
 }
return(<button onClick={handleClick} style={style}>{label}</button>)
}

Button.propTypes={
    backgroundColor:PropTypes.string,
    label:PropTypes.string,
    size:PropTypes.oneOf(['lg','md','sm']),
    handleClick:PropTypes.func
}
export default Button;