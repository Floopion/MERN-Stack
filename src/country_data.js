import {Component} from 'react';
import ReactDOM from 'react-dom'


class CountryData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: [],
      ID: props.id
    };
  }

  componentDidMount() {
    const props = this.state;

    fetch("https://web3app.herokuapp.com/countries/" + props.ID)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            item: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, item } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading Data...</div>;
    } else {
      return (
        <p>{JSON.stringify(item)}</p>
      );
    }
  }

}



export default CountryData;