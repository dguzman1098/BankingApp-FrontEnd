import React, { useState, useParams } from "react";
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import BillService from "../services/BillService";



const AddBillComponent = () => {

    const [status, setStatus] = useState('')
    const [payee, setPayee] = useState('') 
    const [nickname, setNickname] = useState('') 
    const [creation_date, setCreation_date] = useState('') 
    const [payment_date, setPayment_date] = useState('') 
    const [reccurring_date, setReccurring_date] = useState('') 
    const [upcoming_payment_date, setUpcoming_payment_date] = useState('') 
    const [payment_amount, setPayment_amount] = useState('')
     const [account, setAccount] = useState('')
    const {id} = useParams()

    const makEABILL = () => {
    const bill = {
        status,payee,nickname,creation_date,payment_date,reccurring_date,upcoming_payment_date, payment_amount,account
    }
        BillService.createBill(bill).then((response) =>{
            console.log(response.data)
        }).catch((error) =>{
            console.log(error)
        }) 
    }
    
    return(
        <div>


            <h1>Post A Bill</h1>
           

            <div className = "container">
                <div className = "row">
                    <div  className = "card col-md-6 offset-md-3 offset-md-3">
                        <h2 className = "text-center">Post A Bill</h2>
                        <div className = "card-body">
                            <form>


                            <div className = "form-group mb-2" >
                                    <label className = "form-label">Status </label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter First Name" 
                                    name = "status"
                                    className = "form control"
                                    value = {status}
                                    onChange = {(e) => setStatus(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2" >
                                    <label className = "form-label">Payee </label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter First Name" 
                                    name = "firstName"
                                    className = "form control"
                                    value = {payee}
                                    onChange = {(e) => setPayee(e.target.value)}
                                    >
                                    </input>
                                </div>


                                <div className = "form-group mb-2" >
                                    <label className = "form-label"> CreationDate </label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter First Name" 
                                    name = "firstName"
                                    className = "form control"
                                    value = {creation_date}
                                    onChange = {(e) => setCreation_date(e.target.value)}
                                    >
                                    </input>


                                </div> 
                                
                                
                                <div className = "form-group mb-2" >
                                    <label className = "form-label">PaymentDate </label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter First Name" 
                                    name = "firstName"
                                    className = "form control"
                                    value = {payment_date}
                                    onChange = {(e) => setPayment_date(e.target.value)}
                                    >
                                    </input>
                                </div> 
                                
                                <div className = "form-group mb-2" >
                                    <label className = "form-label"> Nickname </label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter First Name" 
                                    name = "firstName"
                                    className = "form control"
                                    value = {nickname}
                                    onChange = {(e) => setNickname(e.target.value)}
                                    >
                                    </input>
                                </div> 
                                
                                <div className = "form-group mb-2" >
                                    <label className = "form-label">ReccurringDate </label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter First Name" 
                                    name = "firstName"
                                    className = "form control"
                                    value = {reccurring_date}
                                    onChange = {(e) => setReccurring_date(e.target.value)}
                                    >
                                    </input>
                                </div> 
                                
                                <div className = "form-group mb-2" >
                                    <label className = "form-label">Upcoming Payment Date</label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter First Name" 
                                    name = "firstName"
                                    className = "form control"
                                    value = {upcoming_payment_date}
                                    onChange = {(e) => setUpcoming_payment_date(e.target.value)}
                                    >
                                    </input>
                                </div>

                            {/* First name field in my rest api */}
                                <div className = "form-group mb-2" >
                                    <label className = "form-label">Payment Amount</label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter First Name" 
                                    name = "firstName"
                                    className = "form control"
                                    value = {payment_amount}
                                    onChange = {(e) => setPayment_amount(e.target.value)}
                                    >
                                    </input>
                                </div>


                                {/* Last name field in my rest api */}
                                <div className = "form-group mb-2" >
                                    <label className = "form-label"> Account Type </label> <br/>
                                    <input type = "text" 
                                    placeholder ="Enter Last Name" 
                                    name = "lastName"
                                    className = "form control"
                                    value = {account}
                                    onChange = {(e) => setAccount(e.target.value)}
                                    >
                                    </input>
                                </div>


                                {/* <div className = "form-group mb-2" >
                                    <label className = "form-label">Employee Email</label> <br/>
                                    <input type = "email" 
                                    placeholder ="Enter Email of Employee" 
                                    name = "email"
                                    className = "form control"
                                    value = {email}
                                    onChange = {(e) => setemail(e.target.value)}
                                    >
                                    </input>
                                </div> */}

                                <button className ="btn btn-success" onClick = {(e) => makEABILL(e)}> Submit!</button>
                                <Link to = "/employees" className="btn btn-danger"> Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AddBillComponent

