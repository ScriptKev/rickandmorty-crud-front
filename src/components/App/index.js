import { Route, Switch, Redirect } from 'wouter'
import Characters from 'pages/Characters'
import Episodes from 'pages/Episodes'
import Locations from 'pages/Locations'
import MainLayout from 'layouts/Main'
import CharacterDetail from 'pages/CharacterDetail'
import NotFound from 'pages/NotFound'
import { ModalProvider } from 'context/modalContext'

const App = () => {
  return (
    <ModalProvider>
      <MainLayout>
        <Switch>
          <Route path='/'> <Redirect to='/personajes' /> </Route>
          <Route path='/personajes' component={Characters} />
          <Route path='/personaje/:id' component={CharacterDetail} />
          <Route path='/lugares' component={Locations} />
          <Route path='/episodios' component={Episodes} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    </ModalProvider>
  )
}

export default App
