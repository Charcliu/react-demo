import React from 'react'

//定义组件（组件名称必须以大写字母开头）
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

class Group extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="React" />
        <Welcome name="Redux" />
        <Welcome name="React-router" />
      </div>
    )
  }
}

export { Welcome, Group }
