let  mensaje: string = "Hola mundo"



/*
tipos de datos primitivos ( nativos ) de js

number
string
boolean
null
undefined
object
function


tipos de ts
any                 --->> tratar de no usarlo
unknown   ===  tipo de dato desconocido  -- parecido al any pero con diferencia
never
arrays
tuplas
Enums



tipos inferidos


*/

let extincionDinosaurios: number = 76_000_000

let extintos: boolean = true
// let extintos = true     tipado inferido  siempre que la inicializemos

// let mivariable     es de tipo "any"

// mivariable = "casa"     -- permite que podamos asignarle cualquier valor
// mivariable = 32


function chanchitoFeliz(config: any) {   // no es recomendable -- de manera explicita
// function chanchitoFeliz(config) {   // no es recomendable en tsconfig.json buscar "noImpliciAny": true descomentar y pasar al false( con esto el compilador no se queja - no marca error --- desactivamos typescript)
    return config
}

// tipo de arreglo
// let animales = ['chanchito', 'feliz', 'felipe']
let animales: string[] = ['chanchito', 'feliz', 'felipe']
let nums: number[] = [1,2,3] 
let nums2 = []  // arreglo de tipo any (array que puede contener cualquier tipo de datos)

let checks: boolean[] = []

let num3: Array<number> = []


// animales.map( x => x. ) // el autocompletado sugiere métodos del tipo de datos
// muns.map( x => x. ) // el autocompletado sugiere métodos del tipo de datos



// tuplas
let tupla: [number, string] =  [1, 'chanchito feliz']
tupla.push(12)// el compilador no arroja error  --- bug  -- no se puede realizar



/// Enums    -- lista de constantes
const chica = 's'
const mediana = 'm'
const grande = 'l'
const extragrande = 'xl'

// enum Talla { Chica, Mediana, Grande, ExtraGrande }     // pascalCase  -- el compilador le asigna 0,1,2,3
// enum Talla { Chica = 2, Mediana, Grande, ExtraGrande }     
enum Talla { Chica = 's', Mediana = 'm', Grande = 'l', ExtraGrande = 'xl' }     

const variable1 = Talla.Grande
console.log(variable1)



const enum LoadingState { Idle, Loading, Success, Error }      /// no hemos iniciado la carga, cargando, exito, error     // los valores del enum no fueron generados porque definimos como const -- genera un codigo reducido en js


const estado = LoadingState.Success



// Objetos
/*
const objeto:{
    id: number,
    nombre: string
} = { id: 1, nombre: '' }
*/

/*
const objeto:{
    id: number,
    nombre?: string     /// propiedad opcional
} = { id: 1 }
*/

/*
const objeto:{
    readonly id: number,
    nombre: string,
    talla: Talla
} = { id: 1, nombre: 'Hola mundo', talla: Talla.Chica }
*/

// objeto.id = 42 // cambiar el valor
// objeto.id = 42 // con readonly no se puede cambiar el valor de la propiedad -- solo puede ser de lectura


type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

type Persona = {
    readonly id: number,
    nombre: string,
    talla: Talla,
    direccion: Direccion

    // direccion: {
    //     numero: number,
    //     calle: string,
    //     pais: string
    // }
}
const objeto: Persona = {
    id: 1, 
    nombre: 'Hola mundo', 
    talla: Talla.Chica,
    direccion: {
        numero: 1,
        calle: 'Siempre viva',
        pais: 'Mexico'
    }
}