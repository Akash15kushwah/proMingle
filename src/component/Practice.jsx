    import { Box, Button, Card, TextField } from '@mui/material'
    import React, { useState } from 'react'

    function Practice() {
        const [data, setData] = useState("");

         const handlechange = (e) => {
             setData(e.target.value);
            //  console.log(data);
         }

         const handlesubmit = (e) => {
            e.preventDefault();
            console.log(data);
            setData("");
         }
    return (
        <Box sx={{display: 'flex',height: "45vh", justifyContent: "center"}}>
            <Card>
        <form onSubmit={handlesubmit}>
            <Box sx={{display: "flex",flexDirection: 'column', alignItems: "center",justifyContent: 'cenetr',padding: 2, gap: 2}}>
        <TextField id="name" onChange={handlechange} value={data} name='name' variant="outlined" type='text' />
        <Button variant="contained" type='submit'>Contained</Button>
            </Box>
        </form>
            </Card>
        </Box>
    )
    }

    export default Practice
