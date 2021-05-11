import React from "react"
import { Grid, Typography,  } from '@material-ui/core';

import Seo from "../components/seo"

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Grid container justify='center' alignItems='center' spacing={2}>
      <Grid item xs={12}>
        <Typography variant='h4' align='center'>
          Welcome to Olive Mission Church
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h4'>
          Welcome
        </Typography>
      </Grid>
    </Grid>
  </>
)

export default IndexPage
