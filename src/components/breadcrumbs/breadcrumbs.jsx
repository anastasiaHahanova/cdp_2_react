import React from 'react';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import './breadcrumbs.scss';

const SimpleBreadcrumbs = ({courseId}) => {
  return (
    <Paper elevation={0} className="breadcrumbs">
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/courses">
          courses
          </Link>
        <Typography color="textPrimary">How to become repteloid {courseId}</Typography>
      </Breadcrumbs>
    </Paper>
  );
}

export default SimpleBreadcrumbs;
