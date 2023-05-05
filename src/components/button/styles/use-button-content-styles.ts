import { CSSProperties } from 'react';
import { ButtonSize } from 'model';

export const useButtonContentStyles = (size: ButtonSize) => {
  const contentStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: size === 'lg' ? '8px' : size === 'md' ? '6px' : '2px',
  };
  return contentStyles;
};
