/* Creo una funzione che accetta 2 parametri */
function fullName (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    return this.firstName + " " + this.lastName;
}