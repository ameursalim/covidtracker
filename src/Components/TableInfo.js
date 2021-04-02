import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
} from "@material-ui/core";
import React from "react";
import { prettyPrintStat } from "../utils";

function TableInfo({ countriesData }) {
  return (
    <TableContainer style={{ maxHeight: 500 }}>
      <Table>
        <TableHead>
          <TableCell align="right" style={{ color: "white" }}>
            Flag
          </TableCell>
          <TableCell align="right" style={{ color: "white" }}>
            Country Name
          </TableCell>
          <TableCell align="right" style={{ color: "white" }}>
            Cases
          </TableCell>
        </TableHead>
        {countriesData.map(({ country, cases, countryInfo }) => (
          <TableBody>
            <TableCell>
              {" "}
              <img
                src={countryInfo.flag}
                alt={country}
                className="w-7 h-7 rounded-full  "
              />
            </TableCell>

            <TableCell style={{ color: "white" }}>{country}</TableCell>
            <TableCell style={{ color: "white" }}>
              {prettyPrintStat(cases)}
            </TableCell>
          </TableBody>
        ))}
      </Table>
    </TableContainer>
  );
}

export default TableInfo;
