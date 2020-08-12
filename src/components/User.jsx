import React, {Component} from 'react';

class User extends Component {
    constructor (props) {
        super(props);
        this.state = {
            showMore: false,
            showText: 'Show More'
        }
    }

    toggleShow = () => {
        let text = this.state.showMore ? 'Show More' : `Hide Info`
        this.setState({
            showMore: !this.state.showMore,
            showText: text
        })
    }

    render() {
        if(this.state.showMore){
        return (
            <li>
                <section>
                    <h3>{this.props.userName}</h3>
                    <img src={this.props.userImg} alt=""/>
                    <button onClick={this.toggleShow}>{this.state.showText}</button>
                </section>


                <section>
                    <p>{this.props.userAge}</p>
                    <p>{this.props.userCountry}</p>

                    <p>{this.props.userState}</p>
                    <p>{this.props.userCity}</p>
                    <p>{this.props.userPhone}</p>
                </section>
            </li>
         );
        }
        
        return (
            <li>
                <section>
                    <h3>{this.props.userName}</h3>
                    <img src={this.props.userImg} alt=""/>
                    <button onClick={this.toggleShow}>{this.state.showText}</button>
                </section>
            </li>
        );
    }
}
 
export default User;