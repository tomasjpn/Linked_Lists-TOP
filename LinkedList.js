import Node from  './Node.js'

export default class LinkedList {
    constructor () {
        this.head = null;
    }

    // Neuer Knoten wird am Anfang der Liste hinzugefügt. 
    addStart (value) {
        const newNode = new Node(value, this.head); // nextNode vom neuen Knoten wird auf den aktuellen Knoten gesetzt -> neuer KNoten = vor dem alten Knoten
        this.head = newNode;
    }


    // Neuer Knoten wird am Ende der Liste hinzugefügt.
    addEnd (value) {
        const newNode = new Node(value, null);
        if (this.head === null){
            this.head = newNode
        } else {
            let current = this.head;
            while (current.nextNode !== null){ // Iteriert so lange bis zum letzten Knoten
                current = current.nextNode;
            }
            current.nextNode = newNode;
        }
    } 


    // gibt die Gesamtzahl der Knoten in der Liste
    returnSize (){
        let size = 0; 
        let current = this.head;
        while (current !== null){
            size++;
            current = current.nextNode;
        }

        return size;
    }


    // gibt den Head (Anfang) der Liste zurück
    returnHead (){
        return this.head;
    }

    // gibt das Tail (Ende) der Liste zurück
    returnTail () {
        let current = this.head;
        let tailNode = null;
        
        while (current !== null){
            tailNode = current;
            current = current.nextNode;
        }

        return tailNode;
    }

    // gibt den Knoten bei den eingegebenen Knoten zurück
    searchAtIndex (index){
        if (index < 0) return null; // Überprüfung auf ungültigen Index


        let counter = 0;
        let current = this.head;
        while (current !== null){
            if(index === counter){
                return current;
            }

            current = current.nextNode;
            counter++;
        }

        return console.error("Kein Knoten an diesem Index vorhanden!"); 
    }

    // Letzter Knoten wird entfernt
    removeLastNode(){
        if (this.head === null) return; // Die Liste ist bereits leer
        if (this.head.nextNode === null){ // Die Liste hat einen Knoten
            this.head = null;
            return;
        }

        let current = this.head;
        while (current.nextNode.nextNode !== null){
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    // Überprüft ob der eingegebene Wert in der Liste vorhanden ist
    containsValue (value){
        let current = this.head

        while (current !== null){
            if(value === current.value){
                return console.log(true);
            }

            current = current.nextNode;
        }
        return console.error(false);
    }

    // Anhand des Values vom Knoten wird der Index ermittelt
    findIndex (value) {
        
        let counter = 0; 
        let current = this.head;

        while (current !== null){
            if (current.value === value){
                return counter;
            }
            current = current.nextNode;
            counter++;
        }

        return console.error("Value nicht vorhanden in der Liste");
    }

    // Gibt einen String wieder, der die gesamte Liste in diesem Format darstellt: ( value ) -> ( value ) -> ( value ) -> null 
    toString(){
        let result = "";
        let current = this.head;
        while (current !== null){
            if (current.nextNode === null){
                result += `(${current.value}) -> null`;
            } else {
                result += `(${current.value}) -> `;

            }
            current = current.nextNode;
        }

        return result;
     }

     // Hinzufügen eines neuen Knoten am gewünschten Index
     insertAt(value, index){
        if (index < 0){
            throw new Error("Index nicht im Grenzenbereich");
        }

        if(index === 0){ // Wenn Index 0 = Knoten wird am Anfang hinzugefügt
            this.addStart(value);
            return;
        }


        let counter = 0; 
        let current = this.head;
        while (current !== null){
            if (counter === index - 1){ // der neue Knoten wird vor dem aktuellen Knoten hinzugefügt
                current.nextNode = new Node(value, current.nextNode);
                return;
            } 
            current = current.nextNode;
            counter++;
        }

        throw new Error("Index nicht im Grenzenbereich");
     }

     // Entfernt den Knoten am gewünschten Index
     removeAt(index){
        if (index < 0){
            throw new Error("Index nicht im Grenzenbereich");
        }

        if(index === 0){
            if(this.head === null){
                throw new Error("Liste ist leer")
            }
            this.head = this.head.nextNode; // Head wird auf den Nachfolger übertragen
            return;
        }

        let counter = 0;
        let current = this.head; 
        let previous = null;

        while (current !== null){
            if (counter === index){
                if (current === null){
                    throw new Error("Kein Knoten am Index vorhanden");
                }
                previous.nextNode = current.nextNode; // previous wird mit den nextNode verbunden = current wird übersprüngen => quasi gelöscht
                return;
            }

            previous = current; // previous speicher current, bevor current verändert wird
            current = current.nextNode;
            counter++;
        }
     }

    // Zeigt alle Werte in der Liste an, Beginn: Head bis -> Ende
    displayAllValues () {
        let current = this.head; // Current wird an den Head = Anfang gesetzt
        while (current !== null) { // Solange Current !null -> null = Ende
            console.log(current.value);
            current = current.nextNode; // übergeht auf den nächsten Knoten
        }

    }


} 