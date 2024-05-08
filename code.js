function convertToAdjList(adjMatrix) {
    const adjList = [];
    for (let i = 0; i < adjMatrix.length; i++) {
        const neighbors = []
        for (let j = 0; j < adjMatrix.length; j++)
            if (adjMatrix[i][j] === 1)
                neighbors.push(j);
        adjList.push(neighbors);
    }
    return adjList;
}
