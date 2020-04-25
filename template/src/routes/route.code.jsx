/**
 * 健康码申请和展示
 */
import React from 'react'
import {
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'
import loadable from '@loadable/component'

const LoadableCodeIndex = loadable(() => import(/* webpackChunkName: "codeIndex" */ '../modules/code/index/page.jsx'))

export default function RouteCode () {
    const match = useRouteMatch()

    return (
        <Switch>
            <Route path={`${match.url}/index`}>
                <LoadableCodeIndex />
            </Route>
        </Switch>
    )
}
