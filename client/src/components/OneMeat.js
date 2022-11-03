import React, { useState, useEffect } from "react";
import {useNavigate, Link, useParams } from "react-router-dom";
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

    const deleteHandler = () => {
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
            <body>
                <div class="nav-top">
                    <main class="nav">
                        <section class="nav-left">
                            <h1 class="nav-title"><strong>Meat Schematic Creator</strong></h1>
                        </section>
                        <section class="nav-right">
                            <Link to="/"><p class="back-home"><strong>Home</strong></p></Link>
                        </section>

                        <strong> | </strong>
                        
                        <section class="nav-right">
                            <p class="log-out"><strong>Log Out</strong></p>
                        </section>
                    </main>
                </div>
                
                <div class="nav-bottom">
                    <section class="nav-sub">
                        <ul class="nav-picture">
                            <img src={require("../images/raw-meat-photography_2.jpg")} alt="Meat banner" />
                        </ul>
                        <section class="nav-divider"></section>
                    </section>
                </div>
            </body>

            <div class="title-box">
                <h1 class="main-title">Details About: {oneMeat.name}</h1>
            </div>

            <div class="main-content">
                <section class="content-top"> 
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Tray Size</th>
                                <th scope="col">Type</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                                <tr key={oneMeat._id}>
                                    <td>{oneMeat.name}</td>
                                    <td>{oneMeat.tray_size}</td>
                                    <td>{oneMeat.type}</td>
                                </tr>
                        </tbody>
                    </table>
                </section>
                <table className="description">
                    <thead>
                            <tr>
                                <th scope="col">Description</th>
                            </tr>
                    </thead>
                    <tbody>
                                <tr key={oneMeat._id}>
                                    <td>{oneMeat.description}</td>
                                </tr>
                        </tbody>
                </table>
            </div>
        </>
    );
};

export default OneMeat;