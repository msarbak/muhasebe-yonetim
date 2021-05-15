import React, { Component } from 'react'
import PropTypes from 'prop-types'
 class User extends Component {
   
    static defaultProps = {
        name: "Bilgi Yok",
        salary: "Bilgi Yok",
        department:  "Bilgi Yok"
    }

    render() {
        const {name,department,salary} = this.props;
        return (
            <div className ="col-md 8 mb-4">
                <div className="card">
                   
                    <div className= "card-header d-flex justify-content-between">
                               <h4 className="d-inline">{name}</h4>
                               <i class="far fa-trash-alt" style={{cursor : "pointer"}}></i>
                    </div>

                    <div className= "card-body">
                        <p className="card-text">Departman: {department}</p>
                        <p className="card-text">Maaş: {salary}</p>
                    </div>

                </div>
            </div>
        )
    }
}

User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired
}
export default User;