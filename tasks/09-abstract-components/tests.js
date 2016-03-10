import { expect } from 'chai'

let rootElement
let wrapper
let inputs

describe('Tests', () => {

  beforeEach(() => {
    rootElement = document.getElementById('app').children[0]
  })

  context('brand a', () => {

    beforeEach(() => {
      wrapper = rootElement.getElementsByClassName('brand-a-input')[0]
      if (wrapper) inputs = wrapper.getElementsByTagName('INPUT')
    })

    it('contains wrapper with class brand-a-input', () => {
      expect(wrapper).to.be.ok
    })

    it('contains 1 input', () => {
      expect(inputs).to.have.length.of(1)
    })

    it('shows error when value is not an integer', () => {
      inputs[0].focus()
      inputs[0].value = 'foo'
      inputs[0].blur()
      expect(inputs[0].parentNode.getElementsByClassName('error')).to.have.length.of(1)
    })

    it('does not show an error when value is an integer', () => {
      inputs[0].focus()
      inputs[0].value = '123'
      inputs[0].blur()
      expect(inputs[0].parentNode.getElementsByClassName('error')).to.have.length.of(0)
    })

    after(() => {
      if (inputs && inputs[0]) inputs[0].value = ''
    })

  })

  context('brand b', () => {

    beforeEach(() => {
      wrapper = rootElement.getElementsByClassName('brand-b-input')[0]
      if (wrapper) inputs = wrapper.getElementsByTagName('INPUT')
    })

    it('contains wrapper with class brand-b-input', () => {
      expect(wrapper).to.be.ok
    })

    it('contains 1 input', () => {
      expect(inputs).to.have.length.of(1)
    })

    it('shows error when value is not an integer', () => {
      inputs[0].focus()
      inputs[0].value = 'foo'
      inputs[0].blur()
      expect(inputs[0].parentNode.getElementsByClassName('error')).to.have.length.of(1)
    })

    it('does not show an error when value is an integer', () => {
      inputs[0].focus()
      inputs[0].value = '123'
      inputs[0].blur()
      expect(inputs[0].parentNode.getElementsByClassName('error')).to.have.length.of(0)
    })

    after(() => {
      if (inputs && inputs[0]) inputs[0].value = ''
    })

  })

})
