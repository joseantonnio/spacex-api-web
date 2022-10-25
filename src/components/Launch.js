import React from 'react';
import Card from '../components/Card'
import defaultPatch from '../assets/patch.png'

class Launch extends React.Component {
  render() {
    const { launch, loading } = this.props;

    return (
      <Card bg={launch?.vehiacle?.image} loading={loading}>
        <p><img src={launch?.patch || defaultPatch} width='150px' height='150px' alt='' /></p>
        <p><strong>Name:</strong> {launch?.name}</p>
        <p><strong>Liftoff:</strong> {launch?.liftoff}</p>
        {launch?.vehiacle && <p><strong>Vehiacle:</strong> {launch.vehiacle.name}</p>}
        {launch?.launchpad && <p><strong>Launchpad:</strong> {launch.launchpad.name}</p>}
      </Card>
    );
  }
}

export default Launch;