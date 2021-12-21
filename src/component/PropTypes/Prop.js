import React from 'react'
import PT from 'prop-types';

function Prop(props) {
    return (
        <div>
            <h3>Hello {props.name}</h3>
            <h4>Your id is {props.id}</h4>
        </div>
    )
}

Prop.propTypes = {
    name: PT.string,
    id: PT.number.isRequired
}

Prop.defaultProps = {
    name: 'Guest'
}

export default Prop
