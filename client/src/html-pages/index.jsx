import React from 'react';
import {Link} from "react-router-dom";

const Stores = () => {
  return (
    <div>
      <h3>Stores</h3>
      <Link to="/stores" >Go to Stores</Link>
    </div>
  );
};

export default Stores;