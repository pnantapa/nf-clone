import React, { useState } from 'react'

function row({ title }) {
    const [Movies, setMovies] = useState([]);

  return (
    <div>
        <h2>{title}</h2>
        {/* tilte */}

        {/* conatiner -> poster */}
    </div>
  )
}

export default row;