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

// 카테고리를 클릭했을때 새로운 state에 넣어서 그걸 카테고리랑 바꿔치기 하면 될 듯

export default Category;

//ul에 폰트사이즈 주고 li에 padding 10px씩 줘라
