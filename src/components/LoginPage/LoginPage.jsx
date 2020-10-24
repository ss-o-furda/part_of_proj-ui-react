import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/cjs/Button";
import { useState} from "react";
import axios from "axios";

const LoginPage = props => {

    const validateValue = (value, rule) => {
      return rule.test(value);
    };

    const [state, setState] = useState({
      userEmailValue: '',
      isUserEmailValid: false,
      passwordValue: '',
      isPasswordValid: false
    });

    const handleEmailChange = event => {
        const currentValue = event.target.value;
        const emailValid = validateValue(currentValue, /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        setState(prevState => ({
            ...prevState, userEmailValue: currentValue, isUserEmailValid: true
        }));
        console.log(currentValue)
    };

    const handlePasswordChange = event => {
        const currentValue = event.target.value;
        const passwordValid = validateValue(currentValue, /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/);
        setState(prevState => ({
            ...prevState, passwordValue: currentValue, isPasswordValid: true
        }));
        console.log(currentValue)
    };

    const handleSendData = event => {
        event.preventDefault();
        if (state.userEmailValue && state.isPasswordValid) {
          axios({ method: 'post',
              url: "http://0.0.0.0:8000/login",
              withCredentials: true,
              data: {user_email: state.userEmailValue, user_password: state.passwordValue}})
              .then(response => {
                  alert(response.data.message)
              })
              .catch(error => alert(error));
        }
        else {
            console.log(state)
        }

    }

    return (
        <div className="container">
            <Form onSubmit={handleSendData}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default LoginPage;