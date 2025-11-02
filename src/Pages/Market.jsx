import { useContext, useState } from 'react';
import { Context } from '../Hook/Context';
import Explore from '../Components/Explore';
import Navbar from '../Components/Navbar';
import Contacts from '../Components/Contacts';

const Market = () => {
  const { option } = useContext(Context);

  // 🛒 Static product data
  const [products] = useState([
    {
      id: 1,
      title: 'iPhone 14 Pro Max',
      price: '$1,099',
      location: 'Lahore, Pakistan',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple_AV1?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896',
    },
 
 
  
    {
      id: 5,
      title: 'MacBook Air M2',
      price: '$1,199',
      location: 'Gujrat, Pakistan',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1653084303730',
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

          {/* Main Market Feed */}
          <div
            className="col-6"
            id="feed-main-div"
            style={{
              backgroundColor: '#F2F4F7',
              overflowY: 'scroll',
              height: '90vh',
            }}
          >
            <div className="container-fluid py-3">
              <h4 className="fw-bold mb-3">Today's Picks</h4>
              <div className="row">
                {products.map((item) => (
                  <div
                    key={item.id}
                    className="col-md-6 mb-4"
                    style={{ cursor: 'pointer' }}
                  >
                    <div
                      className="card shadow-sm border-0"
                      style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        transition: 'transform 0.2s ease',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = 'scale(1.02)')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = 'scale(1)')
                      }
                    >
                      <img
                        src={item.image}
                        className="card-img-top"
                        alt={item.title}
                        style={{
                          height: '200px',
                          objectFit: 'cover',
                        }}
                      />
                      <div className="card-body">
                        <h6 className="card-title mb-1 fw-bold">
                          {item.title}
                        </h6>
                        <p className="text-primary fw-semibold mb-0">
                          {item.price}
                        </p>
                        <p
                          className="text-muted mb-0"
                          style={{ fontSize: '0.9rem' }}
                        >
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

export default Market;
