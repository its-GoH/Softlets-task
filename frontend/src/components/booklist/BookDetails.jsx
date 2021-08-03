import axios from '../../Axios';
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
// import "./booklist.css";

const BookDetails = () => {
    const [userData, setUserData] = useState("");
    let location = useLocation();
    // console.log(location.state.id)
    useEffect(() => {
        let bookId = location.state.id;
        axios.get(`/book-api/findBooks/${bookId}`)
        .then(res => setUserData(res.data))
        .catch(err => console.log('error', err))
    }, [])
    return (
        <Fragment>
                <div id="App">
      <header className="App-header">
        <h2 className="display-1">Book Details</h2>
      </header>
      <div className="card .mr-3 " style={{"width":"28rem"}}>
        <div  className="card-body">
          <h5 className="card-title">Title : {userData.title}</h5>
          <h5 className="card-title">Author : {userData.author}</h5>
          <h5 className="card-title">Cost : {userData.cost}</h5>
          <h5 className="card-title">Description : {userData.description}</h5>
          <h5 className="card-title">Pages : {userData.pages}</h5>
          <h5 className="card-title">PublishDate : {userData.publishDate}</h5>
      </div>
    </div>
    <Link to="./booklist"><button className="btn btn-info">Go Back</button></Link>
    </div>
        </Fragment>
    )
}

export default BookDetails
