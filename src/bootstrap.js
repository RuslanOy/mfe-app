import { initializeRemotes } from './remotes';

initializeRemotes()
  .then(() => import('./index'))
  .catch((err) => console.error('Remote loading failed:', err));
