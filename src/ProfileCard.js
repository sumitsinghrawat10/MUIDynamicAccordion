import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const ProfileCard = (props) => (
  <Card style={{display:"flex",flexDirection:"column", justifyContent:'center',width:"100px", height:"100px" }} >
    <Image src={props.imageUrl}/>
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.usename}</span>
      </Card.Meta>
     
    </Card.Content>
   
  </Card>
)

export default ProfileCard;
