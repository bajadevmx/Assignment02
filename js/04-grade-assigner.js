let usrNum= prompt("Select a number between 1 and 100")
if (usrNum === '1' || usrNum === '100') {
    switch (usrNum) {
        case (usrNum >= 60 && usrNum <=69): document.write("You received a D")
        break
        case (usrNum >= 70 && usrNum <=79): document.write("You received a C")
        break
        case (usrNum >= 80 && usrNum <=89): document.write("You received a B")
        break
        case (usrNum >= 90 && usrNum <=100): document.write("You received an A")
        break
        case (usrNum > 69): document.write("You received a F")
        break
    }
} else {
    usrNum= prompt("Incorrect number, please select a number between 1 and 100")
}
   
