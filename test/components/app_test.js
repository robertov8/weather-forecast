import { renderComponent, expect } from '../test_helper'
import App from '../../src/containers/app'

describe('App', () => {
  let component

  beforeEach(() => {
    component = renderComponent(App)
  })

  it('renders app', () => {
    expect(component).to.exist
  })
})
