//APP PAGE

//IMPORTING
//PAYPAL
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
//SNACKBAR PROVIDER
import { SnackbarProvider } from 'notistack';
//REACT
import { useEffect } from 'react';
//STYLES
import '../styles/globals.css';
//UTILS
import { StoreProvider } from '../utils/Store';

//MY APP
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  //RETURN
  return (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <StoreProvider>
        <PayPalScriptProvider deferLoading={true}>
          <Component {...pageProps} />
        </PayPalScriptProvider>
      </StoreProvider>
    </SnackbarProvider>
  );
}

//EXPORTING MYAPP
export default MyApp;
