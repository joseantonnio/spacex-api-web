import React, { useEffect, useState } from "react";
import Card from '../components/Card'
import API from '../services/api'
import defaultPatch from '../assets/patch.png'

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
    <div>
      <Card bg={launch?.vehiacle?.image} loading={loading}>
        <p><img src={launch?.patch || defaultPatch} width='150px' alt='' /></p>
        <p><strong>Name:</strong> {launch?.name}</p>
        <p><strong>Liftoff:</strong> {launch?.liftoff}</p>
        <p><strong>Vehiacle:</strong> {launch?.vehiacle?.name}</p>
        <p><strong>Launchpad:</strong> {launch?.launchpad?.name}</p>
      </Card>
    </div>
  );
}
