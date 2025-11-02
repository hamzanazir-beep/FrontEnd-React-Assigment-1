import { useContext, useState } from 'react';
import { Context } from '../Hook/Context';
import Explore from '../Components/Explore';
import Navbar from '../Components/Navbar';
import Contacts from '../Components/Contacts';

const Watch = () => {
  const { option } = useContext(Context);

  // 🎬 Static JSON data for demo
  const [videos] = useState([
    
    {
      id: 2,
      user: {
        name: 'Talha Khalil',
        profileImg: '/profile.png',
      },
      caption: 'Coding all night ☕💻',
      video:
        'https://videos.pexels.com/video-files/2611250/2611250-hd_1920_1080_30fps.mp4',
      likes: 150,
      comments: 9,
      shares: 5,
      time: '5 hours ago',
    },
  
  ]);

  return (
    <>
      <Navbar />
      <div
        className="container-fluid"
        id="home-main-div"
        style={{ marginTop: '50px' }}
      >
        <div className="row" style={{ height: '90vh' }}>
          {/* Left Sidebar */}
          <div
            className="col-3"
            id="explore-main-div"
            style={{ backgroundColor: '#F2F4F7' }}
          >
            <Explore />
          </div>

          {/* Main Feed Section */}
          <div
            className="col-6"
            id="feed-main-div"
            style={{
              backgroundColor: '#F2F4F7',
              overflowY: 'scroll',
              height: '90vh',
            }}
          >
            {videos.map((video, index) => (
              <div
                key={index}
                className="card mb-3 shadow-sm border-0"
                style={{
                  borderRadius: '10px',
                  backgroundColor: 'white',
                }}
              >
                {/* User Info */}
                <div className="card-body d-flex align-items-center">
                  <img
                    src={video.user.profileImg}
                    width={45}
                    height={45}
                    alt="profile"
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                  />
                  <div className="ms-2">
                    <strong>{video.user.name}</strong>
                    <div className="text-muted" style={{ fontSize: '0.9rem' }}>
                      {video.time}
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="px-3 pb-2">{video.caption}</div>

                {/* Video */}
                <video
                  src={video.video}
                  controls
                  className="w-100"
                  style={{
                    borderRadius: '10px',
                    maxHeight: '450px',
                    objectFit: 'cover',
                  }}
                ></video>

                {/* Like/Comment Count */}
                <div
                  className="px-3 py-2 d-flex align-items-center justify-content-between text-muted"
                  style={{
                    borderBottom: '1px solid #e0e0e0',
                    fontSize: '0.9rem',
                  }}
                >
                  <span>
                    <img
                      src="/like.png"
                      alt="like"
                      width={18}
                      className="me-1"
                    />
                    {video.likes}
                  </span>
                  <span>
                    {video.comments} Comments · {video.shares} Shares
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="d-flex justify-content-around py-2">
                  <button
                    className="btn btn-light w-100 border-0"
                    style={{ fontWeight: 500 }}
                  >
                    <i className="fa-regular fa-thumbs-up me-1"></i> Like
                  </button>
                  <button
                    className="btn btn-light w-100 border-0"
                    style={{ fontWeight: 500 }}
                  >
                    <i className="fa-regular fa-comment me-1"></i> Comment
                  </button>
                  <button
                    className="btn btn-light w-100 border-0"
                    style={{ fontWeight: 500 }}
                  >
                    <img src="/share.png" width={16} className="me-1" /> Share
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div
            className="col-3"
            id="contact-main-div"
            style={{ backgroundColor: '#F2F4F7' }}
          >
            <Contacts />
          </div>
        </div>
      </div>
    </>
  );
};

export default Watch;
