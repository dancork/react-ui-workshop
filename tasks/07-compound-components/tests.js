import { expect } from 'chai'

describe('Tests', () => {

  let list

  beforeEach(() => {
    list = document.getElementById('app').children[0]
  })

  context('list', () => {

    it('renders a UL', () => {
      expect(list.tagName).to.equal('UL')
    })

    it('with correct class', () => {
      expect(list.className).to.equal('component-icon-list')
    })

  })

  context('list items', () => {

    it('renders 2 LIs', () => {
      expect(list.children).to.have.length(2)
      expect(list.children[0].tagName)
        .to.equal(list.children[1].tagName)
        .to.equal('LI')
    })

    it('with the correct class', () => {
      expect(list.children[0].className)
        .to.equal(list.children[1].className)
        .to.equal('component-icon-list-item')
    })

    context('first item', () => {

      it('contains an icon', () => {
        expect(list.children[0].children[0].tagName).to.equal('I')
      })

      it('has class "tick"', () => {
        expect(list.children[0].children[0].className).to.contain('tick')
      })

      it('contains "True"', () => {
        expect(list.children[0].innerHTML).to.contain('True')
      })

    })

    context('second item', () => {

      it('contains an icon', () => {
        expect(list.children[1].children[0].tagName).to.equal('I')
      })

      it('has class "cross"', () => {
        expect(list.children[1].children[0].className).to.contain('cross')
      })

      it('contains "False"', () => {
        expect(list.children[1].innerHTML).to.contain('False')
      })

    })

  })

});
