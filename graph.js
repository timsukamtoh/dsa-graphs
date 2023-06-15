"use strict";
/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {
    for (const vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** remove vertex from graph:
   *
   * - update any adjacency lists using that vertex
   * - remove it from nodes property of graph
   */
  removeVertex(vertex) {
    for (const neighbor of vertex.adjacent) {
      this.removeEdge(vertex, neighbor);
    }
    this.nodes.delete(vertex);
  }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start) {
    let toVisitStack = [start];
    let visitedNodes = new Set();
    // let visitedNodeValues = [start.val];

    while (toVisitStack.length > 0) {
      let current = toVisitStack.pop();
      visitedNodes.add(current);

      for (const neighbor of current.adjacent) {
        if (!visitedNodes.has(neighbor)) {
          toVisitStack.push(neighbor);

          // visitedNodeValues.push(neighbor.val);
        }
      }
    }

    return Array.from(visitedNodes).map(v => v.value);
  }

  /** traverse graph with DFS recursively and returns array of Node values */
  depthFirstSearchRecursive(start, visitedNodes = new Set()) {
    visitedNodes.add(start)

    for (const neighbor of start.adjacent) {
      if (!visitedNodes.has(neighbor)) {
        return this.depthFirstSearchRecursive(neighbor, visitedNodes);
      }
    }

    return Array.from(visitedNodes).map(v => v.value);
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    let toVisitStack = [start];
    let visitedNodes = new Set();

    while (toVisitStack.length > 0) {
      let current = toVisitStack.shift();
      visitedNodes.add(current);

      for (const neighbor of current.adjacent) {
        if (!visitedNodes.has(neighbor)) {
          toVisitStack.push(neighbor);

          // visitedNodeValues.push(neighbor.val);
        }
      }
    }

    return Array.from(visitedNodes).map(v => v.value);
  }

  /** traverse graph with BDS recursively and returns array of Node values */
  //[S, P, U, Q, X, V, R, Y, W, T]

  //already visited: {S, P, U, Q, X}
  //to visit: [  R, X, Y, V, Y, V]

  breadthFirstSearchRecursive(start, visitedNodes = new Set(), toVisitQueue=[start]) {
    visitedNodes.add(start)

    for (const neighbor of start.adjacent) {
      if (!visitedNodes.has(neighbor)) {
        toVisitQueue.push(neighbor)
      }
    }
    if(toVisitQueue.length > 0) {
      return this.breadthFirstSearchRecursive(toVisitQueue.shift(), visitedNodes, toVisitQueue)
    }
    
    return Array.from(visitedNodes).map(v => v.value);
  }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) { }
}

module.exports = { Graph, Node };
