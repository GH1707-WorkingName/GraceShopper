import {Route, Switch} from 'react-router';
import React from 'react';

// import navbar, footer, all Components

export default Index = function(){
  return (
    <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={AllProducts}/>
          <Route path="/products/:productId" component={SingleProduct}/>
          <Route exact path="/profile" component={UserProfile}/>
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/order/:orderId" component={SingleOrder} />
          <Route component={NotFound} />
        </Switch>
      <Footer />
    </div>
  )
}
