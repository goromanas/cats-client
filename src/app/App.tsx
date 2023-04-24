import { QueryClientProvider } from 'react-query'
import { queryClient } from '../queryClient'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { GlobalStyle } from 'style'
import { Provider } from 'react-redux'
import { store } from 'store'
import { ThemeProvider, useTheme } from 'styled-components'
import { theme as globalTheme } from 'style'

const App = () => {
  const theme = useTheme()

  return (
    <Provider store={store}>
      <ThemeProvider theme={globalTheme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <BrowserRouter>
            <GlobalStyle theme={theme} />
            <AppRoutes />
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
