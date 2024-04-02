import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import { images } from '../utils/image';

const Card = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [movieDetails, setMovieDetails] = useState({});
    const [movieVideo, setMovieVideo] = useState({});
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("user")) {
                setIsLoggedIn(true);
            }
            const getMovieDetails = async () => {
            try {
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=7bbf8e63fe34ab1b017214ade09357d1`
                );
                setMovieDetails(data);
            } catch (error) {
                console.error(error);
            }
        };
    
        const getMovieVideo = async () => {
            try {
                const { data } = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=7bbf8e63fe34ab1b017214ade09357d1`
                );
                console.log(data);
                setMovieVideo(data.results[0].key || data.results[0].key);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        getMovieDetails();
        getMovieVideo();
    }, [id, isLoggedIn]);

    return (
        <div>
            {loading ? (
                <div className="h-full text-white flex justify-center items-center">
                    <span className="w-20 h-20">
                        <img src={images.loadingIc} alt="" />
                    </span>
                </div>
            ) : (
                movieDetails.title && (
                    <div className="relative w-full lg:px-14 text-white flex justify-center items-center">
                        <img
                            className="w-full max-h-screen object-cover object-top absolute z-[4] opacity-5 "
                            src={`http://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                            alt=""
                        />
                        <div className={` flex flex-col xl:flex-row`}>
                            <div className="relative z-30 w-full xl:w-1/2 h-[20rem] lg:h-[30rem] xl:h-auto">
                                {!isLoggedIn && (
                                    <div className="absolute flex font['Inter'] flex-col text-xl space-y-3 items-center justify-center w-full h-full bg-black bg-opacity-85">
                                        <p>You are not signed in...</p>
                                        <button
                                            onClick={() => {
                                                navigate("/login", {
                                                    state: { prevLocation: location.pathname },
                                                });
                                            }}
                                            className="bg-primary py-1 text-2xl font-black px-3 rounded-lg">
                                            Login
                                        </button>
                                        <p>to play the movie</p>
                                    </div>
                                )}
                                <YouTube
                                    className="z-30 w-full h-full object-cover object-top"
                                    videoId={movieVideo}
                                    opts={{
                                            height: "100%",
                                            width: "100%",
                                            playerVars: {
                                            autoplay: 0,
                                            modestbranding: 1,
                                            loop: 1,
                                        },
                                    }}
                                />
                            </div>
                            
                        </div>
                    </div>
                )
            )}
        </div>
    )
}

export default Card;