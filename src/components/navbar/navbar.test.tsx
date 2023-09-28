import React from 'react'
import { render, fireEvent } from '../../../test/test-utils'
import { Navbar } from '.'

describe('Navbar', () => {
  it('should render navigation', () => {
    const { getByRole } = render(<Navbar />)
    const nav = getByRole('navigation')
    expect(nav).toBeInTheDocument()
  })

  it('should toggle expanded state on button click', () => {
    const { getByRole } = render(<Navbar />)
    const toggleButton = getByRole('button', { name: 'toggle navigation' })

    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('should render navigation items', () => {
    const { getAllByRole, getByRole,  getByText } = render(<Navbar />)
    const navItems = getAllByRole('listitem')
    const toggleButton = getByRole('button', { name: 'toggle navigation' })

    const labels = [
      'Home',
      'Profile',
      'Messages',
      'Settings',
    ]

    labels.forEach(label => {
      const navItemElement = getByText(label)
      expect(navItemElement).toBeInTheDocument()
    })

    fireEvent.click(toggleButton)

    labels.forEach(label => {
      const navItemElement = getByText(label)
      expect(navItemElement).toBeInTheDocument()
    })

    expect(navItems).toHaveLength(4)
  })

  describe('Expanded', () => {
    it('should render header', () => {
      const { getByText, getByTitle } = render(<Navbar />)
      const title = getByText('Company Name')
      const icon = getByTitle('menu icon')

      expect(title).toBeInTheDocument()
      expect(icon).toBeInTheDocument()
    })

    it('should render sign out', () => {
      const { getByText, getByTitle } = render(<Navbar />)
      const userName = getByText('Bob')

      const logoutElement = getByText('Sign Out')
      const icon = getByTitle('logout icon')

      expect(userName).toBeInTheDocument()
      expect(logoutElement).toBeInTheDocument()
      expect(icon).toBeInTheDocument()
    })
  })

  describe('Collapsed', () => {
    it('should render header', () => {
      const {
        getByRole,
        getByTitle,
        queryByText,
      } = render(<Navbar />)

      const toggleButton = getByRole('button', { name: 'toggle navigation' })
      fireEvent.click(toggleButton)

      const title = queryByText('Company Name')
      const icon = getByTitle('menu icon')

      expect(title).toBeNull()
      expect(icon).toBeInTheDocument()
    })

    it('should render user name and sign out text when signed in', () => {
      const {
        getByRole,
        getByTitle,
        queryByText,
      } = render(<Navbar />)

      const toggleButton = getByRole('button', { name: 'toggle navigation' })
      fireEvent.click(toggleButton)

      const userName = queryByText('Bob')
      const signOutText = queryByText('Sign Out')
      const icon = getByTitle('logout icon')

      expect(userName).toBeNull()
      expect(signOutText).toBeNull()
      expect(icon).toBeInTheDocument()
    })
  })
})
