import React, { useEffect, useState } from "react";
import API from '../services/api';
import { RotatingLines } from 'react-loader-spinner';
import Launch from '../components/Launch';

export default function Next() {
  const [launches, setLaunches] = useState();

  useEffect(() => {
    API.get("/next_launches")
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
