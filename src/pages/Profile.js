import React from 'react';

const Profile = props => {
  return (
    <h1>Welcome, { props.currentUser.name } !</h1>
  )
}

export default Profile