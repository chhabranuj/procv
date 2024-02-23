import axios from "axios";
import { useEffect, useState } from "react";
import userDataStyle from "./userDataLayout.module.sass";

const UserDataLayout = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/api/getUserData").then((response) => {
      setData(response.data.result);
    });
  });

  return (
    <div className={userDataStyle.userDataParent}>
      {data.length ? (
        <div className={userDataStyle.userDataChild}>
          {data.map((item, index) => {
            return (
              <div key={index} className={userDataStyle.userDataContainer}>
                <p className={userDataStyle.userDataContent}>
                  <strong>Id: </strong>
                  {item.id}
                </p>
                <p className={userDataStyle.userDataContent}>
                  <strong>Name: </strong>
                  {item.name}
                </p>
                <p className={userDataStyle.userDataContent}>
                  <strong>Email: </strong>
                  {item.email}
                </p>
                <p className={userDataStyle.userDataContent}>
                  <strong>Number: </strong>
                  {item.phoneNumber}
                </p>
                <p className={userDataStyle.userDataContent}>
                  <strong>Date: </strong>29/01/2024
                </p>
                <p>
                  <strong>Message: </strong>
                  {item.message}
                </p>
                <button
                  className={userDataStyle.deleteDataButton}
                  onClick={() => {
                    const config = {
                      data: {
                        id: item.id,
                      },
                    };

                    axios
                      .delete("/api/deleteUserData", config)
                      .then((response: any) => {});
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <p style={{ margin: "5rem 0", textAlign: "center" }}>
          Sorry no data found...
          <br />
          But don't worry someone will contact you soon :)
        </p>
      )}
    </div>
  );
};

export default UserDataLayout;
