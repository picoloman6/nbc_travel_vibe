import { useState } from 'react';

const Category = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <div>
      <div onClick={() => setIsDropDown(!isDropDown)}>
        <p>{isDropDown ? '카테고리⭡' : '카테고리⭣'}</p>
        {isDropDown ? (
          <ul>
            <li>
              <p>Travel</p>
            </li>
            <li>
              <p>Eat</p>
            </li>
            <li>
              <p>Relax</p>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Category;
