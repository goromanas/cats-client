import { QueryClientProvider } from 'react-query'
import { queryClient } from '../queryClient'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'
import { GlobalStyle } from 'style'

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
