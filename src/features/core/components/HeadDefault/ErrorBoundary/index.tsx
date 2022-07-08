import type { ReactNode } from 'react'
import { Component } from 'react'

import { GeneralErrorPage } from '~/features/ui/components/ErrorPages'

type Props = {
  fallback?: ReactNode
  children: ReactNode
  type?: string
}

type State = {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    const { type } = this.props

    console.error('Custom log: ', type, error)
  }
  render() {
    const { type, fallback, children } = this.props
    const { hasError } = this.state

    if (hasError) {
      if (type === 'root') {
        return <div>root error</div>
      }

      return fallback ?? <GeneralErrorPage />
    }

    return children
  }
}

export { ErrorBoundary }