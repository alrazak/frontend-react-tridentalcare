import React from "react";

function ServiceCard({title, text, description}) {
    return (
        <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <p className="card-text"><small className="text-muted">{description}</small></p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;