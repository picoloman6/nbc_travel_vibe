const Category = ({ selectedCategory, setSelectedCategory }) => {
  const categoryOptions = ['travel', 'eat', 'relax'];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <label>
        카테고리:
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value=''>선택하세요</option>
          {categoryOptions.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      {selectedCategory ? (
        <p>선택된 카테고리: {selectedCategory}</p>
      ) : (
        <p>카테고리를 지정해주세요!</p>
      )}
    </div>
  );
};

export default Category;

// const [isDropDown, setIsDropDown] = useState(false);

//   const category = ['Travel', 'Eat', 'Relax'];

//   return (
//     <div>
//       <div onClick={() => setIsDropDown(!isDropDown)}>
//         <p>{isDropDown ? '카테고리⭡' : '카테고리⭣'}</p>
//         {isDropDown && (
//           <ul>
//             {category.map((categoryItem, index) => (
//               <li key={index}>
//                 <p>{categoryItem}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

//셀렉트라는 좋은 기능을 모르고 쓴 코드
