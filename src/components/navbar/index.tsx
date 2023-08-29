'use client'

import React, { useState } from 'react'
import cn from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faCog,
  faEnvelope,
  faHome,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import css from './Navbar.module.scss'
import { NavItem } from './nav-item'

const sampleNavItems = [
  { icon: faHome, label: 'Home' },
  { icon: faUser, label: 'Profile' },
  { icon: faEnvelope, label: 'Messages' },
  { icon: faCog, label: 'Settings' },
]

export const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [expanded, setExpanded] = useState(true)

  const handleNavItemClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  const handleToggleExpanded = () => {
    setExpanded(!expanded);
  }

  return (
    <nav
      className={cn(css.sidebar, {
        [css.expanded]: expanded,
      })}
    >
      <header
        className={css.header}
        onClick={handleToggleExpanded}
      >
        {expanded && <p>Company Name</p>}
        <div className={css.iconContainer}>
          <FontAwesomeIcon icon={faBars} className="icon" />
        </div>
      </header>

      <div className={css.navlist}>
        {sampleNavItems.map(({ icon, label}, idx) => 
          <NavItem
            key={label}
            icon={icon}
            label={label}
            active={idx === activeIndex}
            expanded={expanded}
            onClick={() => handleNavItemClick(idx)}
          />
        )}
      </div>

      <footer className={css.footer}>
        <div className={css.iconContainer}>
          <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
        </div>
        {expanded && <p>Log Out</p>}
      </footer>
    </nav>
  )
}
