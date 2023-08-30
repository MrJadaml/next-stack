import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import css from './navItem.module.scss'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface NavItemProps {
  active: boolean
  expanded: boolean
  icon: IconDefinition
  key: string
  label: string
}

export const NavItem: React.FC<NavItemProps> = ({
  active,
  expanded,
  icon,
  label,
}) => {
  const ariaLabel = expanded ? `${label} - Expanded` : label

  return (
    <div
      className={cn(css.navItem, {
        [css.active]: active,
        [css.expanded]: expanded,
      })}
      aria-label={ariaLabel}
    >
      <div className={css.iconContainer}>
        <FontAwesomeIcon
          icon={icon}
          className="icon"
          aria-hidden="true"
        />
      </div>

      {expanded && <div className={css.label}>{label}</div>}
      {!expanded && <span className={css.tooltip}>{label}</span>}
    </div>
  )
}

