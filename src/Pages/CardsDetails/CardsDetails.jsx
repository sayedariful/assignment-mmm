import { Link, useParams } from "react-router-dom";

const CardsDetails = () => {

    const {id, image} = useParams();
    return (
        <div>
            <div className="py-10">
                <h2 className="text-2xl">Cards Details</h2>
                <h2>{id}</h2>

                <div className="w-3/4 mx-auto">
                    <figure className="mx-auto">
                        <img src="https://i.ibb.co/1sfsNQf/doctor1.jpg" alt="" />
                    </figure>
                    <p className="mt-4">It sounds like you want authorized services by technicians who can repair various medical equipment. Repairing medical equipment requires proper administration and technology. Here are some suggestions that may help you find such services:</p>

                    <Link to='/'><button className="btn btn-primary mt-4">Goto to home</button></Link>
                </div>


                
            </div>
        </div>
    );
};

export default CardsDetails;