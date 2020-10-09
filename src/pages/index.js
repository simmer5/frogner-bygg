import React from 'react'

import Layout from '../components/layout'

import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles'
import { Zoom } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const IndexPage = () => {
  const classes = useStyles()
  const [features, setFeatures] = React.useState(true)
  const [info, setInfo] = React.useState(true)

  function handleClick(id) {
    switch (id) {
      case 'features':
        setFeatures(!features)
        break
      case 'info':
        setInfo(!info)
        break
      default: {
        return
      }
    }
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1 style={{ zIndex: 1, color: '#f00 ', Zoom: 2 }}>
        Vi er Frogner Bygg Service
      </h1>
    </Layout>
  )
}

export default IndexPage
