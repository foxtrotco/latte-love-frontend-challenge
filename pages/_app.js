import { QueryClient, QueryClientProvider } from 'react-query';

import { GlobalStyles } from '@components';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <Component {...pageProps} />
        </QueryClientProvider>
    );
};

export default MyApp;
