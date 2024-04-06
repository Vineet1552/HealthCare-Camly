import React, { Dispatch, SetStateAction } from "react";
import useAuth from "../../hooks/useAuth";

type ProfileProps = {
  activeCase: number;
  setActiveCase: Dispatch<SetStateAction<number>>;
};

const Sidebar = ({ activeCase, setActiveCase }: ProfileProps) => {
  const userData = useAuth();

  const data = [
    {
      id: 1,
      name: "Profile",
    },
    {
      id: 2,
      name: "Orders History",
    },
    {
      id: 3,
      name: "Appointment History",
    },
    {
      id: 4,
      name: "Manage Address",
    },
    {
      id: 5,
      name: "Manage Cards",
    },
    {
      id: 6,
      name: "Change Password",
    },
  ];

  const handleSwitch = (id: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveCase(id);
    // setNewCls(true);
  };

  return (
    <aside className="account_aside">
      <div className="account_profile">
        <figure>
          <img src="/static/images/dummy.png" alt="" />
        </figure>
        <div className="account_profile_detail">
          <h2>{userData?.name}</h2>
          <p>
            <span>{userData?.gender}</span> <span>25 Years old</span>
          </p>
        </div>
      </div>
      <div className="aside_menu">
        <ul>
          {data?.map((item) => (
            <li
              key={item?.id}
              className={
                activeCase === item?.id ? "nav-link active" : "nav-link"
              }
              onClick={() => {
                // setNewCls(true);
                handleSwitch(item?.id);
              }}
            >
              {item?.name}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
