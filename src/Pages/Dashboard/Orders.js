import React,{useState, useEffect} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

import firebase from '../../base';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Set 2021', 'Cristine Galvão', 'BDD-000001', 'Priscila', 35.00),
  createData(1, '16 Set 2021', 'Luiz Silva', 'BDD-000002', 'Priscila', 70.00),
  createData(2, '16 Set 2021', 'Ana Oliveira', 'BDD-000003', 'Priscila', 100.00),
  createData(3, '16 Set 2021', 'Tuti Petson', 'BDD-000004', 'Priscila', 54.00),
  createData(4, '15 Set 2021', 'Dora Melo', 'BDD-000006', 'Priscila', 72.00),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();

  const [listaPedidos, setListaPedidos] = React.useState([]);
  const [Lista, setLista] = useState([]);

  useEffect(() =>{

    async function loadQuest(){

     
      firebase.database().ref('pedidos')
      .limitToFirst(10)
      .on('value', (snapshot)=>{

        snapshot.forEach((Pedidokey)=>{

          setLista(oldArray => [...oldArray, 
                { 
                  id:Pedidokey.key,
                  dataAtendimento:Pedidokey.val().dataAtendimento,
                  numPedido:Pedidokey.val().numPedido,
                  horarioSelecionado:Pedidokey.val().horarioSelecionado,
                  status:Pedidokey.val().status,
                  valorTotal:Pedidokey.val().valorTotal,
                }
                ]);

        })
    
      } )
    }        
    
    loadQuest();
  }, []);

  
  return (
    <React.Fragment>
      <Title>Pedidos / Solicitações</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data Atendimento</TableCell>
            <TableCell>Horário</TableCell>
            <TableCell>Número do Pedido</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Valor total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Lista.map((Lista) => (
            <TableRow key={Lista.id}>
              <TableCell>{Lista.dataAtendimento}</TableCell>
              <TableCell>{Lista.horarioSelecionado}</TableCell>
              <TableCell>BDD-{Lista.numPedido}</TableCell>
              <TableCell>{Lista.status}</TableCell>
              <TableCell align="right">R$ {Lista.valorTotal?Lista.valorTotal/100:0},00</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver todos pedidos
        </Link>
      </div>
    </React.Fragment>
  );
}