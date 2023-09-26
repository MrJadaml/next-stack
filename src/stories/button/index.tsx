import React from 'react';
import cn from 'classnames'
import css from './button.module.scss'

export enum types {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  DISABLED = 'disabled',
}

interface ButtonProps {
  className?: string
  disabled?: boolean
  type?: types
  backgroundColor?: string
  large?: boolean
  label: string
  onClick: () => void
}

export const Button = ({
  backgroundColor,
  className,
  disabled = false,
  type = types.PRIMARY,
  label,
  large = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(css.button, {
        [css.primary]: type === 'primary',
        [css.secondary]: type === 'secondary',
        [css.tertiary]: type === 'tertiary',
        [css.disabled]: type === 'disabled',
        [css.large]: large, 
      })}
      disabled={type === 'disabled'}
      {...props}
    >
      {label}
    </button>
  )
}
