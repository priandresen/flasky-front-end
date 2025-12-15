import './App.css';
import DATA from './data.js';
import CatList from './components/CatList';
import { useState } from 'react';

const petCat = cat => {
  return {...cat, petCount: cat.petCount + 1};
};

const countTotalPets = catData =>{
//   let total = 0;
//   for (const cat of catData){
//     total += cat.petCount;
//   }
//   return total;
// }
  return catData.reduce((acc, cat) => acc + cat.petCount, 0);
};


function App() {
  const [catData, setCatData] = useState(DATA);



  const handlePetCat = id => {
    setCatData(catData => {
      return catData.map(cat => {
        if (cat.id === id){
          return petCat(cat);
        } else {
          return cat;
        }
      });
    });
  };

  const handleUnregisterCat = id => {
    // console.log(`Unregistering cat with id: ${id}`);
    setCatData(catData => {
      return catData.filter(cat => cat.id !== id);
    });
  };

  const totalPets = countTotalPets(catData);



  return (
    <>
    <h2>Total Pets: {totalPets}</h2>
    <CatList cats={catData} 
    onPetCat={handlePetCat} 
    onUnregisterCat={handleUnregisterCat}
    />
    </>
  );
}

export default App;
