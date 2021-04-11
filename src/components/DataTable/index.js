import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ValueCell } from "./styles";

const useStyles = makeStyles({
  container: {
    height: "90vh",
    width: "50vw",
  },
});

const DataTable = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>City</TableCell>
            <TableCell align="right">Current AQI</TableCell>
            <TableCell align="right">Last Updated</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((d) => (
            <TableRow key={d.city}>
              <TableCell align="right">{d.city}</TableCell>
              <ValueCell align="right" value={d.aqi}>{d.aqi}</ValueCell>
              <TableCell align="right">
                {new Date().toLocaleTimeString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
