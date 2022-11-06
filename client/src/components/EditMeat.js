import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../Edit.css";

const EditMeat = (props) => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [tray_size, setTray_Size] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});
    const [meatNotFoundError, setMeatNotFoundError] = useState("");
    const navigate = useNavigate();
    console.log(id);
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/meat/${id}`)
        .then((response) => {
            console.log(response.data);
            setName(response.data.name);
            setType(response.data.type);
            setTray_Size(response.data.tray_size);
            setDescription(response.data.description);
        })
        .catch((err) => {
            console.log(err.response);
            setMeatNotFoundError(`Meat not found using that ID`);
        });
    }, []);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
        .put(`http://localhost:8000/api/meat/${id}`, { name, type, tray_size, description})
        .then((response) => {
            console.log(response);
            navigate("/");
        })
        .catch((err) => {
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors);
        });
    };
    return (
        <>
            <body class="form-body">
                    <div class="form-circle">
                        <div class="container">
                                        <form className="form-input" onSubmit={handleSubmit}>
                                            
                                            <input
                                                placeholder="Product"
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setName(e.target.value)}
                                                value={name}
                                            />
                                            {errors.name ? <p>{errors.name.message}</p> : null}
                                            

                                            <div className="form-group">
                                            
                                            <input
                                                placeholder="Type"
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setType(e.target.value)}
                                                value={type}
                                            />
                                            {errors.type ? <p>{errors.type.message}</p> : null}
                                            </div>

                                            <div className="form-group">
                                            
                                            <input
                                                placeholder="Tray"
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setTray_Size(e.target.value)}
                                                value={tray_size}
                                            />
                                            {errors.tray_size ? <p>{errors.tray_size.message}</p> : null}
                                            </div>

                                            <input
                                                placeholder="Description"
                                                type="text"
                                                className="form-control"
                                                onChange={(e) => setDescription(e.target.value)}
                                                value={description}
                                            />
                                            {errors.description ? <p>{errors.description.message}</p> : null}
                                            <div class="button-pair">
                                                <button className="back-button"><Link to="/">
                                                    Back
                                                </Link></button>
                                                <button className="create-product" type="submit">
                                                    Edit Product
                                                </button>
                                            </div>
                                        </form>
                        </div>
                    </div>
                </body>
            </>
        );
    };

export default EditMeat;