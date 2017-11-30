# React
React小书学习笔记

[学习地址](http://huziketang.com/books/react/)



#### 生命周期
> 我们把 React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载

1. componentWillMount：组件挂载开始之前，也就是在组件调用 render 方法之前调用。
4. componentDidMount：组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
2. componentWillUpdate：组件开始重新渲染之前调用。
5. componentDidUpdate：组件重新渲染并且把更改变更到真实的 DOM 以后调用。
3. componentWillUnmount：组件对应的 DOM 元素从页面中删除之前调用。

> 当某个状态被多个组件依赖或者影响的时候，就把该状态提升到这些组件的最近公共父组件中去管理，用 props 传递数据或者函数来管理这种依赖或着影响的行为。

#### 小贴士

组件的私有方法都用 _ 开头，所有事件监听的方法都用 handle 开头。把事件监听方法传给组件的时候，属性名用 on 开头。例如：
```
<CommentInput
  onSubmit={this.handleSubmitComment.bind(this)} />
```
这样统一规范处理事件命名会给我们带来语义化组件的好处，监听（on）CommentInput 的 Submit 事件，并且交给 this 去处理（handle）。这种规范在多人协作的时候也会非常方便。

另外，组件的内容编写顺序如下：

- static 开头的类属性，如 defaultProps、propTypes。
- 构造函数，constructor。
- getter/setter（还不了解的同学可以暂时忽略）。
- 组件生命周期。
- _ 开头的私有方法。
- 事件监听方法，handle*。
- render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以render* 开头。
- render() 方法。

如果所有的组件都按这种顺序来编写，那么维护起来就会方便很多，多人协作的时候别人理解代码也会一目了然。

#### 高阶组件

##### 组件加工器
高阶组件就是一个函数，传给它一个组件，它返回一个新的组件。其实就是为了组件之间的代码复用
高阶组件内部的包装组件和被包装组件之间通过 props 传递数据。


#### Context
使用context必备
```
static childContextTypes = {
    themeColor: PropTypes.string
  }
 getChildContext () {
    return { themeColor: this.state.themeColor }
  }
```

#### 纯函数
一个函数的返回结果只依赖于它的参数，并且在执行过程里面没有副作用，我们就把这个函数叫做纯函数。