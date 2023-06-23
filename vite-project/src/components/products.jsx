import Card from './card'
import '../App.css'

const productList =[{
  image:'./assets/Capture.PNG',
name:'Lorem add floor',
price:'$280.00',

},
{
  image:'./assets/Capture.PNG',
name:'Lorem add floor',
price:'$290.00',

},
{
  image:'./assets/Capture.PNG',
name:'Lorem get floor',
price:'$480.00',

},
{
  image:'./assets/Capture.PNG',
name:'Lorem set floor',
price:'$980.00',

},
{
  image:'./assets/Capture.PNG',
name:'Lorem git floor',
price:'$580.00',

},
{
  image:'./assets/Capture.PNG',
name:'Lorem floor floor',
price:'$780.00',

}
]


const ProductContainer=()=>{

return <div className='product-container'>

<div className="header">
    <p>Products</p>
    <div className='choose'>
    <label>Choose:</label>

<select>
  <option>Dress</option>
  <option>Pants</option>
  <option>Skirt</option>
  <option>Jeans</option>
</select>
    </div>
    <div className='filter'>
    <label>Filter:</label>

<select>
  <option>Dress</option>
  <option>Pants</option>
  <option>Skirt</option>
  <option>Jeans</option>
</select>
    </div>
</div>

<hr/>
<div className='card-container'>
{productList.map((item)=> <Card productObj={item} /> )}

</div>

</div>

}


export default ProductContainer