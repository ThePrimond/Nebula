import {
  ButtonHTMLAttributes,
  CSSProperties,
  FC,
  ReactElement,
  Ref,
  forwardRef,
} from 'react';
import { ButtonSize, ButtonVariant } from 'model';
import {
  useButtonContentStyles,
  useButtonIconStyles,
  useButtonStyles,
} from './styles';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactElement;
  iconContainerStyles?: CSSProperties;
  children: string;
  customButtonsProps: ButtonHTMLAttributes<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = forwardRef(
  (
    {
      variant = 'primary',
      size = 'lg',
      icon,
      iconContainerStyles,
      children,
      customButtonsProps,
      ...rest
    },
    ref: Ref<HTMLButtonElement>,
  ) => {
    const styles = useButtonStyles(
      variant,
      size,
      icon !== undefined ? true : false,
    );
    const defaultIconContainerStyles = useButtonIconStyles(variant, size);
    const buttonContentStyles = useButtonContentStyles(size);
    return (
      <button ref={ref} style={styles} {...customButtonsProps} {...rest}>
        <div style={buttonContentStyles}>
          {icon && (
            <div style={iconContainerStyles ?? defaultIconContainerStyles}>
              {icon}
            </div>
          )}
          {children}
        </div>
      </button>
    );
  },
);

export default Button;
