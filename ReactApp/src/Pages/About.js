import React from 'react'
import Layout from '../Component/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{ my: 15, textAlign: "center" , p:2 , 
"$ h4 " : {
  fontWeight: "bold" , 
  my : 2,
  fontSize : "2rem",

  "$ p": {

textAlign: "justify",

  } , 
  "@media (max-width:600px)" :{
    mt:0, "$ h4":{
      fontSize : '1.5rem',
    }
  }
}

       }}>
        <Typography variant="h4"> Wellcome  To My Resturant

        </Typography> <br />
        <p>  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic neque sed totam! Ipsa neque, earum voluptatum atque vel quidem voluptatibus soluta architecto itaque laborum. Saepe mollitia cumque officiis quam dolor. Ipsa harum totam, eius iusto magni fuga nam aspernatur vero natus ratione consequuntur ea ullam vel, veniam, sed nostrum! Aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quae voluptatem delectus esse repudiandae impedit deserunt odit atque, nisi quasi.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dicta esse velit totam repudiandae suscipit laboriosam quam voluptates maiores natus dignissimos perspiciatis, fuga nobis voluptate! Voluptatum eaque facilis et, quae reprehenderit molestiae enim harum dicta, quo debitis quaerat. Doloremque inventore beatae iure iusto rem dolorem alias tempore fugit, temporibus odio?</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio reiciendis veniam facere, provident eveniet temporibus magnam voluptatum sed magni quis illo totam eaque quibusdam rem repellat quidem quasi quae numquam expedita blanditiis laborum vitae neque! Consequatur at corporis ut animi, eius, id necessitatibus voluptatibus vitae sed nobis natus. Facere beatae mollitia quis autem quibusdam, neque minus nihil molestiae maxime ab qui excepturi ad eaque magnam ipsum provident rem, veniam similique natus perspiciatis quasi voluptates! Nostrum quasi cupiditate ea cumque iste.</p>
      </Box>
    </Layout>
  )
}

export default About