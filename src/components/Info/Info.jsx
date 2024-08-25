import React, { useState } from 'react';

export const Info = () => {
  const [videos, setVideos] = useState([]);
  const [videoURL, setVideoURL] = useState('');
  const [description, setDescription] = useState('');

  const handleAddVideo = () => {
    const videoId = videoURL.split('v=')[1];
    if (videoId) {
      setVideos([...videos, { id: videoId, description }]);
      setVideoURL('');
      setDescription('');
    }
  };

  const renderVideos = () => {
    return videos.map((video, index) => (
      <div key={index} style={{ marginBottom: '20px' }}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>{video.description}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>Agregar Video de YouTube</h2>
      <input
        type="text"
        placeholder="Ingrese la URL del video"
        value={videoURL}
        onChange={(e) => setVideoURL(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ingrese una descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAddVideo}>Agregar Video</button>
      <div>
        <h3>Videos Incrustados:</h3>
        {renderVideos()}
      </div>
    </div>
  );
};
