import { api } from "../../utils/api";
import { useState, useEffect } from "react";
import { textDots } from "../../utils/textDots";
export function TrendingAllPractice(props) { 
    const {byType, byTime, title} = props;
    const [loading, setLoading] = useState(false);
    const [movie,setMovie] = useState([]);
    async function apiResponse() {
        setLoading(true);
        const response = await api.get(`/trending/${byType}/${byTime}`,
        {params:
        {
            api_key: "a979f69c99c2d7a91357437fe8871523"
        }}
        );
        setLoading(false);
        setMovie(response.data.results);
    }
    function renderTitle(item) {
        const {original_name, original_title} = item;
        if (original_name) {
            return <h3>{original_name}</h3>
        } else{
            return <h3>{original_title}</h3>
        }
    }
    function renderFarm() {
        return movie.map(function(item){
            const {poster_path, release_date, overview, vote_average, id, profile_path, name} = item;
            if(byType === "person"){
                return(
                    <div key={id}>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${profile_path}`}/>
                        </div>
                        <p>
                            {name}
                        </p>
                    </div>
                )
            }else{
                return (
                    <div key={id}>
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                        </div>
                        <p>
                            {renderTitle(item)}
                        </p>
                        <p>
                            {release_date}
                        </p>
                        <p>
                            {vote_average}
                        </p>
                        <p>
                            {textDots(overview, 80)}
                        </p>
                    </div>
                )
            }
        })
    }
    useEffect( function() {
        apiResponse()
    }, [])
    return(<div>
        <h3>{title}</h3>
        <div className="">
            {loading === true ? <span>Loading...</span> : renderFarm()}
        </div>
        </div>
    )
}