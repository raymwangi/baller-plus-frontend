import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [videos, setVideos] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/videos', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setVideos(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchVideos();
    }, [token]);

    return (
        <div>
            <h2>Your Training Videos</h2>
            <ul>
                {videos.map(video => (
                    <li key={video._id}>
                        <h3>{video.title}</h3>
                        <p>Position: {video.position}</p>
                        <a href={video.url} target="_blank" rel="noopener noreferrer">Watch Now</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
