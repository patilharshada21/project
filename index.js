import React from 'react';
import ReactDOM from 'react-dom';

// src/profiles.json
[
  {
    "id": 1,
    "name": "John Doe",
    "description": "Web Developer",
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "description": "Designer",
    "latitude": 34.0522,
    "longitude": -118.2437
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "description": "Software Engineer",
    "latitude": 51.5074,
    "longitude": -0.1278
  }
]

// src/components/ProfileList.js
// import React, { useState } from 'react';
// import profilesData from '../profiles.json';

const ProfileList = ({ onSelectProfile }) => {
  const [profiles] = useState(profilesData);

  return (
    <div>
      <h1>Profiles</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <div>
              <h2>{profile.name}</h2>
              <p>{profile.description}</p>
            </div>
            <button onClick={() => onSelectProfile(profile)}>View on Map</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

//export default ProfileList;

// src/components/ProfileMap.js
// import React from 'react';
// import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const ProfileMap = ({ profile }) => {
  const { latitude, longitude, name } = profile;

  return (
    <div>
      <h1>Profile Map</h1>
      <Map center={[latitude, longitude]} zoom={10} style={{ height: '400px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>{name}</Popup>
        </Marker>
      </Map>
    </div>
  );
};

//export default ProfileMap;

// src/App.js
// import React, { useState } from 'react';
// import './App.css';
// import ProfileList from './components/ProfileList';
// import ProfileMap from './components/ProfileMap';

function App() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="App">
      <div className="left-panel">
        <ProfileList onSelectProfile={handleSelectProfile} />
      </div>
      <div className="right-panel">
        {selectedProfile && <ProfileMap profile={selectedProfile} />}
      </div>
    </div>
  );
}

// export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

