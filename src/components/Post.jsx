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
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <img src={imageUrl} alt="Post" style={{ maxWidth: '100%' }} />
            <h2>{title}</h2>
            <p>{content}</p>
            <div>
                {Array.isArray(tags) &&
                    tags.map((tag, index) => (
                        <span
                            key={index}
                            style={{
                                backgroundColor: tagColors[tag] || 'gray',
                                color: 'white',
                                padding: '5px',
                                margin: '2px',
                                borderRadius: '5px',
                            }}
                        >
                            {tag}
                        </span>
                    ))}
            </div>
        </div>
    );
};

export default Post;