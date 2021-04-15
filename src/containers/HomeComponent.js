import { connect } from 'react-redux'
import Home from '../components/Home'
import { addToCart, removeToCart } from '../services/Actions/action'

const mapStateToProps = state => ({
    data: state.cartItems
})

const mapDispactToProps = dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: () => dispatch(removeToCart())
})

export default connect(mapStateToProps, mapDispactToProps)(Home);