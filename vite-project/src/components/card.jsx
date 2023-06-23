import '../App.css'
// import product from '../assets/Capture.PNG'

const Card=(props)=>{
    console.log(props);
    return <div className='card-product'>
<img className='image' src={props.productObj.image} alt="product image" />
<p>{props.productObj.name}</p>
<div className='details'>
    <p>{props.productObj.price}</p>
    <button className='add-to-card'>Add To Card</button>
</div>
    </div>

}

export default Card