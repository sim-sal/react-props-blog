import listaPost from "../posts.json"
import Post from './Post';

function getImgUrl(name) {
    return new URL('../assets/imgs/' + name, import.meta.url).href;
}

export default function PostsList() {
    return (
        <div className="row">
            {listaPost.map((post, i) => (
                <div key={"post_" + i} className="col-4 text-center">
                    <Post {...post} />
                </div>
            ))}
        </div>
    );
}
