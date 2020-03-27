import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const StarshipDetail = props => {
    const [starship, setStarship] = useState(null);
    const [films, setFilms] = useState([]);

    const id = props.match.params.id;

    useEffect(() => {
        getStarship("https://swapi.co/api/starships/" + id + "/");
    }, []);

    const getStarship = url => {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(data => {
                setStarship({ ...data })
            })
    }

    return (
        <div className="row">
            {
                starship !== null ?
                    (
                        <div className="col-md-12">
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="http://placehold.it/400x500" className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{starship.name}</h5>
                                            <p className="card-text">Model: {starship.model}</p>
                                            <p className="card-text">Manufacturer: {starship.manufacturer}</p>
                                            <p className="card-text">Cost in Credits: {starship.cost_in_credits}</p>
                                            <p className="card-text">Length: {starship.length}</p>
                                            <p className="card-text">Passengers: {starship.passengers}</p>
                                            <p className="card-text">Starship Class: {starship.starship_class}</p>
                                            <p className="card-text">Films:</p>
                                            <ul>
                                                {
                                                    starship.films.map((film, i) => {
                                                        return (
                                                            <li key={i}>{film}</li>
                                                        )
                                                    })
                                                }
                                            </ul>

                                            <p className="card-text">
                                                <Link to={"/"}>
                                                    <small className="text-muted">Regresar</small>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    : (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-grow text-success" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )
            }
        </div >
    )
}

export default StarshipDetail;