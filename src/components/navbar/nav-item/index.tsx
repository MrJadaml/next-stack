import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import css from './NavItem.module.scss'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface NavItemProps {
  active: boolean
  expanded: boolean
  icon: IconDefinition
  key: string
  label: string
  onClick: () => void
}

export const NavItem: React.FC<NavItemProps> = ({
  active,
  expanded,
  icon,
  label,
  onClick,
}) => {
  const ariaLabel = expanded ? `${label} - Expanded` : label

  return (
    <button
      className={cn(css.navItem, {
        [css.active]: active,
        [css.expanded]: expanded,
      })}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <div
        className={css.iconContainer}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={icon}
          className="icon"
          aria-hidden="true"
        />
      </div>
      {expanded && <div className={css.label}>{label}</div>}
      {!expanded && <span className={css.tooltip}>{label}</span>}
    </button>
  )
}

