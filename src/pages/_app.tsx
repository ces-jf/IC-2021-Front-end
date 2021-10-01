import { AppWrapper } from '../helpers/state';
import '../styles/style.css';

function MyApp ({ Component, pageProps }) {
  return(
    <AppWrapper>
        <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;