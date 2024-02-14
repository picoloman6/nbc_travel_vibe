import styled from 'styled-components';

const Category = ({ selectedCategory, setSelectedCategory }) => {
  const categoryOptions = ['travel', 'eat', 'relax'];

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <label>
        <StSelect value={selectedCategory} onChange={handleCategoryChange}>
          <option value=''>카테고리</option>
          {categoryOptions.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </StSelect>
      </label>
    </div>
  );
};

export default Category;

const StSelect = styled.select`
  font-size: 25px;
  border-radius: 5px;
`;