import Router from 'react-router';
import React from 'react';
// import navbar, footer, all Components 

export default Index = function(){
  return (
    <div>
      <Navbar />
        <Route exact path="/" component={AllProducts}/>
        <Route path="/product/:productId" component={SingleProduct}/>
        <Route exact path="/profile" component={UserProfile}/> 
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={Checkout} /> 
        <Route path="/order/:orderId" component={SingleOrder} /> 
        <Route component={NotFound} /> 
      <Footer />
    </div>
  )
}