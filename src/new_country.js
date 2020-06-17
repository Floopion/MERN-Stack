import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input} from 'reactstrap';
import FeedbackMessage from './feedback_messages'
 
class NewCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  //When the method is run set the modal state to be the opposite of what it currently is
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  //newly created function to sanitise input, handle the form submit and close modal if everythin submitted fine
  formSubmit()
  {
    //get the value of the text bos and sanitize it for whitespace / replace any spaces with underscores so it can be sent properly
    const countryName = newCountryname.value.trim().replace(/ /g,"_");
    const requestOption = {
        method: 'POST'
      };
    const messageArea = document.querySelector('#feedbackText');
    
    fetch("https://web3app.herokuapp.com/countries/" + countryName, requestOption )
    .then(res => {
        ReactDOM.render(<FeedbackMessage hide={false} error={false} message={"Success! New Country Has been added to the Database."} />, messageArea);
      })
      .catch(err => {
        ReactDOM.render(<FeedbackMessage hide={false} error={true} message={err} />, messageArea);
      });                 

    this.setState({
        modal: !this.state.modal
      });
  }

  render() {
    return (
      <div>
        <Button outline color='success' onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
            <ModalBody>
                <Form onSubmit={this.submitHandler}>
                    <FormGroup>
                    <Label for="newCountryname" className="h2">New Country</Label>
                        <Input type="text" onChange={this.handleTextChange} name="newCountryname" ref="newCountryname" id="newCountryname"></Input>
                    </FormGroup>
                </Form>
            </ModalBody>
          <ModalFooter>
            <Button color='success' onClick={this.formSubmit}>Add Country</Button>{' '}
            <Button outline color='danger' onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  
   //Prevent the form automatically submitting when the enter key is pressed
   submitHandler(e) {
    e.preventDefault();
    }
}





// Export a new color element with th button loabel of "New Country"
export default <NewCountry buttonLabel='New Country ' />;
