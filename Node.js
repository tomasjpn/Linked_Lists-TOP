class Node {
    constructor(value = null, nextNode = null){
        this.value = value; // Wert des Knoten
        this.nextNode = nextNode; // Pointer auf den nächsten Knoten
    }
}

export default Node;