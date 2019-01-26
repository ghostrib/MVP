import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            input: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Movies</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Search movies' onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));