import { AcUnit } from "@material-ui/icons";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  console.log(genre);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmVkNjk0OTkzZTZlOWU2NmIzNjg5YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDk0Nzg1NCwiZXhwIjoxNjgxMzc5ODU0fQ.N0TCWKZQ7XqMKsVM8gUX1eoJyCDUSDlprDgt028Zwcw",
          },
        });
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />

      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
