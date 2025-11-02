import { Context } from '../Hook/Context';
import { useContext } from "react";
import Explore from '../Components/Explore';
import Navbar from '../Components/Navbar';
import Contacts from '../Components/Contacts';

const Groups = () => {
  const { option } = useContext(Context);

  const joinedGroups = [
    { id: 1, name: "Web Developers Pakistan", members: "12k members", cover: "https://via.placeholder.com/500x200?text=Web+Developers" },

  ];

  const suggestedGroups = [
    { id: 4, name: "Freelancers Hub", members: "20k members", cover: "https://via.placeholder.com/500x200?text=Freelancers+Hub" },
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
            <div className="mb-3 p-3 rounded" style={{ backgroundColor: 'white' }}>
              <h5>Create a Group</h5>
              <button className="btn btn-primary mt-2 w-100">+ Create New Group</button>
            </div>

            <div className="mb-4 p-3 rounded" style={{ backgroundColor: 'white' }}>
              <h5>Joined Groups</h5>
              <div className="row">
                {joinedGroups.map((group) => (
                  <div className="col-12 mb-3" key={group.id}>
                    <div className="card shadow-sm">
            
                      <div className="card-body">
                        <h6 className="card-title mb-1">{group.name}</h6>
                        <p className="card-text text-muted small">{group.members}</p>
                        <button className="btn btn-outline-primary btn-sm">Visit Group</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded" style={{ backgroundColor: 'white' }}>
              <h5>Suggested Groups</h5>
              <div className="row">
                {suggestedGroups.map((group) => (
                  <div className="col-12 mb-3" key={group.id}>
                    <div className="card shadow-sm">
                      <div className="card-body">
                        <h6 className="card-title mb-1">{group.name}</h6>
                        <p className="card-text text-muted small">{group.members}</p>
                        <button className="btn btn-outline-success btn-sm">Join Group</button>
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

export default Groups;
