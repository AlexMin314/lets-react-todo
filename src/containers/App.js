import React from 'react'
import { Route, Switch } from 'react-router-dom'
// components
import { SEO, AppTemplate } from 'components'
import { Todo, NoMatch } from 'containers'

const App = props => {
  return (
    <AppTemplate>
      {/* meta tag configure */}
      <SEO
        title={ 'Toy TODO project' }
        link={ [{
          rel: 'canonical',
          href: window.location.href }] }
      />
      {/*routes*/}
      <Switch>
        <Route exact path='/' component={ Todo }/>
        <Route exact path='/todo/:id' component={ Todo }/>
        <Route exact path='/filter/:filter' component={ Todo }/>
        <Route path='' component={ NoMatch }/>
      </Switch>
    </AppTemplate>
  )
}

export default App
