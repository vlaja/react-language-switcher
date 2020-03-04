import { useSwitcherContext } from '../context/useSwitcherContext';

export function useSwitcherSelector(
  valueSelector: string,
  listSelector: string,
  handlerSelector: string
): {
  currentValue: string;
  listValues: string[];
  onClick: (...props: any[]) => void;
} {
  const context = useSwitcherContext();

  const currentValue = context[valueSelector] || '';
  const listValues = context[listSelector] || [];
  const handlerValue = context[handlerSelector] || (() => undefined);

  return { currentValue, listValues, onClick: handlerValue };
}
