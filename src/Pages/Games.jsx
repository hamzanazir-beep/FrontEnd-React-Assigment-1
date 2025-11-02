import { Context } from '../Hook/Context';
import { useContext } from "react";

import Explore from '../Components/Explore';
import Navbar from '../Components/Navbar';
import Contacts from '../Components/Contacts';

const Games = () => {
  const { option } = useContext(Context);

  const featuredGames = [
    { id: 1, name: "Subway Surfers", cover: "https://via.placeholder.com/500x250?text=Subway+Surfers" },
    { id: 2, name: "Candy Crush Saga", cover: "https://via.placeholder.com/500x250?text=Candy+Crush+Saga" },
  ];

  const recentGames = [
    { id: 3, name: "Ludo King", cover: "https://via.placeholder.com/500x250?text=Ludo+King" },
    { id: 4, name: "8 Ball Pool", cover: "https://via.placeholder.com/500x250?text=8+Ball+Pool" },
  ];

  const suggestedGames = [
    { id: 5, name: "PUBG Mobile", cover: "https://via.placeholder.com/500x250?text=PUBG+Mobile" },
    { id: 6, name: "Call of Duty", cover: "https://via.placeholder.com/500x250?text=Call+of+Duty" },
    { id: 7, name: "Temple Run", cover: "https://via.placeholder.com/500x250?text=Temple+Run" },
  ];

  return (
    <>
      <Navbar />
      <div className="container-fluid" id="home-main-div" style={{ marginTop: '50px' }}>
        <div className="row" style={{ height: '90vh' }}>
          <div className="col-3" id="explore-main-div" style={{ backgroundColor: '#F2F4F7' }}>
            <Explore />
          </div>

          <div className="col-6" id="feed-main-div" style={{ backgroundColor: '#F2F4F7', overflowY: 'auto', padding: '10px' }}>
            {/* Featured Section */}
            <div className="mb-4 p-3 rounded" style={{ backgroundColor: 'white' }}>
              <h5>🎮 Featured Games</h5>
              <div className="row">
                {featuredGames.map((game) => (
                  <div className="col-12 mb-3" key={game.id}>
                    <div className="card shadow-sm">
                      <div className="card-body text-center">
                        <h6 className="card-title mb-2">{game.name}</h6>
                        <button className="btn btn-primary btn-sm">Play Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

      

       
          </div>

          <div className="col-3" id="contact-main-div" style={{ backgroundColor: '#F2F4F7' }}>
            <Contacts />
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
