import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import Avatar from '../components/Avatar'

describe('Avatar', () => {
  it('should render an <img/> ', () => {
    const url = 'https://cataas.com/cat/says/hello%20world!'
    const alt = '@github-handle'
    render(<Avatar url={url} alt={alt} />)
    const img = screen.getByAltText('@github-handle')
    expect(img).toBeInTheDocument()
    expect(img.tagName).toBe('IMG')
  })
  it('should use the url and alt passed in', () => {
    const url = 'https://cataas.com/cat/says/hello%20world!'
    const alt = 'a cat'
    render(<Avatar url={url} alt={alt} />)
    const img = screen.getByAltText(alt)

    expect(img).toHaveAttribute('src', url)
  })
})
