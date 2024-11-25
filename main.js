// ! Esercizio 1 :
// //^ Variabile x che uso per testare le condizioni
// let v = 30

// //?Voto meno di 18
// if(v <18) {//?stampi insufficiente
//     console.log("insufficiente");

// }

// //?Voto compreso tra 18/21
// else if (v >= 18, v < 21){//?stampi sufficiente
//     console.log("sufficiente");

// }

// //?Voto compreso tra 21/24
// else if (v >= 21, v < 24){//?stampi
//     console.log("buono");

// }

// //?Voto compreso tra 24/27
// else if (v >= 24, v < 27){//?stampi
//     console.log("distinto");

// }

// //?Voto compreso tra 27/29
// else if (v >= 27, v <= 29){//?stampi
//     console.log("ottimo");

// }
// //?Voto eguale a 30
// else if (v = 30){//?stampi eccellente smithers
//     console.log("eccellente smithers");

// }


// ! Esercizio 2:

// let num = 2
//      //^init //^c. cont. //incr. 
// for (let i = 1; i < 11; i++) {//?stampi il prodotto di una stringa num per la condizione di continuazione implicitamente incrementando di 1
//     console.log(`${num} x ${i} = ${num * i}`);
// }



// ! Esercizio 3:

// //^ Variabile x che uso per testare le condizioni
// let t = 40

// //?Temperatura sotto i -10  
// if (t < -10) {//? mi stampi
//     console.log("copriti, ancora ti raffreddi");
// }

// //?Temperatura sotto gli 0  
// else if (t < 0) {//? mi stampi
//     console.log("non è tanto il freddo, quanto l'umidità");
// }

// //?Temperatura sotto i 20  
// else if (t < 20) {//? mi stampi
//     console.log("non ci sono piu' le mezze stagioni");
// }

// //?Temperatura minore o ugale a 30
// else if ( t <= 30) {//? mi stampi
//     console.log("lu mare, lu sole, lu ientu");
// }

// //?Temperatura maggiore di 30
// else if (t > 30) {//? mi stampi
//     console.log("mi dia una peroni sudata");
// }

//! Esercizio 4

// let bevanda;

// while (true) {
//     bevanda = prompt('Inserisci il numero della bevanda: \n (1) Acqua 💧\n (2) Coca-Cola 🥤\n (3) Birra 🍺');

//     if (bevanda === '1') {
//         console.log("È stata selezionata l'acqua 💧");
//         alert("È stata selezionata l'acqua 💧");
//         break;
//     } else if (bevanda === '2') {
//         console.log("È stata selezionata la Coca-Cola 🥤");
//         alert("È stata selezionata la Coca-Cola 🥤");
//         break;
//     } else if (bevanda === '3') {
//         console.log("È stata selezionata la Birra 🍺");
//         alert("È stata selezionata la Birra 🍺");
//         break;
//     } else {
//         console.log("Selezione non valida, riprova.");
//     }
// }



//! Esercizio 5 :

//^ Dichiaro le prime variabili che mi permettono di usare il menù in maniera interattiva nella seconda var, mantengo un false fino ad input contrario, lì entra in gioco la terza
let startGame;
let seisicuro = false;
let seisicuromess = "Sei sicuro di voler uscire? Non potrai salvare i tuoi progressi 😞";

//* INIZIO GIOCO
while (!seisicuro) {

    startGame = prompt(`_________________________ 🍄 SUPER MARIO BROS 🍄 _______________________ \n(1️⃣) 🎮 Premi start! 🎮 \n(2️⃣) 👋 Esci...👋`);

    //^ Se il player decide di uscire
    if (startGame == '2') {
        let confirmExit = prompt(`${seisicuromess}\n(1️⃣) Conferma ✅ \n(2️⃣) Annulla 🛑`);

        if (confirmExit == '1') {
            alert("Uscita confermata. Arrivederci! 👋");
            seisicuro = true;
        } else if (confirmExit == '2') {
            alert("Perfetto! Torniamo a giocare! 🍄🎮");
        } else {
            alert("Selezione non valida, riprova.");
            break;
        }
    }
    //* Se il player decide di iniziare il gioco
    else if (startGame == '1') {
        alert("🍄🎮 ✅ LEZZEGOH! ✅ 🎮🍄");

        //^ PRIMO LIVELLO :   ___ 👹 Goomba 👹 ___
        let goomba = prompt(`Attento c'è un Goomba! 👹 \n(1️⃣) Salta e corri 🏃‍♂️💨 \n(2️⃣) Salta sopra al nemico ed eliminalo 💥👹`);

        //? Scelte per il player:
        if (goomba == '1') {
            alert("🎉✅🎉 LEZZEGOH! Sei riuscito a schivare il tuo primo nemico! 🎉✅🎉");
        } else if (goomba == '2') {
            alert("HEREWEGOH! L'hai fatto fuori! 💥👹👏");
        } else {
            alert("OH NO! Mario ha perso le tracce di Peach!😔😱💀");
            break; // Interrompi il ciclo e riparti da capo
        }

        //^ Introduco un power-up facoltativo 🍄!
        let redmush = prompt(`Ti ha droppato una moneta, ma più avanti c'è un 1-UP 🍄, che fai? \n(1️⃣) Coin 💰 \n(2️⃣) 1-UP 🍄`);

        //  Qui dichiaro il buff
        let UP = false;

        if (redmush == '1') {
            alert("💰 Non si dice mai di no ad una monetina! 💰");
            UP = false;  // Il buff 1-UP non esiste se scelgo il coin
        } else if (redmush == '2') {
            alert("🍄✅🎉HEREWEGOH!!! Ora sei più alto! 🎉✅🍄");
            UP = true;   // Il buff viene attivato se scelgo il 1-UP
        } else {
            alert("Non c'è tempo Peach ti aspetta!😞");
            break;
        }

        //^ SECONDO LIVELLO : ___ 🐢 Koopa Troopa 🐢 ___
        let guscio1 = false;
        let koopaHitCount = 0;
        let has1UP = UP; // Impostiamo la variabile has1UP in base al valore di UP
        let addcoin = (UP === false); // Se UP è falso, il giocatore ha preso solo la moneta

        //^ Inizio del ciclo che gestisce l'incontro con Koopa
        while (true) {
            let koopatroopa = prompt(`Hai incontrato un Koopa Troopa 🐢, e adesso?\n(1️⃣) Salta sopra al Koopa 🦘 \n(2️⃣) Salta oltre il Koopa! 🏃‍♂️💨`);

            if (koopatroopa == '1') {
                alert("Ottimo! Hai saltato sopra il Koopa! 🐢🎯💥");
                guscio1 = true;  // Se il player schiaccia Koopa, ottiene il guscio
                break; // Passa al livello successivo
            } else if (koopatroopa == '2') {
                // Se il player ha l'1-UP, Mario può salvarsi
                if (has1UP) {
                    alert("🍄 Sei stato colpito dal Koopa 🐢😞💥 ma hai una seconda chance! 🍄");

                    let koopaSecondChance = prompt(`Cosa fai ora?\n(1️⃣) Schiaccia il Koopa 🦘\n(2️⃣) Salta oltre il Koopa 💨\n(3️⃣) Scivola sotto il Koopa 🏃‍♂️💨`);

                    if (koopaSecondChance == '1') {
                        alert("✅🎯🐚 Ottimo! Hai schiacciato il Koopa e raccolto il suo guscio! ✅🎯🐚");
                        guscio1 = true; // Ottiene il guscio
                        break; // Passa al livello successivo
                    } else if (koopaSecondChance == '2') {
                        // Incrementa il colpo subito dal Koopa
                        koopaHitCount++;

                        if (koopaHitCount === 2) {
                            // Game over se Mario subisce due colpi
                            alert("Sei stato colpito di nuovo dal Koopa! 🐢💥💀");
                            alert("UAAAHHH... 💀🛑");
                            break; // Game over
                        } else {
                            alert("Sei riuscito a saltare oltre il Koopa! 🎉 Ma non hai evitato il danno...");
                            break; // Passa al livello successivo, ma perdi il buff del 1-UP
                        }
                    } else if (koopaSecondChance == '3') {
                        alert("Scivolata perfetta! Ma niente guscio stavolta. Il Koopa è sconfitto. 🏃‍♂️💨");
                        break; // Passa al livello successivo
                    } else {
                        alert("Scelta non valida, prova di nuovo.");
                    }

                    break; // Fine del ciclo 1-UP
                } else if (addcoin) {
                    // Se Mario ha scelto la moneta, non ha protezione contro i danni
                    alert("😱😞💰 Mamma mia, la moneta non puo' difenderti! 💰😞😱");
                    alert("💀💥🐢 Il Koopa ti ha sconfitto! 🐢💥💀");
                    break; // Game over
                } else {
                    alert("UAAAHHH... 💀🛑");
                    break; // Game over
                }
            } else {
                alert("Scelta non valida, prova di nuovo.");
            }
        }
        //^ Incontro con la Piranha Plant 🌱💥
        let guscio2 = false;
        let piranhaHitCount = 0;
        has1UP = UP; // Impostiamo la variabile has1UP in base al valore di UP
        addcoin = (UP === false); // Se UP è falso, il giocatore ha preso solo la moneta

        //^ Inizio del ciclo che gestisce l'incontro con la Piranha Plant
        while (true) {
            let piranhaPlant = `Attento! Una Piranha Plant 🌱💥 sta uscendo dal tubo! 🚪 Che fai?😱 \n(1️⃣) Salta sopra la Piranha Plant 🦘\n(2️⃣) Aspetta che rientri nel tubo 🚪 e poi corri 🏃‍♂️💨`;

            if (guscio1) {
                piranhaPlant += `\n(3️⃣) Colpisci la pianta con il guscio appena raccolto 🐚🎯💥`;
            }

            let piranhaPlantChoice = prompt(piranhaPlant);

            //? Scelte per il player:
            if (piranhaPlantChoice == '1') {
                if (has1UP) {
                    alert("Perfetto! Hai saltato sopra la Piranha Plant mentre usciva dal tubo! 🎯 Ma sei stato ferito 😞... Grazie al 1-UP, però, non sei morto! 🎉");
                    piranhaHitCount++; // Incrementa il colpo subito dalla Piranha Plant
                } else {
                    alert("ooofff... La Piranha ti ha colpito mentre saltavi 😱💀");
                    alert("Game Over! 😔");
                    break; // Game over
                }
            } else if (piranhaPlantChoice == '2') {
                alert("Bravo! Hai aspettato che rientrasse nel tubo 🚪 e sei riuscito a correre oltre! 🏃‍♂️💨");
            } else if (piranhaPlantChoice == '3') {
                if (has1UP) {
                    alert("Ottimo! Hai colpito la pianta con il guscio! 🐚💥");
                    alert("Sei riuscito a superare la Piranha Plant! 🎉 Ma sei diventato nano! 🐢");
                    marioSize = "nano";  // Mario diventa nano
                } else {
                    alert("Hai colpito la pianta con il guscio! Ma senza il 1-UP, non sopravvivi al danno. 😔");
                    alert("Game Over! 😞");
                    break; // Game over
                }
                alert("🎉🎉🎉🎉 Sei riuscito a superare la Piranha Plant!🎉🎉🎉🎉 \n🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉");
                break; // FEIN
            } else {
                alert("Scelta non valida, prova di nuovo.");
            }

            // uccidetemi....maledetto mario che non sa scegliere da solo....            (O)  -  (O)

        }
    }
}
