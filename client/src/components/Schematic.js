import { useEffect, useState } from "react";
import axios from "axios";
import "../Schematic.css";
import {useNavigate, Link, useParams } from "react-router-dom";

const GetOneType = (props) => {
    const { type } = useParams();
    const { id } = useParams();
    const navigate = useNavigate();
    const [oneType, setOneType] = useState({});
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
                                                <td>{oneType.tray_size}</td>
                                                <td>{oneType.name}</td>
                                                <td>{oneType.description}</td>
                                                <td>{oneType.type}</td>
                                                <td>
                                                    <Link to={`/edit/${oneType._id}`}>
                                                        <button className="table-button">Edit</button>
                                                    </Link>

                                                    <button onClick={() => handleDeleteMeat(oneType._id)}className="danger-button">
                                                        Delete
                                                    </button>
                                                </td>
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