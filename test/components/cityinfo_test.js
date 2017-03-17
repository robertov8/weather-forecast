import { renderComponent, expect } from '../test_helper'
import CityInfo from '../../src/components/CityInfo'

describe('CityInfo', () => {
  let component

  beforeEach(() => {
    component = renderComponent(CityInfo)
  })

  it('renders cityinfo', () => {
    expect(component)
    console.log(component)
  })
})
