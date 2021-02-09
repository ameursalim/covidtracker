import React from "react";
import { Card, CardContent, Icon, Typography } from "@material-ui/core";

function CardBox({ title, cases, total, icon }) {
  return (
    <Card className="card flex  justify-between   bg-gray-700 ">
      <Icon className="flex items-center" color="secondary">
        {icon}
      </Icon>
      <CardContent className="">
        <Typography color="textSecondary">{title}</Typography>
        <h2>{cases}</h2>
        <Typography color="textSecondary">{total} Total</Typography>
      </CardContent>
    </Card>
  );
}

export default CardBox;
