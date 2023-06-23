import '../App.css'
import OrderCard  from './orderCard'

const orderCardProduct = [
    {
      image:'./assets/Capture.PNG',
    name:'Lorem add floor',
    price:'$280.00',
    
    },
    {
      image:'./assets/Capture.PNG',
    name:'Lorem add word',
    price:'$290.00',
    
    },
    {
      image:'./assets/Capture.PNG',
    name:'Lorem get floor',
    price:'$480.00',
    
    }
  ]

const Order=(props)=>{
return <div>
    <header>
        Vanilla Shop React
    </header>
    <hr/>
    <div>
    {orderCardProduct.map((item)=> <Order productObj={item} /> )}  
    </div>
    <div>
        <p>Total Price: $1586.00</p>
        <button>Proceed</button>
    </div>
    <div>
        <div>
        <label>Email:</label>
        <input type="email"/>
        </div>
        <div>
        <label>Password:</label>
        <input type="password"/>
        </div>
        <div>
        <label>Address:</label>
        <input type="text"/>
        </div>
        
        <button>Checkout</button>
    </div>
</div>
}

export default Order