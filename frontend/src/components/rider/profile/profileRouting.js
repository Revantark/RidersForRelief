import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import RiderProfile from './RiderProfile'
import EditRiderProfile from './editRiderProfile'

function profileRouting() {
    return (
        <BrowserRouter basename="/home/rider/my_profile">
            <Switch>
                <Route exact path="/">
                    <RiderProfile/>
                </Route>

                <Route path="/edit_profile" >
                    <EditRiderProfile/>                
                </Route>                
            </Switch>
        </BrowserRouter>
    )
}

export default profileRouting
