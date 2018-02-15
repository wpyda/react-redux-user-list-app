import React from 'react'
import User from './User'

const UsersList = props => (
    <div>
        {
            props.usersData
            &&
            props.usersData.map(user => (
                <User user={user}
                      key={user.id}
            />))
        }
    </div>
)

export default UsersList