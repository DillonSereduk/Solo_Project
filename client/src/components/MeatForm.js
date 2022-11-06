import axios from "axios";
import { useState } from "react";
import "../Form.css";
import { Link, useNavigate } from "react-router-dom";

    const MeatForm = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [tray_size, setTray_Size] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/meat", { name, type, tray_size, description })
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
                                            
                                            <button className="create-product" type="submit">
                                                Create Product
                                            </button>
                                        </form>
                        </div>
                    </div>
                </body>
            </>
        );
    };

export default MeatForm;