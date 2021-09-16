import { getLattes } from '@api';
import { Navigation, LatteList } from '@components';

const Home = (props) => {
    const { lattes, error } = props;

    return (
        <div>
            <Navigation />
            <LatteList initialData={lattes} />
        </div>
    );
};

export const getServerSideProps = async () => {
    const { data: lattes, error } = await getLattes();

    return {
        props: {
            lattes,
            error,
        },
    };
};

export default Home;
