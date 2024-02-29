let lngCode= prompt("Enter a language code, valid options are: es, de, en, fr")
switch (lngCode){
    case "es": document.write("Hello World translated in Spanish is: Hola Mundo.")
    case "de": document.write("Hello World translated in German is: Hallo Welt.")
    case "fr": document.write("Hello World translated in French is: Bonjour le monde.")
    default: document.write("Hello World!")
}
