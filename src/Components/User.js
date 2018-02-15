import React from 'react'

const styles = {
    border: '1px solid black',
    margin: 10,
    padding: 10
}

const User = props => (
    <div style={styles}>
        {props.user.name}
    </div>
)

export default User