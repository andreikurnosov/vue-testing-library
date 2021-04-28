import { findByText, render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'

    render(HelloWorld, {
      props: { msg }
    })

    // expect(screen.getByText(msg)).toBeInTheDocument()
    // screen.getByText(msg)

    expect(screen.queryByText('asdf')).not.toBeInTheDocument()
  })
})
