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
            Number of Cases
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
            <TableCell style={{ color: "white" }}>{cases}</TableCell>
          </TableBody>
        ))}
      </Table>
    </TableContainer>
    // <div>
    //   {countriesData.map(({ country, cases, countryInfo }) => (
    //     <table>
    //       <tbody className="h-6 overflow-scroll">
    //         <div>
    //           <tr>
    //             <td>
    //               <img
    //                 src={countryInfo.flag}
    //                 alt={country}
    //                 className="w-7 h-7 rounded-full  "
    //               />
    //             </td>
    //             <td>{country}</td>
    //             <td>{cases}</td>
    //           </tr>
    //         </div>
    //       </tbody>
    //     </table>
    //   ))}
    // </div>
  );
}

export default TableInfo;
