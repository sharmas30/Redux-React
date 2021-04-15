import React from 'react'

const Header = (props) => {
    console.log("HEADERR",props.data)
    return (
        <>
            <div>
                <div className="add_to_cart">
                    <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG15.png" alt=""/>
                </div>                
            </div>
        </>
    )
}

export default Header