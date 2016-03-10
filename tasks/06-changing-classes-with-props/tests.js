import { expect } from 'chai'

describe('Tests', () => {
  let alerts
  beforeEach(() => {
    alerts = document.getElementsByClassName('component-alert')
  })
  it('renders 4 divs with the .component-alert class ', () => {
    expect(alerts).to.have.length(4)
  })
  describe('first alert', () => {
    it('has a class of success', () => {
      expect(alerts[0].className).to.contain('success')
    })
    it('displays the title in an h4', () => {
      expect(alerts[0].getElementsByTagName('H4')[0].innerHTML).to.contain('Success')
    })
    it('displays the text after the h4', () => {
      expect(alerts[0].innerHTML).to.contain('This is a successful alert')
    })
  })
  describe('second alert', () => {
    it('has a class of success', () => {
      expect(alerts[1].className).to.contain('error')
    })
    it('displays the title in an h4', () => {
      expect(alerts[1].getElementsByTagName('H4')[0].innerHTML).to.contain('Error')
    })
    it('displays the text after the h4', () => {
      expect(alerts[1].innerHTML).to.contain('This is an error alert')
    })
  })
  describe('third alert', () => {
    it('has a class of large', () => {
      expect(alerts[2].className).to.contain('large')
    })
    it('displays the title in an h4', () => {
      expect(alerts[2].getElementsByTagName('H4')[0].innerHTML).to.contain('Large')
    })
    it('displays the text after the h4', () => {
      expect(alerts[2].innerHTML).to.contain('This is a large alert')
    })
  })
  describe('fourth alert', () => {
    it('has a class of small', () => {
      expect(alerts[3].className).to.contain('small')
    })
    it('has a class of warning', () => {
      expect(alerts[3].className).to.contain('warning')
    })
    it('displays the title in an h4', () => {
      expect(alerts[3].getElementsByTagName('H4')[0].innerHTML).to.contain('Small Warning')
    })
    it('displays the text after the h4', () => {
      expect(alerts[3].innerHTML).to.contain('This is a small warning alert')
    })
  })
})
