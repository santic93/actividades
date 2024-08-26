import React, { useState } from 'react';
import { Button, Input } from 'rsuite';

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
          width='560'
          height='315'
          src={`https://www.youtube.com/embed/${video.id}`}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
        <p>{video.description}</p>
        <br />
        <br />
        <Button
          color='red'
          appearance='primary'
          onClick={() => handleRemoveVideo(index)}
        >
          Eliminar
        </Button>
      </div>
    ));
  };
  const handleRemoveVideo = (indexToRemove) => {
    setVideos(videos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <h2>Video y Descripcion</h2>
      <Input
        htmlSize={10}
        type='text'
        placeholder='Ingrese la URL del video'
        value={videoURL}
        onChange={(e) => setVideoURL(e)}
        size='lg'
        required
      />
      <br />
      <hr />
      <Input
        as='textarea'
        rows={3}
        type='text'
        placeholder='Ingrese una descripción'
        value={description}
        onChange={(e) => setDescription(e)}
        required
      />

      <br />
      <hr />
      <Button onClick={handleAddVideo} color='orange' appearance='primary'>
        Agregar Video
      </Button>
      <br />
      <br />
      {videos?.length ? (
        <div
          className='videos-container'
          style={{
            maxHeight: videos.length > 3 ? '800px' : 'auto', // Limitar altura cuando haya más de 3 videos
            overflowY: videos.length > 3 ? 'auto' : 'visible',
            marginTop: '20px',
            border: '1px solid #ccc',
            padding: '10px',
          }}
        >
          <h3>Videos Incrustados:</h3>
          {renderVideos()}
        </div>
      ) : (
        <>Todavia no agrego videos</>
      )}
    </div>
  );
};
