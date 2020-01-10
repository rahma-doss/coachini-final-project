import React from 'react'
import { connect } from 'react-redux'
import {Alert} from 'react-bootstrap'

const Alerts = props => {
    return (
        props.alerts.length > 0 && props.alerts.map(alert => (
            < Alert key={alert.id} variant={alert.type} className='mt-4' >
                {alert.msg}
            </Alert >
        ))
    )
}

const mapStateToProps = state => {
    return {
        alerts: state.AlertReducer
    }
}

export default connect(mapStateToProps)(Alerts)