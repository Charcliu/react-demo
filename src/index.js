import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { Group } from './component/home'
import Clock from './component/clock'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
// Hello Wrold
ReactDOM.render(<h1>Hello World</h1>, document.getElementById('helloWorld'))

//JSX
function formatName(user) {
  return user.firstName + ' ' + user.lastName
}

//JSX 表达式
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>
  }
  return <h1>Hello, Stranger.</h1>
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

//JSX 属性
const content = 'My React'
const contentStyle = {
  color: 'red',
  //React DOM 使用 camelCase 小驼峰命名 来定义属性的名称
  fontWeight: 'bold'
}

//JSX 嵌套
const element = (
  <div className="jsx">
    {getGreeting(user)}
    <h4 title={content} style={contentStyle}>
      {content}
    </h4>
  </div>
)
ReactDOM.render(element, document.getElementById('jsx'))

//更新元素渲染
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('time'))
}

setInterval(tick, 1000)

ReactDOM.render(<Group />, document.getElementById('home'))
ReactDOM.render(<Clock />, document.getElementById('clock'))
