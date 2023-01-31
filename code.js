//task1
function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}
//task2
function isOrthogonal(v1, v2) {
    let dotProduct = 0;
    for (let i = 0; i < v1.length; i++) {
      dotProduct += v1[i] * v2[i];
    }
    return dotProduct === 0;
  }
  
  function determineOrthogonality(vectors) {
    const result = [];
    for (let i = 0; i < vectors.length; i++) {
      for (let j = i + 1; j < vectors.length; j++) {
        if (isOrthogonal(vectors[i], vectors[j])) {
          result.push([i, j]);
        }
      }
    }
    return result;
  }
//task3
function dotProduct(vector1, vector2) {
    let result = 0;
    for (let i = 0; i < vector1.length; i++) {
      result += vector1[i] * vector2[i];
    }
    return result;
  }
  
  function cosineSimilarity(vector1, vector2) {
    let dotProductResult = dotProduct(vector1, vector2);
    let magnitude1 = Math.sqrt(dotProduct(vector1, vector1));
    let magnitude2 = Math.sqrt(dotProduct(vector2, vector2));
    return dotProductResult / (magnitude1 * magnitude2);
  }
  