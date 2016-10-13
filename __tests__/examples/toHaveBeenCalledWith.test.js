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

describe('toHaveBeenCalledWith example', () => {
  let testMock1
  let subject

  beforeEach(() => {
    testMock1 = jest.fn()
    subject = shallow(<Sample onWillMountHandle={testMock1} onClickHandle={testMock1} />)
  })

  test('handle onWillMountHandle', () => {
    expect(testMock1).toHaveBeenCalledWith("a")
  })

  test('handle onClickHandle', () => {
    expect(testMock1).toHaveBeenCalledWith("a")
    subject.find('span').simulate('click')
    expect(testMock1).toHaveBeenCalledWith(2, 3)
  })
})
