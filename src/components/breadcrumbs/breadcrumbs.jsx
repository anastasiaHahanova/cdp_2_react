import React from 'react';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import './breadcrumbs.scss';

const SimpleBreadcrumbs = ({title}) => {
  return (
    <Paper elevation={0} className="breadcrumbs">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/courses">
          courses
          </Link>
        <Typography color="textPrimary">
          {title || 'create a new course'}
        </Typography>
      </Breadcrumbs>
    </Paper>
  );
}

export default SimpleBreadcrumbs;
