import React, { useState, useEffect } from "react";
import Icon from "./Icon";

import axios from "axios";
import Planstyle from "./Planstyle.scss";
import ModalPortal from "./ModalPortal";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import dotenv from "dotenv";
import "./planmap.scss";
dotenv.config();

function Planmap() {
  const [visible, setVisible] = useState(false);
  const onMap = () => setVisible(!visible);

  const [posts, setPosts] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [popup, setpopup] = useState(false);
  const [error, setError] = useState(null);
  const thisLink = window.location.href;
  const Linkid = thisLink.split("plan/")[1];

  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 37.497536340141046,
    lng: 127.02763080131218,
  };

  const divStyle = {
    background: `white`,
    width: "60px",
    height: "30px",
    fontSize: "0.6rem",
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_MAP_API_KEY,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setError(null);
        setPosts(null);
        setLoading(true);
        const response = await axios.get(`http://34.64.93.115/plans/${Linkid}`);
        setPosts(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const postinfo = posts && posts.postForPlanResponseDtos;
  const postcount = postinfo && postinfo.length;
  const getLocation = (plans) => {
    let loc = [];

    for (let i = 0; i < postcount; i++) {
      loc.push({ lng: postinfo[i].lng, lat: postinfo[i].lat });
    }

    return [...loc];
  };
  const togglepopup = () => {
    setpopup(!popup);
  };

  return (
    <>
      {isLoaded && visible ? (
        <div className="planmap-container">
          <button className="planclose-map" onClick={onMap}>
            <Icon picture="close-btn" />
          </button>
          <GoogleMap
            id="circle-example"
            mapContainerStyle={containerStyle}
            zoom={15}
            center={getLocation().length !== 0 ? getLocation()[0] : center}
            fullscreenControl={false}
          >
            {getLocation() &&
              getLocation().map((loc, idx) => (
                <Marker position={loc} key={`marker${idx}`} />
              ))}
          </GoogleMap>
        </div>
      ) : (
        <div className="planmap-arrow" onClick={onMap}>
          <Icon picture="arrow" />
        </div>
      )}
    </>
  );
}
export default Planmap;
