// Packages
import React, { Component, setState } from 'react';
import * as CSS from 'csstype';
// jQuery
import $ from 'jquery';

// CSS for hidden fields
const hiddenFields: CSS.Properties = {
    display: 'none'
};
// CSS for success response fields
const successFields: CSS.Properties = {
    display: 'none',
    fontFamily: 'roboto',
    color: '#ffffff',
    backgroundColor: '#a1a1aa',
    marginTop: '.5em',
    padding: '.5em',
};
// CSS for success response fields
const errorFields: CSS.Properties = {
    display: 'none',
    fontFamily: 'roboto',
    color: '#ffffff',
    backgroundColor: '#dd5569',
    marginTop: '.5em',
    padding: '.5em',
};
// CSS for hidden honeypot field
const honeyPot: CSS.Properties = {
    position: 'absolute',
    left: '-5000px',
};
// CSS for email field
const emailField: CSS.Properties = {
    width: '100%',
    height: '35px',
    paddingRight: '30%',
    border: '1px solid rgba(255, 255, 255, .9)',
    borderRadius: '3px',
    paddingLeft: '15px',
    fontFamily: 'roboto',
    fontSize: '16px',
    color: '#ffffff',
    backgroundColor: 'rgba(255, 255, 255, .3)'
};

// CSS for field group
const fieldGroup: CSS.Properties = {
    width: '100%',
};

export class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }

    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    componentDidMount() {
        this._handleClick();
    }

    _handleClick() {
        let $form = $('#mc-embedded-subscribe-form');
        if ( $form.length > 0 ) {
            $('#mc-embedded-subscribe-form input[type="submit"]').bind('click', function ( event ) {
                if ( event ) event.preventDefault();
                register($form);
            });
        }

        function register($form) {
            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                cache       : false,
                dataType    : 'jsonp',
                contentType: "application/json; charset=utf-8",
                error       : function(err) { alert("Could not connect to the registration server. Please try again later."); },
                success     : function(data) {
                    // Format response message
                    var _message = data.msg.replace("0 - ", '');
                    _message = _message.split("to list")[0];
                    // console.log(data);
                    if (data.result != "success") {
                        // Something went wrong, do something to notify the user. maybe alert(data.msg);
                        $('#mce-error-response').text(_message).show().delay(5000).fadeOut();
                    } else {
                        // It worked, carry on...
                        $('#mce-success-response').text(_message).show().delay(5000).fadeOut();
                    }
                }
            });
        }
    }

    render() {

        return (
            <div id="mc_embed_signup">
                <form action="https://wfhuniv.us7.list-manage.com/subscribe/post-json?u=2e577538acb7a1d57ae508252&amp;id=732582d038&amp;c=?"
                method="post" id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate>

                    <div id="mc_embed_signup_scroll">
                        <div className="mc-field-group" style={fieldGroup}>

                            <input type="email" onChange={this.changeHandler} name="EMAIL" className="required email" id="mce-EMAIL" placeholder="Enter your email" style={emailField} />

                            <div aria-hidden="true" style={honeyPot} >
                                <input type="text" name="b_9ae21d5dd8d2f0f5acee71058_4a8e40d9cb" tabIndex="-1" value="" />
                            </div>

                            <input type="submit" value="SUBSCRIBE" name="subscribe" id="mc-embedded-subscribe" className="mc-embedded-subscribe button font-roboto text-darkblue bg-white bg-opacity-90 hover:text-white hover:bg-red hover:bg-opacity-1" onClick={this._handleClick} />
                        </div>

                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" style={errorFields}></div>
                            <div className="response" id="mce-success-response" style={successFields}></div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}
