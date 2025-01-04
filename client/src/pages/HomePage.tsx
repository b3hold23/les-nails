import { Link } from "react-router-dom";

const GalleryButton = () => {
    return (
        <Link to="/gallery">
            <button>View More</button>
        </Link>
    );
};
const HomePage = () => {
    return (
        <div>
            <h1>About me</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam esse accusamus illum libero odit deleniti exercitationem odio, in error, suscipit temporibus facere. Quis sed impedit molestias rem dignissimos beatae voluptatibus.</p>

            <h1>Gallery
            <GalleryButton />
            </h1>

            <h1>Reviews:</h1>
        </div>
    );
}

export default HomePage;