import React, { useEffect, useState } from "react";
import Card from '../components/Card'
import API from '../services/api'
import defaultPatch from '../assets/patch.png'
import { RotatingLines } from 'react-loader-spinner'

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
          <Card>
            <p><img src={launch?.patch || defaultPatch} width='150px' height='150px' alt='' /></p>
            <p><strong>Name:</strong> {launch?.name}</p>
            <p><strong>Liftoff:</strong> {launch?.liftoff}</p>
          </Card>
        );
      }) : <RotatingLines strokeColor="white" width="36" />}
    </div>
  );
}
