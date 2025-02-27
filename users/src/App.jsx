import React, { useState, useEffect } from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
  const [people, setPeople] = useState([]);
  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(result => setPeople(result));
  }, []);
  const filterData = people.filter(value =>
    value.name.toLowerCase().includes(searchData)
  );

  const handleSearch = (event) => {
    setSearchData(event.target.value.toLowerCase());
  };

  const handleView = (event) => {
    window.location.href = `user/${event.target.value}`;
  };  

  return (
    <div>
      <nav class="navbar navbar-expand-lg  bg-secondary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Users Management Dashboard</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  onChange={handleSearch}/>
                <button class="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((value) => (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.city}</td>
                <td><button className="btn btn-primary" onClick={handleView}
                >View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
     
   
      </div>
      


    </div>
  );


};

export default App;

























