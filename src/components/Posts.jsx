import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import { IMAGE_PATH } from "../constants/constans";
export default function Posts() {
  return (
    <>
      <Card sx={{ margin: 5 }} elevation={16}>
        <CardHeader
          avatar={
            <Avatar
              src={IMAGE_PATH}
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
            ></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="John Doe"
          subheader="March 14, 2024"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/naruto-uzumaki-only-kills-one-villain-in-the-entire-series-featured.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteIcon />}
              checkedIcon={<FavoriteIcon sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
