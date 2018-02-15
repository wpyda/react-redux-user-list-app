import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import UsersList from "./Components/UsersList"

const App = (props) => (
    <Router>
      <div>
        <Route path = '/' exact render = {() => (
            <UsersList
                usersData={props.usersData}
            />
        )}

        />
      </div>
    </Router>
)

const mapStateToProps = state => ({
    usersData: state.users.usersData
})

export default connect(
    mapStateToProps
)(App)
