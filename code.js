// Haha no credit is needed here
// Once again, why was this so much easier than the previous assignment?
// I mean it took me like 10 minutes, compared to like 6+ hours

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
