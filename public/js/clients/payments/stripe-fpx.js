/*! For license information please see stripe-fpx.js.LICENSE.txt */
(()=>{var e,t,n,r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}new function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"setupStripe",(function(){r.stripeConnect?r.stripe=Stripe(r.key,{stripeAccount:r.stripeConnect}):r.stripe=Stripe(r.key);var e=r.stripe.elements();return r.fpx=e.create("fpxBank",{style:{base:{padding:"10px 12px",color:"#32325d",fontSize:"16px"}},accountHolderType:"individual"}),r.fpx.mount("#fpx-bank-element"),r})),o(this,"handle",(function(){document.getElementById("pay-now").addEventListener("click",(function(e){document.getElementById("pay-now").disabled=!0,document.querySelector("#pay-now > svg").classList.remove("hidden"),document.querySelector("#pay-now > span").classList.add("hidden"),r.stripe.confirmFpxPayment(document.querySelector("meta[name=pi-client-secret").content,{payment_method:{fpx:r.fpx},return_url:document.querySelector('meta[name="return-url"]').content})}))})),this.key=t,this.errors=document.getElementById("errors"),this.stripeConnect=n}(null!==(e=null===(t=document.querySelector('meta[name="stripe-publishable-key"]'))||void 0===t?void 0:t.content)&&void 0!==e?e:"",null!==(n=null===(r=document.querySelector('meta[name="stripe-account-id"]'))||void 0===r?void 0:r.content)&&void 0!==n?n:"").setupStripe().handle()})();