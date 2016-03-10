import { expect } from 'chai'

describe('Tests', () => {
  let buttons
  beforeEach(() => {
    buttons = document.getElementsByClassName('component-button')
  })
  it('renders 4 button components with class component-button', () => {
    expect(buttons.length).to.equal(4)
  })
  it('the first three button components are button tags', () => {
    expect(buttons[0].tagName).to.equal('BUTTON')
    expect(buttons[1].tagName).to.equal('BUTTON')
    expect(buttons[2].tagName).to.equal('BUTTON')
  })
  it('the last button component is an anchor tag with an href to #back', () => {
    expect(buttons[3].tagName).to.equal('A')
    expect(buttons[3].getAttribute('href')).to.equal('#back')
  })
})
