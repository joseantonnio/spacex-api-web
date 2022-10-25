import React, { useEffect, useState } from "react";
import Launch from '../components/Launch';
import API from '../services/api';

export default function Latest() {
  const [launch, setLaunch] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/previous_launches/latest")
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
