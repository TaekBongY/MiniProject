import React from 'react'
import styled from 'styled-components'
import IsOnline from './IsOnline'

const Card = styled.div`
    background-color: black;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 16px;
    margin: 16px;
`
const CardAge = styled.p`
    color: #fff;
    font-size: 16px;
    `


const ProfileCard = ({name,age,isOnline}) => {
  return (
    <Card>
      <h2>{name}</h2>
      <CardAge>나이 : {age}</CardAge>
      <IsOnline type={isOnline} />
    </Card>
  )
}

export default ProfileCard
