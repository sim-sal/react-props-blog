import style from "../css/modules/Posts.module.scss"

function getImgUrl(name) {
    return new URL(`../assets/imgs/${name}`, import.meta.url).href;
}

const Post = ({ title, image, content, tags, published }) => {
    if (!published) {
        return null;
    }

    // Immagine di default se non è presente un'immagine specifica
    const imageUrl = image ? getImgUrl(image) : 'https://placehold.co/300x200';

    // Colori per i tag
    const tagColors = {
        LifeStyle: 'green',
        MotivationMonday: 'pink',
        PicOfTheDay: 'yellow',
        NaturePhotography: 'purple',
        AdventureTime: 'orange',
        MusicIsLife: 'blue',
        MusicInspiration: 'red',
        TravelPhotography: 'cyan',
        VacationMode: 'brown',
        FilmFestival: 'lime',
        DigitalWorld: 'teal',
        SocialMedia: 'indigo'
    };

    return (
        <div className={`card my-3 ${style.mod_card}`}>
            <img className={style.card_img} src={imageUrl} alt="Post" />
            <h2>{title}</h2>
            <p>{content}</p>
            <div className="row p-4">
                {Array.isArray(tags) &&
                    tags.map((tag, index) => (
                        <span className="col-12"
                            key={index}
                            style={{
                                backgroundColor: tagColors[tag] || 'gray',
                                color: 'white',
                                padding: '5px',
                                margin: '2px',
                                borderRadius: '5px',
                            }}
                        >
                            #{tag}
                        </span>
                    ))}
            </div>
        </div>
    );
};

export default Post;