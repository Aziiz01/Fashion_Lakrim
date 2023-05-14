import React, { useState } from 'react';
import { categories, sous_categories, sous_sous_categories } from '../../Data/Categories';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Container = styled.div` display: flex; max-width: 800px; margin: 0 auto; padding: 20px;`;

const CategoryList = styled.ul` list-style: none; margin: 0; padding: 0; flex: 1;`;

const SubcategoryList = styled.ul `list-style: none; margin: 0; padding: 0; flex: 1;`;

const NoSubsubcategories = styled.div `margin-left: 20px; color: #FF0000; flex: 1;`;

const SubcategoryWrapper = styled.div `display: flex;`;

const SubcategoryListItem = styled.li `cursor: pointer; margin-right: 10px; padding: 10px; border-radius: 5px; background-color: ${(props) => (props.isSelected ? '#66CC66' : '#EAEAEA')}; color: ${(props) => (props.isSelected ? '#FFFFFF' : '#333333')};`;

const Heading = styled.h3` font-size: 24px; font-weight: bold; margin: 20px 0;`;

const Button = styled.button `margin-left: 20px; padding: 10px 20px; border-radius: 5px; background-color: #0077CC; color: #FFFFFF; cursor: pointer;`;

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
    sous_categories: PropTypes.object.isRequired,
    sous_sous_categories: PropTypes.object.isRequired
  };

function Categories() {
const [selectedCategory, setSelectedCategory] = useState(null);
const [selectedSubcategory, setSelectedSubcategory] = useState(null);
const [ setCategories] = useState(null);
const [setSousCategories] = useState(null);
const [ setSousSousCategories] = useState(null);


const handleCategoryClick = (category) => {
setSelectedCategory(category);
setSelectedSubcategory(null);
};

const handleSubcategoryClick = (subcategory) => {
setSelectedSubcategory(subcategory);
};

const handleAddCategory = () => {
    const newCategory = prompt('Entrez le nom de la nouvelle catégorie :');
    if (newCategory && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setSelectedCategory(newCategory);
      setSelectedSubcategory(null);
    }
  };
  
  const handleAddSubcategory = () => {
    if (!selectedCategory) {
      alert('Sélectionnez une catégorie pour ajouter une sous-catégorie.');
      return;
    }
    const newSubcategory = prompt(`Entrez le nom de la nouvelle sous-catégorie pour ${selectedCategory} :`);
    if (newSubcategory && !sous_categories[selectedCategory].includes(newSubcategory)) {
      setSousCategories({ ...sous_categories, [selectedCategory]: [...sous_categories[selectedCategory], newSubcategory] });
      setSelectedSubcategory(newSubcategory);
    }
  };
  
  const handleAddSubsubcategory = () => {
    if (!selectedSubcategory) {
      alert('Sélectionnez une sous-catégorie pour ajouter une sous-sous-catégorie.');
      return;
    }
    const newSubsubcategory = prompt(`Entrez le nom de la nouvelle sous-sous-catégorie pour ${selectedSubcategory} :`);
    if (newSubsubcategory) {
      setSousSousCategories({ ...sous_sous_categories, [selectedSubcategory]: [...(sous_sous_categories[selectedSubcategory] || []), newSubsubcategory] });
    }
  };
  
return (
    <Container>
      <CategoryList>
        <Heading>Liste des catégories</Heading>
        {categories.map((category) => (
          <React.Fragment key={category}>
            <SubcategoryListItem
              isSelected={selectedCategory === category}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </SubcategoryListItem>
          </React.Fragment>
        ))}
        <Button onClick={handleAddCategory}>Ajouter une catégorie</Button>
      </CategoryList>
      {selectedCategory && (
        <SubcategoryWrapper>
          <SubcategoryList>
            <Heading>Sous-catégories de {selectedCategory}</Heading>
            {sous_categories[selectedCategory] && sous_categories[selectedCategory].map((subcategory) => (
              <React.Fragment key={subcategory}>
                <SubcategoryListItem
                  isSelected={selectedSubcategory === subcategory}
                  onClick={() => handleSubcategoryClick(subcategory)}
                >
                  {subcategory}
                </SubcategoryListItem>
              </React.Fragment>
            ))}
            <Button onClick={handleAddSubcategory}>Ajouter une sous-catégorie</Button>
          </SubcategoryList>
          {selectedSubcategory && (
            <SubcategoryList>
              <Heading>Sous-sous-catégories de {selectedSubcategory}</Heading>
              {sous_sous_categories[selectedSubcategory] ? (
                sous_sous_categories[selectedSubcategory].map((subsubcategory) => (
                  <React.Fragment key={subsubcategory}>
                    <SubcategoryListItem>{subsubcategory}</SubcategoryListItem>
                  </React.Fragment>
                ))
              ) : (
                <NoSubsubcategories>
                  Aucune sous-sous-catégorie pour cette sous-catégorie
                </NoSubsubcategories>
              )}
              <Button onClick={handleAddSubsubcategory}>Ajouter une sous-sous-catégorie</Button>
            </SubcategoryList>
          )}
        </SubcategoryWrapper>
      )}
    </Container>
  )}
  export default Categories;
  