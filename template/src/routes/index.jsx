import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import RouteCode from './route.code'
import RouteAd from './route.ad'

export default function AppRouter () {
    return (
        <Router>
            <Switch>
                <Route path={'/code'}>
                    <RouteCode />
                </Route>
                <Route path={'/ad'}>
                    <RouteAd />
                </Route>
            </Switch>
        </Router>
    )
}
