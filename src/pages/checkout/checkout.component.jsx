import React from 'react'

import './checkout.styles.scss'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

const Checkout = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                Product
            </div>
            <div className='header-block'>
                Description
            </div>
            <div className='header-block'>
                Quantity
            </div>
            <div className='header-block'>
               Price
            </div>
            <div className='header-block'>
               Remove
            </div>
        </div>
        {
          cartItems.map(
            cartItem => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
          )  
        }

        <div className='total'>
            Total : ${total}
        </div>

        <div className='test-warning'>
          *Please use following credit card credentials for checking stripe account*
          <br/>
          4242 4242 4242 expiry : 01/22 cvv:123
        </div>
        <StripeCheckoutButton price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(Checkout);