// Packages
import React, { Component, setState } from 'react';
import CSS from 'csstype';
// jQuery
import $ from 'jquery';

const hiddenFields: CSS.Properties = {
    display: 'none'
};

const honeyPot: CSS.Properties = {
    position: 'absolute',
    left: '-5000px',
};

const emailField: CSS.Properties = {
    width: '100%',
    height: '35px',
    paddingRight: '50px',
    border: '1px solid #2D5F6E',
    borderRadius: '3px',
    paddingLeft: '15px',
    fontFamily: 'roboto',
    fontSize: '16px',
    backgroundColor: 'transparent'
};

const submitButton: CSS.Properties = {
    marginLeft: '-25%',
    height: '35px',
    width: '25%',
    background: '#2D5F6E',
    color: 'white',
    border: '0',
    WebkitAppearance: 'none',
    fontFamily: 'roboto',
    fontSize: '13px',
    borderRadius: '0 3px 3px 0'
};

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
                    if (data.result != "success") {
                        // Something went wrong, do something to notify the user. maybe alert(data.msg);
                        $('#mce-error-response').text('Something went wrong.').show().delay(5000).fadeOut();
                    } else {
                        // It worked, carry on...
                        $('#mce-success-response').text('Thank you for subscribing!').show().delay(5000).fadeOut();
                    }
                }
            });
        }
    }

    render() {

        return (
            <div id="mc_embed_signup">
                <form action="https://gmail.us1.list-manage.com/subscribe/post-json?u=9ae21d5dd8d2f0f5acee71058&amp;id=4a8e40d9cb&amp;c=?"
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

                            <input type="submit" value="SUBSCRIBE" name="subscribe" id="mc-embedded-subscribe" className="button" style={submitButton} onClick={this._handleClick} />

                        </div>

                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" style={hiddenFields}></div>
                            <div className="response" id="mce-success-response" style={hiddenFields}></div>
                        </div>


                    </div>

                </form>
            </div>
        )
    }
}
