import './App.css';
import React, { useState } from "react"
import axios from 'axios';

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [moblie, setMoblie] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");


    const data = async (e) => {
        // e.preventDefault();
        //consol.log("hii");

        axios.post('http://localhost:4000/std', {
            name: name,
            email: email,
            mobile: moblie,
            password: password,
            gender: gender,
            address: address,
            city: city,
            pincode: pincode
        })

    }


    return (
        <>
            <h1>Sign</h1>
            <fieldset>
                <form onSubmit={data}>
                    <div>
                        <label htmlFor="Name">Name :- </label>
                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div><br />
                    <div>
                        <label htmlFor="Email">Email :- </label>
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div><br />
                    <div>
                        <label htmlFor="Moblie">Moblie :- </label>
                        <input type="number" name="moblie" value={moblie} onChange={(e) => setMoblie(e.target.value)} />
                    </div><br />
                    <div>
                        <label htmlFor="Password">Password :- </label>
                        <input type="password" name="name" pass={password} onChange={(e) => setPassword(e.target.value)} />
                    </div><br />
                    <div>
                        <label htmlFor="Gender">Gender :- </label>
                        <input type="radio" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} />female
                        <input type="radio" name="gender" value={gender} onChange={(e) => setGender(e.target.value)} />male
                    </div><br />
                    <div>
                        <label htmlFor="Address">Address :- </label>
                        <textarea name="add" id="add" col="30" rows="5"    value={address} onChange={(e) => setAddress(e.target.value)} >
                            
                        </textarea>
                    </div><br />
                    <div>
                        <label htmlFor="City">City :- </label>
                        <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div><br />
                    <div>
                        <label htmlFor="Pincode">Pincode :- </label>
                        <input type="number" name="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                    </div><br />

                    <div>
                        <button type="submit">Submit</button>
                    </div>

                </form>
            </fieldset>
        </>
    )
}
export default Form;