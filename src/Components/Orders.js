import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import { useStateValue } from '../StateProvider'
import Order from './Order';
import './Orders.css'

function Orders() {
  const [{ basket, user }, dipatch] = useStateValue();
  const [orders, setOrders] = useState();

  useEffect(() => {
      //if function ensures that the user is there which means there is a person that is logged in or else it would execute else statement
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [user])


    return (
        <div className='orders'>
            <h1>Your Orders</h1>
{/* this line of code maps through every item in the basket which is made in order component */}
            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders
