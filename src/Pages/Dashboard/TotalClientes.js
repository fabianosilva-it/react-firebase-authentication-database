import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total de Clientes</Title>
      <Typography component="p" variant="h4">
        135
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      em {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver detalhes
        </Link>
      </div>
    </React.Fragment>
  );
}