import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PrivatePageLayout from '../../layouts/privatePage';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const DashboardsView = () => {
  const [days, setDays] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-type': 'application/json',
      }),
      mode: 'cors',
    };
    fetch('http://127.0.0.1:8080/api/days', options)
      .then((response) => response.json())
      .then((data) => {
        setDays(data);
        console.log(days);
      });
  }, []);

  return (
    <PrivatePageLayout>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Body</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Body</TableCell>
              <TableCell align="right">Text</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {days.map((day) => (
              <TableRow key={day.id}>
                <TableCell component="th" scope="row">
                  {day.id}
                </TableCell>
                <TableCell align="right">{day.date}</TableCell>
                <TableCell align="right">{day.body}</TableCell>
                <TableCell align="right">{day.text}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PrivatePageLayout>
  );
};
export default DashboardsView;
