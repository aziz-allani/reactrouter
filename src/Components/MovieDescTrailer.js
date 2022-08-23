import React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea } from '@mui/material';
import "../App.css";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { movieData } from "../Data";


export default function MovieDescTrailer() {

    const { id } = useParams();
    const idmovie = Number(id);
    const dataMovies = movieData.find(movie => movie.id === idmovie);


    return (
        <div className="movie-desc-tariler-container">
            <div className="movie-buuton">
                <Link to="/"><Button className="butoon-bag">Go Back</Button></Link>
            </div>
            <div className="movie-desc-container">

                <Card sx={{ maxWidth: 345, borderRadius: 0, height: 518 }} className="movie-desc-card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={dataMovies.pictureURL}
                            alt="green iguana"
                        />
                    </CardActionArea >
                </Card >

                <div className="gap-container"></div>
                <div className='trailer-ved'>
                    <iframe width="921" height="518" src={dataMovies.Trailer} title="HTML5 / CSS3 - 24 - Balise vidéo / Video Balise" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div >
            </div >

            <div className="container-desc">
                <Typography gutterBottom variant="h5" component="div">
                    {dataMovies.name}
                </Typography>
                <Typography >
                    {dataMovies.description}
                </Typography>
            </div>
        </div >
    );

}
