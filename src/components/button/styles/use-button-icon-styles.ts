import { CSSProperties } from 'react';
import { ButtonSize, ButtonVariant } from 'model';
import { appColors } from '../../../utils';

export const useButtonIconStyles = (
  variant: ButtonVariant,
  size: ButtonSize,
) => {
  const iconStyles: CSSProperties = {
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: size === 'lg' ? '12px' : size === 'md' ? '8px' : '4px',
    background:
      variant === 'primary'
        ? appColors.primary.nebulaBlack.nebulaBlack
        : variant === 'blue'
        ? `linear-gradient(314.47deg, ${appColors.primary.blue[400]} 13.8%, ${appColors.primary.blue[700]} 85.51%)`
        : variant === 'black'
        ? appColors.primary.nebulaBlack.black
        : appColors.primary.white[100],
    color:
      variant === 'primary'
        ? appColors.primary.copper[400]
        : variant === 'blue'
        ? appColors.primary.white[100]
        : variant === 'black'
        ? appColors.primary.white[100]
        : appColors.primary.nebulaBlack.black,
    border: 'none',
    boxShadow:
      variant === 'primary'
        ? 'inset -4px -4px 8px rgba(255, 255, 255, 0.02), inset 4px 4px 12px rgba(0, 0, 0, 0.32)'
        : 'none',
  };
  return iconStyles;
};
