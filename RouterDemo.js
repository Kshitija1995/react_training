import React ,{Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'; 
import Route from 'react-router-dom/Route';  
import Main from '../assignment-1/Main'; 
import InputTextBoxComponent from '../assignment-2/InputTextBoxComponent';

class RouterDemo extends Component {
    render() { 
        return(<Router>
            <div className="RouterDemo">
                <Route path="/assignment-1" exact strict component={Main}/>
                <Route path="/assignment-2" exact strict component={InputTextBoxComponent}/>
                {/* <Route render={() => <h1>404: page not found</h1>}  /> */}

             
            </div>
        </Router>
        )
    }
}
 
export default RouterDemo;