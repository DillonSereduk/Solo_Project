import { useEffect, useState } from "react";
import axios from "axios";
import "../Schematic.css";
import {useNavigate, Link, useParams } from "react-router-dom";

const GetOneType = (props) => {
    const { type } = useParams();
    const { id } = useParams();
    const navigate = useNavigate();
    const [oneType, setOneType] = useState([]);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/meatType/${type}`)
            .then((res) => {
                console.log(res.data);
                setOneType(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [type]);

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
                <section class="details-header">
                    <div class="details-main-box">
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
                            <div class="details-table-content">
                            <table>
                                    <tbody>
                                        {oneType.map((meat, index) => {
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

                                                    <button onClick={() => handleDeleteMeat(meat._id)}className="danger-button">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                    </div>
                    <div class="button-pair">
                            <button className="back-button" onClick={()=>navigate(-1)}>
                                Back
                            </button>
                    </div>
                </section>
            </body>
        </>
    );
};

export default GetOneType;