import { Form, useActionData } from "react-router"

export default function Contact() {
    const errors = useActionData();

    return (
        <>
            <h1>Contact</h1>
            <Form method="post" >
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" placeholder="Name:" />
                    <small>{errors && errors?.name?.errors[0]}</small>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder="Email:" />
                    <small>{errors && errors?.email?.errors[0]}</small>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" placeholder="Message:"></textarea>
                    <small>{errors && errors?.message?.errors[0]}</small>
                </div>
                <button type="submit">Submit</button>
            </Form>
        </>
    )
}