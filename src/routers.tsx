import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';

import Home from '@/pages/Home';
import StarWars from '@/pages/StarWars';
import Histogram from '@/pages/Histogram';
import Todos from '@/pages/Todos';
import AnimalForm from '@/pages/AnimalForm';
import SocialCard from '@/pages/SocialCard';
import WebsocketEcho from '@/pages/WebsocketEcho';
import Test from '@/pages/Test';
import NotFound from '@/pages/NotFound';

const Routers = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/starwars" component={StarWars} />
    <Route exact path="/histogram" component={Histogram} />
    <Route exact path="/todos" component={Todos} />
    <Route exact path="/animal-form" component={AnimalForm} />
    <Route exact path="/social-card" component={SocialCard} />

    <Route exact path="/websocket-echo" component={WebsocketEcho} />
    <Route exact path="/test" component={Test} />

    <Route path="*" component={NotFound} />
  </Switch>
);







export default function Main() {
  return (
    <div id="page">
      <main className="container">
        <ErrorBoundary>
          <Routers />
        </ErrorBoundary>
      </main>
    </div>
  );
}
