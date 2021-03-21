// Packages
import React, {useState} from 'react';
import * as CSS from 'csstype';
// jQuery
import $ from 'jquery';

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

// CSS for success response fields
const errorFields: CSS.Properties = {
    display: 'none',
    fontFamily: 'roboto',
    color: '#ffffff',
    backgroundColor: '#dd5569',
    padding: '0 0.415rem',
    lineHeight: '2.2rem',
};

// CSS for success response fields
const successFields: CSS.Properties = {
    display: 'none',
    fontFamily: 'roboto',
    color: '#ffffff',
    backgroundColor: '#a1a1aa',
    padding: '0 0.415rem',
    lineHeight: '2.2rem',
};

export const ContactForm = () => {
    const [state, setState] = useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;

        $('#submit').html("Sending...")

        fetch(`${process.env.REACT_APP_API_URL}/messages`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
        .then((response) => {

            $('#submit').html("Send")

            if (response.ok) {

                $('#cf-success-response').empty().text("Message sent!").css('display', 'block').delay(5000).fadeOut()

                setTimeout(function(){

                    $('#contact-form').find("input[type=text], input[type=email], textarea").val("")

                }, 5000)

            } else {

                $('#cf-error-response').empty().text("Sorry, something went wrong. Message not sent.").css('display', 'block').delay(5000).fadeOut()
            }

        })
        .catch((error) => {
            $('#submit').html("Send")
            $('#cf-error-response').empty().text("Sorry, something went wrong. Message not sent.").css('display', 'block').delay(5000).fadeOut()
        })
    }

    return (
        <>
            <form
                id="contact-form"
                name="contact-form"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}>
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact-form" />
                <div hidden>
                    <label className="block">
                        Don’t fill this out: <input name="bot-field" onChange={handleChange} />
                    </label>
                </div>

                <div className="bg-white">

                    <div className="grid grid-cols-6 gap-6">

                        <div className="col-span-6 sm:col-span-3">
                            <input type="text" name="first_name" id="first_name" className="mt-1 focus:border-red-100 block w-full shadow-sm sm:text-sm font-roboto md:text-base border-darkblue rounded-md" placeholder="First Name" onChange={handleChange} required />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <input type="text" name="last_name" id="last_name" className="mt-1 focus:border-red-100 block w-full shadow-sm sm:text-sm font-roboto md:text-base border-darkblue rounded-md" placeholder="Last Name" onChange={handleChange} />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <input type="email" name="email" id="email" className="mt-1 focus:border-red-100 block w-full shadow-sm sm:text-sm font-roboto md:text-base border-darkblue rounded-md" placeholder="Email" onChange={handleChange} required />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <input type="text" name="phone" id="phone" className="mt-1 focus:border-red-100 block w-full shadow-sm sm:text-sm font-roboto md:text-base border-darkblue rounded-md" placeholder="Phone" onChange={handleChange} />
                        </div>

                        <div className="col-span-6">
                            <input type="text" name="subject" id="subject" className="mt-1 focus:border-red-100 block w-full shadow-sm sm:text-sm font-roboto md:text-base border-darkblue rounded-md" placeholder="Subject" onChange={handleChange} />
                        </div>

                        <div className="col-span-6">
                            <div className="mt-1">
                                <textarea id="body" name="body" rows="6" className="shadow-sm focus:border-red-100 mt-1 block w-full sm:text-sm font-roboto md:text-base border-darkblue rounded-md" placeholder="Your message" onChange={handleChange} required></textarea>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 col-span-6 gap-4">

                            <div className="col-span-7 md:col-span-2">
                                <button id="submit" className="bg-red hover:bg-blue text-white text-base font-roboto rounded-md w-full" type="submit">Send</button>
                            </div>

                            <div className="col-span-7 md:col-span-5" id="cf-responses">
                                <div className="response" id="cf-error-response" style={errorFields}></div>
                                <div className="response" id="cf-success-response" style={successFields}></div>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
