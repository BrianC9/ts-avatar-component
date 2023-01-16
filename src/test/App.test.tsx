import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import Avatar from '../components/Avatar'

describe('App', () => {
  it('should render <Avatar/>', () => {
    const url = 'https://cataas.com/cat/says/hello%20world!'
    const alt = '@github-handle'
    render(<Avatar url={url} alt={alt} />)
    const avatar = screen.getByAltText('@github-handle')
    expect(avatar).toBeInTheDocument()
  })
})
