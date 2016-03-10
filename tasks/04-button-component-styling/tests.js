import { expect } from 'chai'

let elements

describe('Tests', () => {

  beforeEach(() => {
    elements = document.getElementById('app').children[0].children
  })

  it('renders 5 buttons', () => {
    expect(elements).to.have.length.of(5)
    expect(elements[0].tagName)
      .to.equal(elements[1].tagName)
      .to.equal(elements[2].tagName)
      .to.equal(elements[3].tagName)
      .to.equal(elements[4].tagName)
      .to.equal('BUTTON')
  })
  it('every button has the class component-button', () => {
    expect(elements[0].className)
      .to.equal(elements[1].className)
      .to.equal(elements[2].className)
      .to.equal(elements[3].className)
      .to.equal(elements[4].className)
      .to.equal('component-button')
  })
  context('first button', () => {
    it('does not have class rounded', () => {
      expect(elements[0].className).to.not.contain('rounded')
    })
    it('says "Close"', () => {
      expect(elements[0].innerHTML).to.equal('Close')
    })
  })
  context('second button', () => {
    it('does not have class horrible', () => {
      expect(elements[1].className).to.not.contain('horrible')
    })
    it('says "Submit"', () => {
      expect(elements[1].innerHTML).to.equal('Submit')
    })
  })
  context('third button', () => {
    it('does not have class aaargh', () => {
      expect(elements[2].className).to.not.contain('aaargh')
    })
    it('says "What Is This?"', () => {
      expect(elements[2].innerHTML).to.equal('What Is This?')
    })
  })
  context('forth button', () => {
    it('does not have class checkout', () => {
      expect(elements[3].className).to.not.contain('checkout')
    })
    it('says "Checkout Now"', () => {
      expect(elements[3].innerHTML).to.equal('Checkout Now')
    })
  })
  context('fifth button', () => {
    it('does not have class order', () => {
      expect(elements[4].className).to.not.contain('order')
    })
    it('says "Order Now"', () => {
      expect(elements[4].innerHTML).to.contain('Order Now')
    })
  })
})
