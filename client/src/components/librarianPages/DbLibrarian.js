import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class DbLibrarian extends Component{

    render(){

        return(
            <div className="dashboard">
                <div className="row">
                    <div className="col-md-4">
                        <div className="db1">
                            <h4>Total No.of books</h4>
                         <div className='text-sl align-center'><Link to="/libraryAddBook"><h5> Add Book </h5> </Link> </div>
                         <div className='text-sl align-center'><Link to="/libraryViewBook"><h5> View Books </h5> </Link> </div>
                         <div className='text-sl align-center'><Link to="/librarian_profile"><h5> Profile </h5> </Link> </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        )
    }
}


export default DbLibrarian;