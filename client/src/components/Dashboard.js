import React, { useState, useEffect } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { API_BASE_URL } from '../config';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/tasks`)
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <Container className="mt-5">
      <h1>Dashboard</h1>
      <ListGroup>
        {tasks.map(task => (
          <ListGroup.Item key={task._id}>{task.title}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Dashboard;
