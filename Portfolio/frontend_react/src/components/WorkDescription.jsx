// import React, { useState } from 'react';

// function WorkDescription({ work }) {
//   const [isExpanded, setIsExpanded] = useState(false);

//   return (
//     <div>
//       <p className="p-text" style={{ marginTop: 10 }}>
//         {isExpanded ? work : `${work.slice(0, 100)} ...`}
//       </p>
//       <button className='expand-button' onClick={() => setIsExpanded(!isExpanded)}>
//         {isExpanded ? 'Read Less' : 'Read More'}
//       </button>
//     </div>
//   );
// }

// export default WorkDescription;

import React, { useState } from 'react';

function WorkDescription({ work, hasBulletPoints = false }) {

  const [isExpanded, setIsExpanded] = useState(false);

  if(!hasBulletPoints){
    return (
          <div>
            <p className="p-text" style={{ marginTop: 10 }}>
              {isExpanded ? work : `${work.slice(0, 100)} ...`}
            </p>
            <button className='expand-button' onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </div>
        );
  }

  const renderDescription = () => {
    const descriptionArray = work.split('#').filter((item) => item.trim() !== '');

    if (isExpanded) {
      return (
        <ul className='p-text'>
          {descriptionArray.map((item, index) => (
            <li key={index}>{item.trim()}</li>
          ))}
        </ul>
      );
    } else {
      const truncatedDescription = descriptionArray.slice(0, 1).map((item) => item.trim())[0];
      return (
        <ul className='p-text'>
          <li>{truncatedDescription} ...</li>
        </ul>
      );
    }
  };

  return (
    <div>
      <p>{renderDescription()}</p>
      <button className='expand-button' onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
}

export default WorkDescription;
