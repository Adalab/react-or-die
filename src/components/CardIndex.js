import React, {Component} from 'react';
import '../stylesheets/index.scss';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class CardIndex extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Main skillsArray = {this.props.skillsArray} handleName = {this.props.handleName} default={this.props.default}/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default CardIndex;
