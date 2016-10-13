import React from 'react'

const sample = (renderChild) => {
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
  test('render child', () => {
    expect(sample(true)).toMatchSnapshot()
  })

  test('not render child', () => {
    expect(sample(false)).toMatchSnapshot()
  })
})
