import React from 'react'

const Home = (props) => {
    console.log("HOME__",props)
    return (
        <>
            <div>
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
                        <button onClick={() => {
                            props.addToCartHandler({
                                name: "Mobile",
                                price: 7777
                            })
                        }}>Add To Cart</button>

                        <button className="remove-cart-btn" onClick={() => {
                            props.removeToCartHandler()
                        }}>Remove To Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home