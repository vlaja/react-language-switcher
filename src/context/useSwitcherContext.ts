import { useContext } from 'react';

import { SwitcherContext } from './SwitcherContext';

export function useSwitcherContext() {
  return useContext(SwitcherContext);
}
