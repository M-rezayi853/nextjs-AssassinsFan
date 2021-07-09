import Layout from '../components/ui/layout'
import '../styles/globals.css'
import '../styles/queries.css'
import '../styles/grid.css'
import '../styles/animate.css'
import '../styles/ionicons.min.css'
import '../styles/normalize.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
