// 动手实现 Redux

function createStore (reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = reducer(state, action) 
        listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
}
// 渲染函数
function renderApp (newState, oldState = {}) {
    if(newState === oldState) return
    renderTitle(newState.title, oldState.title)
    renderContent(newState.content, oldState.content)
}

function renderTitle (newTitle, oldTitle) {
    if(newTitle === oldTitle) return
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = newTitle.text
    titleDOM.style.color = newTitle.color
}

function renderContent (newContent, oldContent) {
    if(newContent === oldContent) return
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = newContent.text
    contentDOM.style.color = newContent.color
}

function themeReducer (state, action) {
    if(!state) {
        return {
            title: {
                text: '哈哈哈',
                color: 'blue'
            },
            content: {
                text: '嘿嘿嘿',
                color: 'red'
            }
        }
    }
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return {
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        default:
            return state
    }
}

const store = createStore(themeReducer)
let oldState = store.getState()
store.subscribe(() => {
    const newState = store.getState()
    renderApp(newState, oldState)
    oldState = newState
})

renderApp(store.getState())
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '哼哼哼' }) 
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'white' })