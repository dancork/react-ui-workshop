import { expect } from 'chai'

let rootElement
let input
let buttons

describe('Tests', () => {

  beforeEach(() => {
    rootElement = document.getElementById('app').children[0]
    input = rootElement.getElementsByTagName('INPUT')[0]
    buttons = rootElement.getElementsByTagName('BUTTON')
  })

  it('should have initial value of 0', () => {
    expect(input.value).to.equal('0')
  })

  it('should increase by 1 when + is clicked', () => {
    buttons[1] && buttons[1].click()
    expect(input.value).to.equal('1')
  })

  it('should decrease by 1 when 0 is clicked', () => {
    buttons[0] && buttons[0].click()
    expect(input.value).to.equal('0')
  })

})
