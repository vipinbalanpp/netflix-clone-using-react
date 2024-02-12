import Main from "../Main";
import requests from "../Request";
import Row from "../Row";
const Home = () => {
    return (
            <>
                <Main/>
                <Row rowId='1' title='UpComing' fetchURL={requests.requestUpcoming} />
                <Row rowId='2' title='Popuar' fetchURL={requests.requestPopular} />
                <Row rowId='3' title='Trending' fetchURL={requests.requestTrending} />
                <Row rowId='4' title='TopRated' fetchURL={requests.requestTopRated} />
                <Row rowId='5' title='Horror' fetchURL={requests.requestHorror} />
            </>
           
    )
}
export default Home;