import React, {Component} from 'react';
import User from './components/User'
import './App.css';

class App extends Component {
  constructor (props){
    super (props);
    this.state = {
      data: [],
    }
  }

  //functions
  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
        .then(res => res.json())
        .then(examples => {
            this.setState({ data: examples.results })
        })
  }

  //render
  render() {
    return (
      <div className="App">
        <ul>
          {
             this.state.data.map((user, index) => {
              return <User 
                key={index} 
                userName={user.name.first + ' ' + user.name.last} 
                userImg={user.picture.thumbnail}
                
                userAge={user.dob.age} 
                userCountry={user.location.country}
                userState={user.location.state}
                userCity={user.location.city}
                userPhone={user.cell}
              />
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
