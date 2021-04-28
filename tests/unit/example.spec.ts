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

    const { emitted } = render(HelloWorld, {
      props: { msg }
    })

    // expect(screen.getByText(msg)).toBeInTheDocument()
    // screen.getByText(msg)

    // fireEvent.click(screen.getByRole('show-text'))

    // waitFor(() => {
    //   expect(screen.queryByText(msg)).toBeInTheDocument()
    // })
    // expect(await screen.findByText(msg)).toBeInTheDocument()

    const $button = screen.getByRole('button', { name: 'Submit' })
    expect($button).toBeDisabled()

    await fireEvent.update(screen.getByLabelText('Name'), 'Andrei')

    expect($button).not.toBeDisabled()

    fireEvent.click($button)

    // expect(emitted().submit[0][0]).toEqual({name: 'Andrei'})
    
  })
})
