import React, { useState } from "react";

function PreLoader() {
  const [loading, setLoading] = useState(true);

  return (
    loading && (
      <div className="container">
        <h1 class="intro">cat loader</h1>
        <div class="box">
          <div class="cat">
            <div class="cat__body" />
            <div class="cat__body" />
            <div class="cat__tail" />
            <div class="cat__head" />
          </div>
        </div>
      </div>
    )
  );
}
export default PreLoader;
