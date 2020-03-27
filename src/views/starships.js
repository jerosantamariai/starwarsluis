import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const Starships = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="row">
                {
                    store.starships !== null ?
                        store.starships.results.map((starship, i) => {
                            const id = starship.url.replace("https://swapi.co/api/starships/", "").replace("/", "");
                            return (
                                <div className="col-md-4" key={i}>
                                    <div className="card mb-3">
                                        <div className="row no-gutters">
                                            <div className="col-md-4">
                                                <img src="http://placehold.it/200x300" className="card-img" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{starship.name}</h5>
                                                    <p className="card-text">{starship.name}</p>
                                                    <p className="card-text">{id}</p>
                                                    <p className="card-text">
                                                        <Link to={"/starship-by-id/"+id}>
                                                            <small className="text-muted">Read More By Id</small>
                                                        </Link>
                                                    </p>

                                                    <p className="card-text">
                                                        <Link to={"/starship-by-name/" + (
                                                            starship.name.split(" ").join("-").toLowerCase()
                                                        )}>
                                                            <small className="text-muted">Read More by Name</small>
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        : (
                            <div className="d-flex justify-content-center">
                                <div className="spinner-grow text-success" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        )
                }
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between">
                    {
                        !!store.starships &&
                            store.starships.previous !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getStarships(store.starships.previous)}>
                                    Previous
                                </button>
                            ) : (
                                <span className="btn btn-primary btn-md disabled">
                                    Previous
                                </span>
                            )
                    }
                    {
                        !!store.starships &&
                            store.starships.next !== null ?
                            (
                                <button className="btn btn-primary btn-md"
                                    onClick={() => actions.getStarships(store.starships.next)}>
                                    Next
                                </button>
                            ) : (
                                <span className="btn btn-primary btn-md disabled">
                                    Next
                                </span>
                            )
                    }
                </div>
            </div>
        </>
    )
}

export default Starships;