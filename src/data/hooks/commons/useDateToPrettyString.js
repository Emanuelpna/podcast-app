import { useMemo } from 'react';

export function useDateToPrettyString(date) {
  return useMemo(() => {
    const dateObj = new Date(date);

    if (isNaN(dateObj)) return '';

    return dateObj.toLocaleDateString('pt-br', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  }, [date]);
}
