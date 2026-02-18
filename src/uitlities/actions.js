import { redirect } from "react-router";
import { z } from "zod/v4";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"), //z.email({ pattern: /^[a-zA-Z]+$/ }) //z.string().min(2, "Name is required").regex(/^[a-zA-Z]+$/, "Name must contain only letters")
    email: z.email().min(6, "Invalid email"), //z.string().email("Invalid email address").min(1, "Email is required")
    message: z.string().min(1, "Message is required") //.optional()
});



export async function handleSubmit({ request }) {

    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());


    const result = contactSchema.safeParse(data)

    if (!result.success) {
        const errors = z.treeifyError(result.error)

        return errors.properties
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(result.data)
    })
    if (!response.ok) {
        throw new Error("Could not save data");
    }
    redirect("/tak")

}