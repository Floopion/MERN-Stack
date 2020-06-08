export class CountrySelection extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://web3app.herokuapp.com/countries")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
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
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading Countries...</div>;
      } else {
        return (
          <select id="countries">
            {items.map(item => (
              <CountryOption name={item.name} id={item._id.$oid} />
            ))}
          </select>
        );
      }
    }
  }
  
  function CountryOption(props) {
    return <option key={props.id} id={props.id}> {props.name} </option>;
  }
