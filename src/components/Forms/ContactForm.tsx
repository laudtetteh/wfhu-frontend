import React, {useState} from 'react';

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export const ContactForm = () => {
    const [state, setState] = useState({})

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;

        fetch(`${process.env.REACT_APP_BACKEND_URL}/messages`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...state,
            }),
        })
        .then(() => alert('success'))
        .catch((error) => alert(error))
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
                          <input type="text" name="first_name" id="first_name" className="mt-1 focus:border-red-100 block w-full shadow-sm sm:text-sm font-roboto md:text-base border-darkblue rounded-md" placeholder="First Name" onChange={handleChange} />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <input type="text" name="last_name" id="last_name" className="mt-1 focus:border-red-100 block w-full shadow-sm sm:text-sm font-roboto md:text-base border-darkblue rounded-md" placeholder="Last Name" onChange={handleChange} />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <input type="text" name="email" id="email" className="mt-1 focus:border-red-100 block w-full shadow-sm sm:text-sm font-roboto md:text-base border-darkblue rounded-md" placeholder="Email" onChange={handleChange} />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <input type="text" name="phone" id="phone" className="mt-1 focus:border-red-100 block w-full shadow-sm sm:text-sm font-roboto md:text-base border-darkblue rounded-md" placeholder="Phone" onChange={handleChange} />
                        </div>

                        <div className="col-span-6">
                          <input type="text" name="subject" id="subject" className="mt-1 focus:border-red-100 block w-full shadow-sm sm:text-sm font-roboto md:text-base border-darkblue rounded-md" placeholder="Subject" onChange={handleChange} />
                        </div>

                        <div className="col-span-6">
                            <div className="mt-1">
                                <textarea id="body" name="body" rows="3" className="shadow-sm focus:border-red-100 mt-1 block w-full sm:text-sm font-roboto md:text-base border-darkblue rounded-md" placeholder="Your message" onChange={handleChange} ></textarea>
                            </div>
                        </div>

                        <div className="col-span-6 float-right">
                          <button className="bg-red hover:bg-blue text-white text-base font-roboto rounded-md" type="submit">Send</button>
                        </div>

                    </div>
                </div>
            </form>
        </>
    )
}
