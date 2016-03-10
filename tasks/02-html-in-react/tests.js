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
    it('contains some text', () => {
      expect(rootElement.getElementsByTagName('H1')[0].innerHTML).to.not.be.empty
    })
  })

  context('paragraphs', () => {
    it('renders at least one p element', () => {
      expect(rootElement.getElementsByTagName('P')).to.have.length.of.at.least(1)
    })
    it('contain some text', () => {
      const paragraphs = rootElement.getElementsByTagName('P')
      for(let i = 0; i < paragraphs.length; i++) {
        expect(paragraphs[i].innerHTML).to.not.be.empty
      }
    })
  })

  context('heading two', () => {
    it('renders a single h2 element', () => {
      expect(rootElement.getElementsByTagName('H2')).to.have.length.of(1)
    })
    it('contains some text', () => {
      expect(rootElement.getElementsByTagName('H2')[0].innerHTML).to.not.be.empty
    })
  })

  context('unordered list', () => {
    it('renders a ul tag', () => {
      expect(rootElement.getElementsByTagName('UL')).to.have.length.of(1)
    })
    it('contains three li tags', () => {
      const ul = rootElement.getElementsByTagName('UL')[0]
      expect(ul.getElementsByTagName('LI')).to.have.length.of(3)
    })
  })

})
