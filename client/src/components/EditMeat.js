import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

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
            

                <div class="title-box">
                    <h1 class="main-title">Edit Selected Product</h1>
                </div>
                    <section class="form-top">
                                    <form className="form-input" onSubmit={handleSubmit}>
                                        
                                        <div className="form-group">
                                        <label htmlFor="name">Product Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setName(e.target.value)}
                                            value={name}
                                        />
                                        {errors.name ? <p>{errors.name.message}</p> : null}
                                        </div>

                                        <br />

                                        <div className="form-group">
                                        <label htmlFor="type">Meat Type:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setType(e.target.value)}
                                            value={type}
                                        />
                                        {errors.type ? <p>{errors.type.message}</p> : null}
                                        </div>
                                        <br />

                                        <div className="form-group">
                                        <label htmlFor="tray_size">Tray Size: </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            onChange={(e) => setTray_Size(e.target.value)}
                                            value={tray_size}
                                        />
                                        {errors.tray_size ? <p>{errors.tray_size.message}</p> : null}
                                        </div>

                                        <br />

                                        <div className="form-group">
                                        <label htmlFor="description">Description: </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setDescription(e.target.value)}
                                            value={description}
                                        />
                                        {errors.description ? <p>{errors.description.message}</p> : null}
                                        </div>
                                        <button className="add_new_product" type="submit">
                                            Edit Product
                                        </button>
                                        
                                        
                                    </form>
                                    
                    </section>
                    
                
            </>
        );
    };

export default EditMeat;