import React, { Component } from 'react';

class LinkCreate extends Component {
    constructor(props) {
        super(props);

        this.state = { error: '' };
    }
    handleSubmit(event) {
        event.preventDefault();
        Meteor.call('links.insert', this.refs.input.value, (error) => {
            if (error) {
                this.setState({ error: 'Enter a valid URL' });
            } else {
                this.setState({ error: ''});
                this.refs.input.value = '';
            }
        });        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Link to shorten</label>
                    <input ref="input" className="form-control" />
                    <div className="text-danger">{this.state.error}</div>     
                </div>
                <button className="btn btn-primary">Shorten!</button>
            </form>
        );
    };
}

export default LinkCreate;