import React from 'react';
import avatar from '../../img/avatar.png'
import {ProfileAvatar, ProfileName, ProfileWrapper} from './ProfileElements';

const Profile = ({className}) => {
  return (
    <ProfileWrapper className={className}>
      <ProfileAvatar>
        <img src={avatar} alt=""/>
      </ProfileAvatar>
      <ProfileName>Darlene Robertson</ProfileName>
    </ProfileWrapper>
  )
}


export default Profile;