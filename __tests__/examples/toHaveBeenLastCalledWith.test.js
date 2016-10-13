import React, { Component }   from 'react'
import {shallow} from 'enzyme'

class Sample extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const {onWillMountHandle} = this.props
    onWillMountHandle("a")
  }

  render() {
    const {onClickHandle} = this.props
    const clickHandle = () => {onClickHandle(2,3)}
    return (
      <div>
        <span onClick={clickHandle}>aaaa</span>
      </div>
    )
  }
}

describe('toHaveBeenLastCalledWith example', () => {
  let testMock1
  let subject

  beforeEach(() => {
    testMock1 = jest.fn()
    subject = shallow(<Sample onWillMountHandle={testMock1} onClickHandle={testMock1} />)
  })

  test('handle onWillMountHandle', () => {
    expect(testMock1).toHaveBeenLastCalledWith("a")
  })

  test('handle onClickHandle', () => {
    subject.find('span').simulate('click')
    expect(testMock1).not.toHaveBeenLastCalledWith("a")
    expect(testMock1).toHaveBeenLastCalledWith(2, 3)
  })
})
