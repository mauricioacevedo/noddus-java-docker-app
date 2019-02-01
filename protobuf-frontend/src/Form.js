import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

    constructor () {
        super();
        this.saveProto = this.saveProto.bind(this);

        this.state = {
            status: "Ready!"
        }
    }

    saveProto(event){
        event.preventDefault();
        const form = event.target;
        const data = {}
        for (let element of form.elements) {
            if (element.tagName === 'BUTTON') { continue; }
            data[element.name] = element.value;
        }
        
        let address = data.host;

        if(address === '') {
            address = 'localhost';
        }

        fetch('http://'+address+':8080/create', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(res2 => {
            console.log(res2);
            this.setState({
                status: res2.status
            });
        }).catch(err => {
            console.log(err);
            err = String(err);
            this.setState({
                status: err
            });
        });



        //const stat = this.callBackend(data)

    }

    handleChange (event) {
        this.setState( event.target.name =  event.target.value )
    }

    render () {
    return (
        <div>
            <br /><br /><br />
        <form className="container text-center" align="center" onSubmit={this.saveProto}>
            <center>
            <h1>Protobuf Form</h1>
            </center>
            <br /><br />
        <div className="row" align="center">
            <label htmlFor="id" value>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Id: &nbsp;</label>
            <input type="text" name="id" id="id" />
        </div>
        
        <div className="row" align="center">
        <label htmlFor="id">Name: &nbsp;</label>
        <input type="text" name="name" id="name"  />
        </div>

        <div align="center">
        <button type="submit" className="btn btn-primary">Save </button>
        <br/><br/>

        <div className="status-text"> {this.state.status}</div>
        </div>
        <br/><br/>
        <div className="row" align="center">
        <label htmlFor="host">Host: &nbsp;</label>
        <input type="text" name="host" id="host" />
        </div>
        <div className="row" align="center">
        <label htmlFor="note">Note: for a Docker Toolbox installation you must especify the VM IP address</label>
        </div>
        </form>
        <footer className="navbar-fixed-bottom footer-color">
            <div className="container blue">
                <div className="row">
                    <p><font color="white" size="4">Mauricio Acevedo - <a href="https://www.linkedin.com/in/macevedg/">LinkedIn</a> </font></p>
                </div>
            </div>
		</footer>


        </div>
    )
    }
}
export default Form;