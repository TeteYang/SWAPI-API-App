import React from 'react';

const ErrorIndicator = () => {
  return (
    <div>
      <div class="card text-white bg-danger mb-3" style="max-width: 20rem;">
        <div class="card-header">BOOM!</div>
        <div class="card-body">
          <h4 class="card-title">
            Something has gone terribly wrong
            </h4>
          <p class="card-text">
          (but we have already sent the droids to fix)
          </p>
        </div>
      </div>
    </div>
  )
}

export default ErrorIndicator;