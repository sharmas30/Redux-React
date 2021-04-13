import React from 'react'

const Home = () => {
    return (
        <>
            <div>
                <div className="add_to_cart">
                    <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG15.png" alt=""/>
                </div>
                <h2>Home Component</h2>
                <div className="cart-wrapper">
                    <div className="img-wrapper item">
                        <img src="https://dealntechcdn.b-cdn.net/wp-content/uploads/2020/04/redmi-k30i-5g.jpg" alt=""/>
                    </div>
                    <div className="text-wrapper item">
                        <span>I-Phone</span>
                        <span>Price: Rs.77,000</span>
                    </div>
                    <div className="button-wrapper item">
                        <button>Add To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home