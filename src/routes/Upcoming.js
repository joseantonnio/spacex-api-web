import React, { useEffect, useState } from "react";
import API from '../services/api';
import Launch from '../components/Launch';

export default function Upcoming() {
  const [launch, setLaunch] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/next_launches/upcoming")
      .then((response) => {
        setLaunch(response.data);
      })
      .catch((err) => {
        alert("Ops! Ocorreu um erro: " + err);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Launch launch={launch} loading={loading} />
  );
}
