import React from 'react'
import { connect } from 'react-redux'

const Temp = (props) => {
    console.log("TEMP",props.data)
    return (
        <>
            <div>
               Hello shubh___TEMP
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    data:state.d
})

export default connect(mapStateToProps)(Temp)
