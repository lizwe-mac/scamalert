import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import {Link} from 'react-router-dom'


const Introduction = () => {
  return (
    <Stack direction='column' alignItems='left' maxWidth={600}> 
        <Typography align='center' fontWeight={800} fontFamily='montserrat' mt={1.3} variant="h2" component="h2">
            Reporting a scam
        </Typography>
        <Typography align='left' fontWeight={800} fontFamily='montserrat' mt={1.3} variant="h5" component="h5">
            Why report scam?
        </Typography>
        <Typography align='left' fontWeight={400} fontFamily='montserrat' mt={1.3} variant="h6" component="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fugit veniam, dignissimos officiis ipsam id distinctio sapiente quae ratione sunt earum adipisci. Fuga, laborum. Dignissimos illum odit delectus dolorum iusto?
        </Typography>
        <Typography align='left' fontWeight={800} fontFamily='montserrat' mt={1.3} variant="h5" component="h5">
            How the reporting works
        </Typography>
        <Typography align='left' fontWeight={400} fontFamily='montserrat' mt={1.3} variant="h6" component="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fugit veniam, dignissimos officiis ipsam id distinctio sapiente quae ratione sunt earum adipisci. Fuga, laborum. Dignissimos illum odit delectus dolorum iusto?
        </Typography>
        <Typography align='left' fontWeight={800} fontFamily='montserrat' mt={1.3} variant="h5" component="h5">
            Privacy policy
        </Typography>
        <Typography align='left' fontWeight={400} fontFamily='montserrat' mt={1.3} variant="h6" component="h6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fugit veniam, dignissimos officiis ipsam id distinctio sapiente quae ratione sunt earum adipisci. Fuga, laborum. Dignissimos illum odit delectus dolorum iusto?
        </Typography>
        <Link style={{border:1, padding:'10px', alignSelf:'flex-end'}} to='/report'><Button variant="contained"  sx={{fontFamily:'montserrat', mt:5, bgcolor:'#070d25', alignSelf:'flex-end'}}>next</Button></Link>
    </Stack>
  )
}

export default Introduction