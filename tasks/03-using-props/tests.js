import { expect } from 'chai'

let rootElement

describe('Tests', () => {

  beforeEach(() => {
    rootElement = document.getElementById('app').children[0]
  })

  context('heading one', () => {
    it('renders a single h1 element', () => {
      expect(rootElement.getElementsByTagName('H1')).to.have.length.of(1)
    })
    it('contains the name prop', () => {
      expect(rootElement.getElementsByTagName('H1')[0].innerHTML).to.contain('John')
    })
  })

  context('heading two', () => {
    it('renders a single h2 element', () => {
      expect(rootElement.getElementsByTagName('H2')).to.have.length.of(1)
    })
    it('contains the age prop', () => {
      expect(rootElement.getElementsByTagName('H2')[0].innerHTML).to.contain('45')
    })
  })

  context('unordered list', () => {
    it('renders a ul tag', () => {
      expect(rootElement.getElementsByTagName('UL')).to.have.length.of(1)
    })
    it('contains the three interests from props', () => {
      const ul = rootElement.getElementsByTagName('UL')[0]
      expect(ul.getElementsByTagName('LI')[0].innerHTML).to.contain('cycling')
      expect(ul.getElementsByTagName('LI')[1].innerHTML).to.contain('food')
      expect(ul.getElementsByTagName('LI')[2].innerHTML).to.contain('web')
    })
  })

})
