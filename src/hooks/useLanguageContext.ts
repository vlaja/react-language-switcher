import { useContext } from 'react';

import { LanguageContext } from 'components';

export function useLanguageContext() {
  return useContext(LanguageContext);
}
