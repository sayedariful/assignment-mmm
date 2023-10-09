import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";

const Home = () => {
    const cards = useLoaderData()
    console.log(cards)
    return (
        <div>
            <h2 className="text-3xl text-center">WHO WE SERVE</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {
                cards?.map(card => <Cards key={card.id} card={card}></Cards>)
            }
            </div>
        </div>
    );
};

export default Home;