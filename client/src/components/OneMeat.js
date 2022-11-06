import React, { useState, useEffect } from "react";
import {useNavigate, Link, useParams } from "react-router-dom";
import "../Details.css";
import axios from "axios";

const OneMeat = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [oneMeat, setOneMeat] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/meat/${id}`)
            .then((res) => {
                console.log(res.data);
                setOneMeat(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]); 

    const handleDeleteMeat = () => {
        axios.delete(`http://localhost:8000/api/meat/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <body class="body-display">
                <section class="header">
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
                                                <td>{oneMeat.tray_size}</td>
                                                <td>{oneMeat.name}</td>
                                                <td>{oneMeat.description}</td>
                                                <td>{oneMeat.type}</td>
                                                <td>
                                                    <Link to={`/edit/${oneMeat._id}`}>
                                                        <button className="table-button">Edit</button>
                                                    </Link>

                                                    <button onClick={() => handleDeleteMeat(oneMeat._id)}className="danger-button">
                                                        Delete
                                                    </button>
                                                </td>
                                    </tbody>
                                </table>
                            </div>
                    </div>
                    <div class="button-pair">
                            <Link to={`/`}>
                                <button className="back-button">
                                    Back
                                </button>
                            </Link>
                    </div>
                </section>
            </body>
        </>
    );
};

export default OneMeat;