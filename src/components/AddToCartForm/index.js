import React,{useState} from "react";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Typography, IconButton } from '@mui/material'


function AddToCartDialog({product}) {
    const [added, setAdded] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [open, setOpen] = useState(false);

    product = {
        name:'TestComputer'
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleAddClick = () => {
        setAdded(true);

    }

    const handleSubmit = (e) => {
        handleAddClick()
        setQuantity(e.target.value)
        handleClose()
    }

    return (
        <div product={product}>
            
            <IconButton onClick={handleOpen}>
                <AddShoppingCartOutlined sx={{color:"secondary.dark"}} />
            </IconButton>
            
        
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add To Cart</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {`Would You Like To Add ${product.name} To Your Cart?`}
                    </DialogContentText>
                    <form typeof="submit" onSubmit={handleSubmit} >
                        <TextField autofocus margin='dense' id='addQuantity' label='Quantity' name='addQuantity' variant="outlined" />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleSubmit}>Add To Cart</Button>
                    <Button variant='outlined' onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
            </div>
    )
}

export default AddToCartDialog