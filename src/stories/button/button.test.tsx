import { fireEvent, render, screen } from '@testing-library/react'
import { composeStory } from '@storybook/react'
import Meta, { Primary, Disabled } from './button.stories'

const PrimaryButton = composeStory(Primary, Meta)
const DisabledButton = composeStory(Disabled, Meta)

it('should render the button in the default state', () => {
  const onClick = jest.fn()
  render(<PrimaryButton {...PrimaryButton.args} onClick={onClick} />)

  const button = screen.getByRole('button', {
    name: 'Primary Button',
  })

  fireEvent.click(button)

  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('Primary Button')
  expect(onClick).toHaveBeenCalled()
})

it('should not be clickable when disabled', () => {
  const onClick = jest.fn()
  render(<DisabledButton {...DisabledButton.args} onClick={onClick} />)
  const button = screen.getByRole('button')

  fireEvent.click(button)

  expect(onClick).not.toHaveBeenCalled()
})

