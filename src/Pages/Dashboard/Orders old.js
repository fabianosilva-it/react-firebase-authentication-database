import React, {useState, useEffect,  Component} from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

import firebase from '../../base';

import FirebaseService from './FirebaseServices';

// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

// const rows = [
//   createData(0, '16 Set 2020', 'Cristine Galvão', 'BDD-000001', 'Priscila', 35.00),
//   createData(1, '16 Set 2020', 'Luiz Silva', 'BDD-000002', 'Priscila', 70.00),
//   createData(2, '16 Set 2020', 'Ana Oliveira', 'BDD-000003', 'Priscila', 100.00),
//   createData(3, '16 Set 2020', 'Tuti Petson', 'BDD-000004', 'Priscila', 54.00),
//   createData(4, '15 Set 2020', 'Dora Melo', 'BDD-000006', 'Priscila', 72.00),
// ];

// function preventDefault(event) {
//   event.preventDefault();
// }

// const useStyles = makeStyles((theme) => ({
//   seeMore: {
//     marginTop: theme.spacing(3),
//   },
// }));


// componentDidMount() {
//   FirebaseService.getDataList('leituras', (dataReceived) =>    this.setState({data: dataReceived}))
// };


// export default function Orders() {
//   const classes = useStyles();

//   const [listaPedidos, setListaPedidos] = useState([]);

//   useEffect(() => {

//     FirebaseService.getDataList('pedidos', (dataReceived) =>    this.setState({data: dataReceived}))

//     // firebase.database().ref('pedidos')
//     //   .orderByChild('dataOrderBy')
//     //   .once('value', (snapshot)=>{
        
//     //     snapshot.forEach((childItem)=>{

//     //       // alert(childItem.key) 

//     //       // setListaPedidos([
//     //       //   ...listaPedidos,
//     //       //   {
//     //       //     id:childItem.key,
//     //       //   }
//     //       // ]);

         

//     //     })

        
//     //   })
//   })
  

  

  // return (
  //   <React.Fragment>
  //     <Title>Últimos pedidos</Title>
  //     <Table size="small">
  //       <TableHead>
  //         <TableRow>
  //           <TableCell>Data</TableCell>
  //           <TableCell>Cliente</TableCell>
  //           <TableCell>Número do Pedido</TableCell>
  //           <TableCell>Profissional</TableCell>
  //           <TableCell align="right">Valor total</TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {rows.map((row) => (
  //           <TableRow key={row.id}>
  //             <TableCell>{row.date}</TableCell>
  //             <TableCell>{row.name}</TableCell>
  //             <TableCell>{row.shipTo}</TableCell>
  //             <TableCell>{row.paymentMethod}</TableCell>
  //             <TableCell align="right">{row.amount}</TableCell>
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>

  //     <Table size="small">
  //       <TableHead>
  //         <TableRow>
  //           <TableCell>id</TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {listaPedidos.map((row) => (
  //           <TableRow key={row.id}>
  //             <TableCell>{row.id}</TableCell>
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>

  //     <div className={classes.seeMore}>
  //       <Link color="primary" href="#" onClick={preventDefault}>
  //         Ver todos pedidos
  //       </Link>
  //     </div>
  //   </React.Fragment>
  // );
// }



class App extends Component {

  state = {
    listaPedidos: []
  };

  componentDidMount() {
    
    FirebaseService.getDataList('leituras', (dataReceived) =>    this.setState({listaPedidos:dataReceived}));
  };
  
  render() {

    const useStyles = makeStyles((theme) => ({
      seeMore: {
        marginTop: theme.spacing(3),
      },
    }));

    const classes = useStyles();

    // Generate Order Data
    function createData(id, date, name, shipTo, paymentMethod, amount) {
      return { id, date, name, shipTo, paymentMethod, amount };
    }

    const rows = [
      createData(0, '16 Set 2020', 'Cristine Galvão', 'BDD-000001', 'Priscila', 35.00),
      createData(1, '16 Set 2020', 'Luiz Silva', 'BDD-000002', 'Priscila', 70.00),
      createData(2, '16 Set 2020', 'Ana Oliveira', 'BDD-000003', 'Priscila', 100.00),
      createData(3, '16 Set 2020', 'Tuti Petson', 'BDD-000004', 'Priscila', 54.00),
      createData(4, '15 Set 2020', 'Dora Melo', 'BDD-000006', 'Priscila', 72.00),
    ];

    function preventDefault(event) {
        event.preventDefault();
      }
    

    return (
      <React.Fragment>
        <Title>Últimos pedidos</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Número do Pedido</TableCell>
              <TableCell>Profissional</TableCell>
              <TableCell align="right">Valor total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
  
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.listaPedidos.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
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
}

export default App;