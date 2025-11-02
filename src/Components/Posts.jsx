import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Hook/Context';
import Comment from './Comment';
import useAuth from '../Hook/useAuth';

const Posts = () => {
  const { setComment, setSelectedPost } = useContext(Context);
  const currentUser = useAuth();

  // 🧠 Local demo JSON data
  const [posts, setPosts] = useState([
    {
      _id: '1',
      caption: 'Had a great day at the beach!',
      post: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      createdAt: new Date(),
      likes: ['u1', 'u3'],
      owner: {
        _id: 'u1',
        name: 'Hamza Nazir',
        profileImg: '/profile.png',
      },
    },
    {
      _id: '2',
      caption: 'Love coding MERN Stack 💻🔥',
      post: '',
      createdAt: new Date(),
      likes: ['u2'],
      owner: {
        _id: 'u2',
        name: 'Talha Khalil',
        profileImg: '/profile.png',
      },
    },
    {
      _id: '3',
      caption: 'Evening vibes 🌅',
      post: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b',
      createdAt: new Date(),
      likes: [],
      owner: {
        _id: 'u3',
        name: 'Zawar Ali',
        profileImg: '/profile.png',
      },
    },
  ]);

  // 💙 Toggle like function
  const toggleLike = (postID) => {
    const userId = currentUser._id || 'u1'; // fallback for demo
    setPosts((prev) =>
      prev.map((post) => {
        if (post._id === postID) {
          const alreadyLiked = post.likes.includes(userId);
          return {
            ...post,
            likes: alreadyLiked
              ? post.likes.filter((id) => id !== userId) // remove like
              : [...post.likes, userId], // add like
          };
        }
        return post;
      })
    );
  };

  return (
    <>
      <Comment />
      {posts?.length > 0 ? (
        <div
          className="container-fluid"
          style={{
            height: '92vh',
            overflowY: 'scroll',
            backgroundColor: '#F2F4F7',
          }}
        >
          {posts.map((post, index) => {
            const userLiked = post.likes.includes(currentUser._id || 'u1');
            return (
              <div
                key={index}
                className="row mb-3 bg-light rounded shadow-sm p-2"
              >
                {/* User Info */}
                <Link
                  to={`/user/${post.owner._id}`}
                  style={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'black',
                  }}
                  className="row"
                >
                  <div className="col-2 mt-2">
                    <img
                      src={post?.owner?.profileImg || '/profile.png'}
                      width={50}
                      style={{ borderRadius: '50%', height: '50px' }}
                    />
                  </div>
                  <div className="col-10 mt-3">
                    <div className="row">
                      <div className="col-12">
                        <b>{post.owner.name}</b>
                      </div>
                      <div className="col text-muted">
                        {new Date(post.createdAt).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Caption */}
                <span className="mt-2">{post.caption}</span>

                {/* Post Image */}
                {post.post && (
                  <>
                    <hr />
                    <img
                      src={post.post}
                      style={{
                        width: '100%',
                        borderRadius: '10px',
                        objectFit: 'cover',
                      }}
                    />
                  </>
                )}

                {/* Like Count */}
                <div
                  className="mt-2 pb-1"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderBottom: '1px solid #C2C4C6',
                  }}
                >
                  <img src="/like.png" width={20} className="me-1" />
                  <div
                    style={{ display: 'inline-flex' }}
                    className="text-muted"
                  >
                    {post?.likes.length}
                  </div>
                </div>

                {/* Buttons */}
                <div className="container-fluid mt-2">
                  <div className="row pb-2">
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => toggleLike(post._id)}
                      className="col ps-4"
                    >
                      <i
                        className={`fa-thumbs-up ${
                          userLiked ? 'fa-solid' : 'fa-regular'
                        }`}
                        style={{
                          color: userLiked ? '#0866FF' : 'black',
                          transition: '0.2s',
                        }}
                      ></i>{' '}
                      Like
                    </div>

                    <div
                      className="col-5"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        setComment(true);
                        setSelectedPost(post);
                      }}
                    >
                      <i className="fa-regular fa-comment"></i> Comment
                    </div>
                    <div className="col">
                      <img src="/share.png" width={17} /> Share
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          className="rounded-2"
          style={{
            backgroundColor: 'white',
            height: '140px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3 className="text-center text-muted">
            No posts available. Your friends haven’t shared anything yet.
          </h3>
        </div>
      )}
    </>
  );
};

export default Posts;
