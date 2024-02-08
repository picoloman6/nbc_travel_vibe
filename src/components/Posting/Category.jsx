import { useState } from 'react';

const Category = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  const category = ['Travel', 'Eat', 'Relax'];

  return (
    <div>
      <div onClick={() => setIsDropDown(!isDropDown)}>
        <p>{isDropDown ? '카테고리⭡' : '카테고리⭣'}</p>
        {isDropDown ? (
          category.map((category) => {
            return (
              <ul>
                <li>
                  <p>{category}</p>
                </li>
              </ul>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Category;
