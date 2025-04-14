/**
 * Definition for a Node.
 */
class Node(var `val`: Int) {
    var neighbors: ArrayList<Node?> = ArrayList<Node?>()
}
  
class Solution {
    fun cloneGraph(node: Node?): Node? {
        if (node === null) {
            return null
        }
        val clones = mutableMapOf<Node, Node>()
        fun dfs(node: Node): Node {
            clones[node]?.let {
                return it
            }
            val clone = Node(node.`val`)
            clones[node] = clone
            for (neighbor in node.neighbors) {
                neighbor?.let { clone.neighbors.add(dfs(it)) }
            }
            return clone
        }
        return dfs(node)
    }
}





