import React, {useState} from 'react'
import { Card, CardContent, CardMedia, CardHeader, Typography, CardActions, IconButton, Collapse, Avatar } from '@mui/material';
import ExpandMoreIcon  from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { styled } from '@mui/material/styles';
import AddToCartDialog from '../AddToCartForm';

function ProductCard({ product}) {
    const [expanded, setExpanded] = useState(false)
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    product = {
        name: "Test Computer",
        price: 1200,
        manufactuer: "Sony",
        quantity: 20,
        shortDesc: "A top of the line test"
    }
    const handleExpandClick = () => {
    setExpanded(!expanded)
    }
    return (
        <Card sx={{  maxWidth:"450px" , boxShadow: "20, 15, 25, 30", }}>
            <CardHeader
                avatar={<Avatar aria-label='product'></Avatar>}
                action={<IconButton aria-label="settings">
                    <MoreVertIcon sx={{color:'secondary.dark'}} />
                </IconButton>}
                productname={<Typography variant='h4'>{product.name}</Typography>}
            />
            <CardMedia
                component='img'
                src={product.img}
                alt={product.name}
                width='150'
                height='100'
            />
            <CardContent>
                <Typography variant='h6' color='secondary.dark' >
                    Price:{product.price}
                    
                </Typography>
                <Typography variant='h6' color="theme.font.secondary" >
                
                    Manufacturer:{product.vendor}

            
                </Typography>
                <Typography variant='h6' color="theme.font.secondary" >
                    Quantity:{product.quantity}
                
                </Typography>
                <span>
                    <Typography variant='h6' sx={{ color:"#fff" }} >
                    {product.shortDesc}
                    </Typography>
                    </span>
                <IconButton aria-label='Add To Wish List'>
                    <FavoriteIcon sx={{color:"secondary.dark"}} />
                </IconButton>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label='Show More'
                >
                    <ExpandMoreIcon sx={{color:"secondary.dark"}} />
                </ExpandMore>
                
                    <AddToCartDialog product={product} />

            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
                <CardContent>
                <Typography paragraph>
                    {product.description}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}

export default ProductCard