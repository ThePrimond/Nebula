import { CSSProperties } from 'react';
import { ButtonSize, ButtonVariant } from 'model';
import { appColors } from '../../../utils';

export const useButtonStyles = (
  variant: ButtonVariant,
  size: ButtonSize,
  iconPresent = false,
) => {
  const buttonStyles: CSSProperties = {
    borderRadius: '100px',
    cursor: 'pointer',
    padding: !iconPresent
      ? size === 'sm'
        ? '8px 24px'
        : size === 'md'
        ? '12px 24px'
        : '16px 40px'
      : size === 'sm'
      ? '2px 8px'
      : size === 'md'
      ? '4px 18px'
      : '6px 24px',
    background:
      variant === 'primary'
        ? appColors.primary.nebulaBlack.gradient
        : variant === 'blue'
        ? appColors.primary.blue.gradient
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
      variant === 'primary' || variant === 'blue'
        ? '-6px -6px 12px rgba(255, 255, 255, 0.04), 6px 6px 12px rgba(0, 0, 0, 0.16)'
        : 'none',
  };
  if (iconPresent && size !== 'sm') {
    buttonStyles.paddingLeft = size === 'lg' ? '8px' : '6px';
  }
  return buttonStyles;
};
