import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './Profile.css'; // Make sure to include any custom styling

const Profile = () => {
  // Placeholder user data - replace with actual data fetched from the server
  const userProfile = {
    username: 'johndoe',
    email: 'john@example.com',
    bio: 'Enthusiastic developer and lifelong learner.',
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>{userProfile.username}'s Profile</Card.Title>
          <Card.Text>
            <strong>Email:</strong> {userProfile.email}
          </Card.Text>
          <Card.Text>
            <strong>Bio:</strong> {userProfile.bio}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;
