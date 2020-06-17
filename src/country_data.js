import {Component} from 'react';
import ReactDOM from 'react-dom'


class SingleCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: [],
      ID: props.id,
      image: props.image
    };
  }

  // on component load run this
  componentDidMount() {
    const props = this.state;
    
    // Note to self add error handling on 404 return, You need to rewrite this as 
    //fetch doesnt throw an error on 404 it just continues so catch is not working
    // rework this if you get time.
    if(!props.image){
      fetch("https://web3app.herokuapp.com/countries/" + props.ID)
      .then(res =>res.json())
      .catch(error=>{console.log(error)})
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
  }

  render() {
    const { error, isLoaded, item, image } = this.state;
    if(image){
      return(
      <div>
        <img src="images/worldmap.png" className={"map"}></img>
      </div>
      )
    }
    else if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div className={"loaderContainer"}><p className={"loadingText"}>Loading Selected Country Data</p><img src="images/pacloader.gif" className={"loaderGif"} /></div>;
    } else {
      return (
        <div className={"container"}><p>{JSON.stringify(item)}</p></div>
      );
    }
  }

}



export default SingleCountry;