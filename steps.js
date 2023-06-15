// STEPS to traverse the graph in DFS
// [R, Y, X, X, X, X, X, X]
// Set {[T, W, V, U, S, P, Q, R, Y, X]}
// T -> R, W
// W -> Y, V, T
// V -> X, U, W
// U -> X, S, V
// S -> X, U, P
// P -> S, X, Q
// Q -> P, X, R
// R -> Q, Y, T
// Y -> R, X, W
// X -> Y, Q, P, U, V