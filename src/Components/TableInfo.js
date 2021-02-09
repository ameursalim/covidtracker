import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
} from "@material-ui/core";
import React from "react";

function TableInfo({ countriesData }) {
  return (
    <TableContainer color="text.primary">
      <Table>
        <TableHead>
          <TableCell align="right" color="text.primary">
            Flag
          </TableCell>
          <TableCell align="right">Country Name</TableCell>
          <TableCell align="right">Number of Cases</TableCell>
        </TableHead>
        {countriesData.map(({ country, cases, countryInfo }) => (
          <TableBody>
            <img
              src={countryInfo.flag}
              alt={country}
              className="w-10 h-10 rounded-full mx-auto p-1 mt-2 ml-4 "
            />
            <TableCell>{country}</TableCell>
            <TableCell>{cases}</TableCell>
          </TableBody>
        ))}
      </Table>
    </TableContainer>
  );
}

export default TableInfo;
