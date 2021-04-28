import {
  findByText,
  render,
  screen,
  fireEvent,
  waitFor
} from '@testing-library/vue'
import '@testing-library/jest-dom'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', async () => {
    const msg = 'new message'

    render(HelloWorld, {
      props: { msg }
    })

    // expect(screen.getByText(msg)).toBeInTheDocument()
    // screen.getByText(msg)

    fireEvent.click(screen.getByRole('show-text'))
    
    // waitFor(() => {
    //   expect(screen.queryByText(msg)).toBeInTheDocument()
    // })

    expect(await screen.findByText(msg)).toBeInTheDocument()
  })
})
