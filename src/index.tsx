import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyle from './styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import rootReducer from './lib/store'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const store = createStore(rootReducer)

root.render(
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>
)
