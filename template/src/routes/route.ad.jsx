/**
 * 测温
 */
import React from 'react'
import {
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'
import loadable from '@loadable/component'

const LoadableAdIndex = loadable(() => import(/* webpackChunkName: "adIndex" */ '../modules/ad/index/page.jsx'))
const LoadableAdShow = loadable(() => import(/* webpackChunkName: "adShow" */ '../modules/ad/show/page.jsx'))

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
