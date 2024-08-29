import {type Timer as TimerProps } from '../context/timers-context.tsx';
import Container from './UI/Container.tsx';

export default function Timer(props:TimerProps) {
  
  return (
    <Container as="article">
      <h2>{props.name}</h2>
      <p>{props.duration}</p>
    </Container>
  );
}
