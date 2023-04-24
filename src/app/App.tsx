import { QueryClientProvider } from 'react-query'
import { queryClient } from '../queryClient'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { GlobalStyle } from 'style'
import { Provider } from 'react-redux'
import { store } from 'store'

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <GlobalStyle />
          <AppRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  )
}

export default App
