import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  // el estado inicial es ['OnePuch'], se puede dejar vacio pero en ese caso quedaría como 
  // undefined y a veces puede causar inconvenientes por tener que crear excepciones

  const [categories, setCategories] = useState(['Spy x Family']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>

      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(newCategory) => onAddCategory(newCategory)}
      />



      {/* cada que tenemos una nueva categoria se crea un componente para la nueva categoría pero
      no las anteriores categorías, los anteriores se mantienen igual y por eso no se vuelven a disparar */}

      {
        categories.map((category) => (
          <GifGrid key={category} value={category}/>
        ))
      }


    </>
  )
}