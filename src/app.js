import React from 'react';
import Row from './components/row';
import TableHead from './components/tableheader';
import API from './components/API';
import Buttons from './components/buttons';

// Styles to be used for the table div
const tableStyles = {
  margin: '25px',
  fontSize: '0.9em', 
  minWidth: '400px', 
  overflow: 'hidden', 
}

class App extends React.Component {

// Setting the initial state that can then hold the employees data from the api call, to be passed as props
constructor() {
  super() 
  this.state = {
    employees: [],
    search: "",
  }
}

componentDidMount() {
  API.getUsers().then((res) => {
    this.setState({
      employees: res.data.results
    })
  })
}

onchange = e => {
  this.setState({ search: e.target.value });
  console.log(this.state.search);

}


render() {

  const filteredEmployees = this.state.employees.filter( (employee) => {
    return employee.gender.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.name.last.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.location.city.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.location.state.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
  });

  return (


    <div className='body'>
        <nav className='orange'>Employee Directory</nav>
        <div className="container">
            {/* Search bar */}
            <div className="row">
                <input style={{marginTop: '15px'}} type="text" className="col" placeholder="Search for an employee" onChange={this.onchange}/>
            </div>

            {/* Table */}
            <div className="row">
                <table className="col-sm" style={tableStyles}>
                <TableHead />
                <tbody>
                <Row employees={filteredEmployees}/>

                </tbody>
                </table>
                
            </div>
            {/* Buttons to sort by last name */}
                <Buttons />
        </div>
    </div>
  );
}
}

export default App;