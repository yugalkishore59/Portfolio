import React, { useState } from 'react';

function WorkDescription({ work }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <h4 className="bold-text">{work.title}</h4>
      <p className="p-text" style={{ marginTop: 10 }}>
        {isExpanded ? work.description : `${work.description.slice(0, 100)} ...`}
      </p>
      <button className='expand-button' onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default WorkDescription;