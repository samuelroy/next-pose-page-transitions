import App, { Container } from 'next/app'
import posed, { PoseGroup } from 'react-pose'
import Layout from '../components/layout'

const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: 300 },
    exit: { opacity: 0 }
  });

export default class TransitionsExample extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
        <Container>
            <Layout>
                <PoseGroup>
                    <RouteContainer key={this.props.router.route}>
                        <Component route={this.props.router.route} {...pageProps} />
                    </RouteContainer>
                </PoseGroup>
            </Layout>
        </Container>
    )
  }
}