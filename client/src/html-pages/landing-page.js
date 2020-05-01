import React from 'react';

const landingPage = () => {
    return (
        <div>
          <div class="jumbotron">
            <h1 class="display-3">Out-of-Line</h1>
            <p class="lead">Need to wait in line?  Do it online!</p>
            <hr class="my-4"></hr>
            <p class="descrip">Virtually queue at your favourite or local grocery store and take your social distancing to a whole new level while simultaneously increasing the effeciency of getting what you need.</p>
          </div>
          <div class="container card-group-1">
            <h3 class="text-center">Find a Grocery Store and get "in line"</h3>
            <div class="card-group">
                <div class="card">
                  <img class="card-img-top" src="../../public/images/map-1.png" alt="Card image cap"></img>
                  <div class="card-body">
                    <h5 class="card-title">Interctive Map</h5>
                    <p class="card-text">Find the grocery stores quickly and easily with this interactive map.</p>
                  </div>
                </div>
                <div class="card center-card">
                  <img class="card-img-top" src="../../public/images/map-2.png" alt="Card image cap"></img>
                  <div class="card-body">
                    <h5 class="card-title">Grocery Store Info</h5>
                    <p class="card-text">Clicking on a grocery store will display that store's relevant information, including:
                        <ul>
                            <li>Estimated wait times</li>
                            <li>Number of people currently in line</li>
                            <li>Health & Safety Information</li>
                            <li>Contact Information & Directions</li>
                        </ul>
                       Place yourself in line at the store you choose by hitting the <strong>"Queue"</strong> button.
                    </p>
                  
                </div>
                </div>
                <div class="card">
                  <img class="card-img-top " src="../../public/images/map-3.png" alt="Card image cap"></img>
                  <div class="card-body">
                    <h5 class="card-title">In Line</h5>
                    <p class="card-text">Track your position in line and get notifed when it is your turn to enter the store.</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
    )
}

export default landingPage;