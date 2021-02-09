import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function CardBox({ title, cases, total }) {
  return (
    <Card className="card flex flex-row justify-between ">
      <CardContent className="">
        <Typography>{title}</Typography>
        <h1>{cases}</h1>
        <Typography>{total}</Typography>
      </CardContent>
    </Card>
  );
}

export default CardBox;
