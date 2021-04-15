import Header from '../components/Header'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    data: state.cartItems
})

const mapDispactToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispactToProps)(Header);