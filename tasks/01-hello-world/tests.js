import { expect } from 'chai'

describe('Tests', () => {
  it('render a single element', () => {
    expect(document.getElementById('app').children).to.have.length.of(1)
  })
  it('element is an H1', () => {
    expect(document.getElementById('app').children[0].tagName).to.equal('H1')
  })
  it('element contains text "Hello World"', () => {
    expect(document.getElementById('app').children[0].innerHTML).to.contain('Hello World')
  })
})
