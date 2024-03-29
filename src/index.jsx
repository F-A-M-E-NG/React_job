import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from './redux/';
import * as serviceWorker from './serviceWorker';
import Config from './configure';
import Spinner from './components/spinner/Spinner';
import "./assets/fonts/feather/css/feather.css";
import "./assets/fonts/fontawesome/scss/font-awesome.scss";
import "./assets/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import 'react-owl-carousel2/src/owl.carousel.css';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/animate.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
// import "./assets/css/HTWF/style.css"
// import	"./assets/css/HTWF/css/content-box.css"
// import "./assets/css/HTWF/css/image-box.css"
// import "./assets/css/HTWF/css/animations.css"
// import "./assets/css/HTWF/css/components.css"
// // import "./assets/css/HTWF/scripts/flexslider/flexslider.css"
// import "./assets/css/HTWF/scripts/magnific-popup.css"
// import "./assets/css/HTWF/scripts/php/contact-form.css"
// import "./assets/css/HTWF/scripts/social.stream.css"
// import "./assets/css/skin.css"
// import "./assets/css/HTWF/css/style.css"

const App = lazy(() => import("./App/App"))

const root = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={Config.basename}>
      <Suspense fallback={Spinner}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  root
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
