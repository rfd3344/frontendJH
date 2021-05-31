import React from 'react';
import { NavLink } from 'react-router-dom';
import { styled } from '@material-ui/core';

const SLink = styled(NavLink)({
  display: 'block',
});

export default function Home() {
  return (
    <section>
      <SLink to="/starwars">Starwars</SLink>
      <SLink to="/social-card">Social Card</SLink>
      <SLink to="/histogram">Histogram</SLink>
      <SLink to="/todos">todos</SLink>
      <SLink to="/animal-form">AnimalForm</SLink>
      <SLink to="/websocket-echo">Websocket Echo</SLink>
      <SLink to="/test">test</SLink>
    </section>
  );
}
