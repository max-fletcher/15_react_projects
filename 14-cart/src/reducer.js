const reducer = (state, actions) => {
   if(actions.type === 'CLEAR_CART'){
      return {...state, cart: []}
   }

   if(actions.type === 'REMOVE_ITEM'){
      // filter items from current state's cart(i.e state.cart) and filter and get items that don't match the id sent as payload. Then using destructuring, 
      // set new cart state
      return {...state, cart: state.cart.filter((cartItem)=>{return cartItem.id !== actions.payload })}
   }

   if(actions.type === 'INCREASE_ITEM'){
      // loop through each item and create a new cart array(newCart). Inside map, for each item, if the id matches, then destructure and increase amount, and return the destructured value. if id is not found, it will return the original item, hence the original cart. Finally, use destructure to replace previous cart array.
      let newCart = state.cart.map((eachItem) => {
         if(eachItem.id === actions.payload){
            return {...eachItem, amount: eachItem.amount++ }
         }
         return eachItem
      })
      return {...state, cart: newCart}
   }

   if(actions.type === 'DECREASE_ITEM'){
      // loop through each item and create a new cart array(newCart). Inside map, for each item, if the id matches, then destructure and decrease amount, and return the destructured value. if id is not found, it will return the original item, hence the original cart. Also here, we are running the filter method after map so after map finishes, we use run the array through a filter function and for those elements that have amount greater than 0, we return a cart with those items. Finally, use destructure to replace previous cart array.
      let newCart = state.cart.map((eachItem) => {
         if(eachItem.id === actions.payload){
            return {...eachItem, amount: eachItem.amount-- }
         }
         return eachItem
      }).filter((eachItem) => {
         return eachItem.amount > 0
      })
      return {...state, cart: newCart}
   }

   // This action will run in a special way. When the state value is changed, we need to re-calculate the totals from scratch using total = 0 and amount = 0. Then return the calculated values.
   if(actions.type === 'GET_TOTALS'){
      // Here, instead of running 2 reduce loops, we are returning an object with 2 variables and storing them in destructured variables. Hence, we just write less code, but the variables are separate nonetheless.
      // In the reduce callback(1st param), the first callback param(cartTotal) is the variable used to store the result and return. The 2nd is the array we will work with(the object i.e cartItem). The 2nd Param(i.e {total: 0, amount: 0}) is what we start with and what we can modify as we loop through the cartItem array. In one way, the cartTotal and the 2nd Param(i.e {total: 0, amount: 0}) are the same entity, just at different states during looping.)
      let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
         const {price, amount} = cartItem
         console.log(price, amount, cartTotal)

         cartTotal.amount += amount // add total to cartTotal.amount in the object

         // When the cartItem state changes, we calculate the price of all items via multiplication and sum up the values in the next line
         const itemTotal = price*amount
         cartTotal.total += itemTotal // sum up the values of each items*price

         return cartTotal
      }, {
         total: 0,
         amount: 0
      })

      total = parseFloat(total.toFixed(2)) // this is to fix floating point values generated during multiplications

      // we are destructuring and storing the total and amount 
      return {...state, total, amount} // here, we are 
   }

   // turns loading to true(duh!)
   if(actions.type === 'LOADING'){
      return {...state, loading: true}
   }

   // payload here is the array of JSON objects coming from 'url' and it is called from context.js. Since it is initialized with App.js, it will
   // fetch data and then the entire app component will be rendered. We destructure the initial state and set the cart value equal to payload.
   // Also, we set loading to false to get rid of the 'loading' html and show the data and page.
   if(actions.type === 'DISPLAY_ITEMS'){
      return {...state, cart:actions.payload, loading: false}
   }

   return state
}

export default reducer