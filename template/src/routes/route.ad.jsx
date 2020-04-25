/**
 * 测温
 */
import React from 'react'
import {
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'
// import loadable from '@loadable/component'

// const LoadableAdIndex = loadable(() => import(/* webpackChunkName: "adIndex" */ '../modules/ad/index/page.jsx'))
// const LoadableAdShow = loadable(() => import(/* webpackChunkName: "adShow" */ '../modules/ad/show/page.jsx'))

const LoadableAdIndex = require(/* webpackChunkName: "adIndex" */ '../modules/ad/index/page.jsx').default
const LoadableAdShow = require(/* webpackChunkName: "adShow" */ '../modules/ad/show/page.jsx').default

export default function RouteTemperature () {
    const match = useRouteMatch()

    return (
        <Switch>
            <Route path={`${match.url}/index`}>
                <LoadableAdIndex />
            </Route>
            <Route path={`${match.url}/show`}>
                <LoadableAdShow />
            </Route>
        </Switch>
    )
}
