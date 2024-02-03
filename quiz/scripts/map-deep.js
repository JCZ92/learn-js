// Original matrix (list of lists)
const originalMatrix = [
    [3, 2, 1],
    [4, 5, 6],
    [7, 9, 8]
  ];
  
  const newMatrix = originalMatrix.map((row) => {
    return Array.from(row).sort(); // embed another shallow copy to fix this
  });
  
  // Modifying the original matrix (changing the last element of the first row)
  originalMatrix[0][2] = 99; // both arrays will change since newMatrix is a shallow copy of the orignalMatrix 
  
  // Displaying the original and new matrices
  console.log('Original Matrix (modified):', originalMatrix);
  console.log('New Matrix (unaffected):', newMatrix);
  