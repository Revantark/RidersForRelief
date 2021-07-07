import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import RequesterProfile from './RequesterProfile'
import EditRequesterProfile from './editRequesterProfile'

function profileRouting() {
    return (
        <BrowserRouter basename="/home/requester/my_profile">
            <Switch>
                <Route exact path="/">
                    <RequesterProfile/>
                </Route>

                <Route path="/edit_profile">
                    <EditRequesterProfile/>                
                </Route>                
            </Switch>
        </BrowserRouter>
    )
}

export default profileRouting
