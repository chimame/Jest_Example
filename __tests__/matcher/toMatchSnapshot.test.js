import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

const Sample = ({renderChild}) => {
  let child = null
  if (renderChild) {
    child = <span>aaa</span>
  }

  return (
    <div className={'pearent'}>
      {child}
    </div>
  )
}

describe('toMatchSnapshot example', () => {
  const subject = (renderChild) => {
    const sampleRender = shallow(<Sample renderChild={renderChild} />)
    return shallowToJson(sampleRender)
  }
  test('render child', () => {
    expect(subject(true)).toMatchSnapshot()
  })

  test('not render child', () => {
    expect(subject(false)).toMatchSnapshot()
  })
})
