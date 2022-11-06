import { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";

const DisplayAll = () => {
    const [allMeats, setAllMeats] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost:8000/api/meat")
        .then((response) => {
            console.log(response.data);
            setAllMeats(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);

    const handleDeleteMeat = (idFromBelow) => {
        axios
        .delete(`http://localhost:8000/api/meat/${idFromBelow}`)
        .then((response) => {
            console.log("success deleting meat");
            console.log(response);
            const filteredMeats = allMeats.filter((meat) => {
            return meat._id !== idFromBelow;
            });
            setAllMeats(filteredMeats);
        })
        .catch((err) => {
            console.log("error deleting meat", err.response);
        });
    };

    return (
        <>
            <body class="body-display">
                <section class="header">
                    <div class="nav-bar">
                        <section>
                            <img class="search-icon" src={require("../images/search-dark.png")} alt="search icon" />
                        </section>
                        <div>
                            <p class="log-out"><strong>Log Out</strong></p>
                        </div>
                    </div>

                    <div class="main-box">

                            <div class="table-header">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Tray</th>
                                            <th>Product</th>
                                            <th>Description</th>
                                            <th>Type</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div class="table-content">
                                <table>
                                    <tbody>
                                        {allMeats.map((meat, index) => {
                                            return (
                                            <tr key={meat._id}>
                                                <td>{meat.tray_size}</td>
                                                <td>{meat.name}</td>
                                                <td>{meat.description}</td>
                                                <td>{meat.type}</td>
                                                <td>
                                                    <Link to={`/meat/${meat._id}`}>
                                                        <button className="table-button">Details</button>
                                                    </Link>

                                                    <Link to={`/edit/${meat._id}`}>
                                                        <button className="table-button">Edit</button>
                                                    </Link>

                                                    <button className="table-button">Delete</button>
                                                </td>
                                            </tr>
                                        );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                    </div>
                    <div class="table-ender">
                        <Link to="/new"><button class="add-product"><strong>Add Product</strong></button></Link>
                    </div>
                </section>
            </body>
        </>
    );
    };

export default DisplayAll;