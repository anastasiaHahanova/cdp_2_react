import React from "react";

const CoursePage = ({ match }) => {
  return <h3>Requested Param: {match.params.id} lol</h3>;
}

export default CoursePage;
