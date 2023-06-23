import '../App.css'

const OrderCard=()=>{
    return <div>
          <img src={props.productObj.image} alt="product image" />
        <div>
            <p>{props.productObj.name}</p>
            <div>
                <p>{props.productObj.name}</p>
                <p>x 2</p>
                <button>Remove</button>
            </div>
        </div>
    </div>
}

export default OrderCard