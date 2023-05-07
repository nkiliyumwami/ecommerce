import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";

export default function NewProduct() {
    //state for form inputs
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    //function to create prod when submitting the form: this need to be async await as we are working with server/api
    const createProduct = async (e) => {
        e.preventDefaults;
        //data to be sent/created
        const data = {title, description, price}
        await axios.post('/api/products', data)

    }
    return (
        <Layout>
            <form onSubmit={createProduct}>
                <h1>New Product</h1>
                <label>Product Name</label>
                <input type="text" placeholder="Product Name..." value={title} onChange={ev =>setTitle(ev.target.value)}/>
                <label>Description</label>
                <textarea  placeholder="Description..." value={description} onChange={ev =>setDescription(ev.target.value)}></textarea>
                <label>Price (in USD)</label>
                <input type="number" placeholder="Price..." value={price} onChange={ev =>setPrice(ev.target.value)} />
                <button type="submit" className="btn-primary">Save</button>
            </form>
        </Layout>
    )
}