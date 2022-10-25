import React, { useEffect, useState } from "react";
import Launch from '../components/Launch';
import API from '../services/api';
import { RotatingLines } from 'react-loader-spinner';

export default function Past() {
  const [launches, setLaunches] = useState();

  useEffect(() => {
    API.get("/previous_launches")
      .then((response) => {
        setLaunches(response.data);
      })
      .catch((err) => {
        alert("Ops! Ocorreu um erro: " + err);
      });
  }, []);

  return (
    <div>
      {launches ? launches.map((launch, index) => {
        return (
          <Launch launch={launch} loading={false} />
        );
      }) : <RotatingLines strokeColor="white" width="36" />}
    </div>
  );
}
