import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Avatar from '../components/Avatar'
import Wrapper from '../components/Wrapper'
describe('Wrapper', () => {
  it('should render a caption and an image', () => {
    const url = 'https://cataas.com/cat/says/hello%20world!'
    const alt = 'a cat'
    render(
      <Wrapper caption={alt}>
        <Avatar url={url} alt={alt} />
      </Wrapper>,
    )
    const img = screen.getByAltText(alt)
    const caption = screen.getByText(alt)

    expect(img).toBeInTheDocument()
    expect(caption).toBeInTheDocument()
  })
})
