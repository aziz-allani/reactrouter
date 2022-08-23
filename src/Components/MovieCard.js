import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";


const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ width: "15rem", height: "30rem", backgroundColor: "black", color: "white" }}>
      <CardMedia
        component="img"
        height="140"
        image={movie.pictureURL}
        alt="movie Picture"
        sx={{ height: "25rem" }}
      />
      <CardContent>
        <div className='movie-rating'>

          <Rating name="read-only" value={movie.rating} readOnly />
        </div>
        <Typography gutterBottom variant="h5" component="div">
          {movie.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.universe}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
