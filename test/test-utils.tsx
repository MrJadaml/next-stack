import React, { ReactNode, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { SessionProvider } from 'next-auth/react'

type AllTheProvidersProps = {
  children: ReactNode
}

export const mockSession = {
  user: {
    name: 'Bob',
    email: 'bob@email.com',
    image: '',
  },
  expires: '123213139',
}

const AllTheProviders: React.FC<AllTheProvidersProps> = ({ children }) => {
  return (
    <SessionProvider session={mockSession}>
      {children}
    </SessionProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render}
