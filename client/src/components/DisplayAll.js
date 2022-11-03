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
            <body>
                <div class="nav-top">
                    <main class="nav">
                        <section class="nav-left">
                            <h1 class="nav-title"><strong>Meat Schematic Creator</strong></h1>
                        </section>
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
                <h1 class="main-title">Current Product List</h1>
            </div>
            
            <div class="main-content">
                <section class="content-top"> 
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Tray Size</th>
                                <th scope="col">Type</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allMeats.map((meat, index) => {
                                return (
                                <tr key={meat._id}>
                                    <td>{meat.name}</td>
                                    <td>{meat.tray_size}</td>
                                    <td>{meat.type}</td>
                                    <td>
                                        <Link to={`/meat/${meat._id}`}>
                                            <button className="btn btn-primary">Details</button>
                                        </Link>

                                        <strong> | </strong>

                                        <Link to={`/edit/${meat._id}`}>
                                            <button className="btn btn-primary">Edit</button>
                                        </Link>
                                    </td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </section>
            </div>

            <div class="product_buttons">
            
                <Link to="/new"><button class="add_product"><strong>Add Product</strong></button></Link>
            
                <button class="create_schematic"><strong>Create Schematic</strong></button>
            </div>
        </>
    );
    };

export default DisplayAll;