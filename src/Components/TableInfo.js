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
    // <TableContainer color="text.primary" style={{ maxHeight: 500 }}>
    //   <Table>
    //     <TableHead>
    //       <TableCell align="right" color="text.primary">
    //         Flag
    //       </TableCell>
    //       <TableCell align="right">Country Name</TableCell>
    //       <TableCell align="right">Number of Cases</TableCell>
    //     </TableHead>
    //     {countriesData.map(({ country, cases, countryInfo }) => (
    //       <TableBody>
    //         <TableCell>
    //           {" "}
    //           <img
    //             src={countryInfo.flag}
    //             alt={country}
    //             className="w-7 h-7 rounded-full  "
    //           />
    //         </TableCell>

    //         <TableCell>{country}</TableCell>
    //         <TableCell>{cases}</TableCell>
    //       </TableBody>
    //     ))}
    //   </Table>
    // </TableContainer>
    <div>
      {countriesData.map(({ country, cases, countryInfo }) => (
        <tr className="h-6">
          <td>
            {" "}
            <img
              src={countryInfo.flag}
              alt={country}
              className="w-7 h-7 rounded-full  "
            />
          </td>
          <td>{country}</td>
          <td>{cases}</td>
        </tr>
      ))}
    </div>
  );
}

export default TableInfo;
