import React from 'react'

//使用类就允许我们使用其它特性，例如局部状态、生命周期钩子
class Clock extends React.Component {
  constructor(props) {
    super(props)
    // 局部状态
    this.state = { date: new Date() }
  }
  //挂载
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  //卸载
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
  //使用 this.setState() 来更新组件局部状态
  // 1.不能直接更新状态
  // // Wrong
  // this.state.comment = 'Hello';
  // 2.this.props 和 this.state 可能是异步更新的，你不应该依靠它们的值来计算下一个状态
  // // Wrong
  // this.setState({
  // counter: this.state.counter + this.props.increment,
  // });
  // // Correct
  // this.setState((prevState, props) => ({
  // counter: prevState.counter + props.increment
  // }));
  // 3.状态更新合并
  // componentDidMount() {
  //     fetchPosts().then(response => {
  //         this.setState({
  //         posts: response.posts
  //         });
  //     });

  //     fetchComments().then(response => {
  //         this.setState({
  //         comments: response.comments
  //         });
  //     });
  // }
  // 数据自顶向下流动

  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}

export default Clock
