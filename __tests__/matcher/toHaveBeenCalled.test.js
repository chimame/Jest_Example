import React, { Component }   from 'react'
import {shallow} from 'enzyme'

class Sample extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const {onWillMountHandle} = this.props
    onWillMountHandle()
  }

  render() {
    const {onClickHandle} = this.props
    return (
      <div>
        <span onClick={onClickHandle}>aaaa</span>
      </div>
    )
  }
}

describe('toHaveBeenCalled example', () => {
  let testMock1
  let testMock2
  let subject

  beforeEach(() => {
    testMock1 = jest.fn()
    testMock2 = jest.fn()
    subject = shallow(<Sample onWillMountHandle={testMock1} onClickHandle={testMock2} />)
  })

  test('handle onWillMountHandle', () => {
    expect(testMock1).toHaveBeenCalled()
  })

  test('handle onClickHandle', () => {
    subject.find('span').simulate('click')
    expect(testMock2).toBeCalled()
  })
})
