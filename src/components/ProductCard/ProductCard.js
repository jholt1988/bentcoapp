import * as react from 'react';
import { styled } from '@mui/material/styles';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Box, 
    IconButton 
} from '@mui/material';
import primaryTheme from '../../theme'


    const expand = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));
const ProductCard = () => {
    const [expanded, setExpanded] = React.useState(false);
    const {productName, productDescription} = products
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Box theme={primaryTheme}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader productname={productName}>
                    <Typography variant='h5'>
                        {productName}
                      </Typography>
                </CardHeader>
                <CardMedia>

                </CardMedia>
                <CardContent description={productDescription}>
                    <Typography>
                        {productDescription}
                    </Typography>
                </CardContent>
                

            </Card>
     </Box>
 )
}

export default ProductCard