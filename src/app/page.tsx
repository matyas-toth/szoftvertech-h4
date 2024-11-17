import Image from "next/image";

export default function Home() {

  const groupMembers = [
    { name: "TÓTH MÁTYÁS", code: "OQH5NH", email: "matyastoth.mail@gmail.com" },
    { name: "VAY DOMINIKA", code: "VM3DIR", email: "vaydominika@gmail.com" },
    { name: "ARDON MILÁN", code: "E00XC3", email: "ardon.milan1@gmail.com" },
    { name: "KOVÁCS ATTILA MARCELL", code: "SEGUV3", email: "kovacsmarci03@gmail.com" },
    { name: "GOMBKÖTŐ ÁBEL MARCELL", code: "C67VWA", email: "gmbkt09@gmail.com" },
  ];

  const history = [
    { date: "2024. 11. 13.", version: "1.0", description: "Kezdeti verzió, az oldal összeállítása", author: "Vay Dominika" },
    { date: "2024. 11. 15.", version: "1.1", description: "Egyes alpontok kitöltése, formázása", author: "Vay Dominika" },
  ];

  const tableOfContents = [
    { number: "1.", title: "Bevezetés", id: "bevezetes" },
    { number: "2.", title: "Kezdeti osztálydiagram", id: "kezdetiosztalydiagram" },
    { number: "2.1.", title: "Osztálydiagram", id: "osztalydiagram" },
    { number: "2.2.", title: "Osztályok felsorolása", id: "osztalyokfelsorolasa" },
    { number: "2.3.", title: "Alrendszerek", id: "alrendszerek" },

    { number: "2.3.1.", title: "Felhasználói kezelés alrendszer", id: "felhasznaloalrendszer" },
    { number: "2.3.2.", title: "Kurzus kezelés alrendszer", id: "kurzusalrendszer" },
    { number: "2.3.3.", title: "Gamifikációs alrendszer", id: "gamifikacioalrendszer" },
    { number: "2.3.4.", title: "Értékelés és Véleményezés alrendszer", id: "ertekelesvelemenyalrendszer" },
    { number: "2.3.5.", title: "Pénzügyi és Fizetési alrendszer", id: "penzugyfizetesalrendszer" },
    { number: "2.3.6.", title: "Adatkezelési alrendszer", id: "adatkezelesalrendszer" },

    { number: "3.", title: "Az első alrendszer modellje", id: "alrendszermodell" },
    { number: "3.1.", title: "Statikus modell", id: "statikusmodell" },

    { number: "3.1.1.", title: "Kapcsolatok pontosítása", id: "kapcsolatokpontositasa" },
    { number: "3.1.2.", title: "Attribútumok azonosítása", id: "attributumokazonositasa" },
    { number: "3.1.3.", title: "Bázisosztályok keresése", id: "bazisosztalyokeresese" },

    { number: "3.2.", title: "Dinamikus modell", id: "dinamikusmodell" },
    { number: "3.3.", title: "Funkcionális modell", id: "funkcionalismodell" },
    { number: "3.4.", title: "Operációk azonosítása", id: "operaciokazonositasa" },
    { number: "3.5.", title: "Az analízis modell osztálydiagramja", id: "analizismodellosztalydiagram" },
    { number: "3.6.", title: "Az analízis modell osztályinak listája", id: "analizismodellosztalyai" },

    { number: "3.6.1", title: "Felhasználó osztály", id: "felhasznaloosztaly" },
    { number: "3.6.2", title: "Készítő osztály", id: "keszitoosztaly" },
    { number: "3.6.3.", title: "Értékelő osztály", id: "ertekeloosztaly" },
    { number: "3.6.4.", title: "Tananyag osztály", id: "tananyagosztaly" },
    { number: "3.6.5.", title: "Jelvény osztály", id: "jelvenyosztaly" },
    { number: "3.6.6.", title: "XP osztály", id: "xposztaly" },
    { number: "3.6.7.", title: "Ranglista osztály", id: "ranglistaosztaly" },
  ];

  return (
    <>
    
      {
          /*
          CÍMLAP
          */
      }

     <div className="flex flex-col h-screen">
     <div className="p-4">
          <h1 className="text-xl">Csoport neve: Alt+F4 Alakulat - Az Azonnali Kilépők</h1>
          <h1 className="text-xl">Feladat sorszáma: 4</h1>
          <h1 className="text-xl">Feladat címe: H4</h1>
        </div>
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-5xl mb-8 py-8">Analízis modell</h1>
          <h4 className="text-l">Gyakorlatvezető</h4>
          <h3 className="text-3xl mb-8">DR. ÁRVAI LÁSZLÓ LAJOS</h3>
          <h3 className="text-2xl mb-8">Csoporttagok:</h3>
          <table className="mb-16 border-collapse">
            <tbody>
              {groupMembers.map((member, index) => (
                <tr key={index}>
                  <td className="border border-black p-4 text-lg">{member.name}</td>
                  <td className="border border-black p-4 text-lg">{member.code}</td>
                  <td className="border border-black p-4 text-lg">{member.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 text-right mb-8">
          <h2>BEADÁS DÁTUMA</h2>
          <h2>2024. november 18.</h2>
        </div>
     </div>

      {
          /*
          TÖRTÉNET
          */
      }

     <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-4xl mb-8">Történet - History</h1>
          <table className="mb-16 border-collapse">
            <tbody>
               <tr>
                  <th className="border border-black p-4 text-lg">Dátum</th>
                  <th className="border border-black p-4 text-lg">Verzió</th>
                  <th className="border border-black p-4 text-lg">Leírás</th>
                  <th className="border border-black p-4 text-lg">Szerző</th>
               </tr>
              {history.map((entry, index) => (
                <tr key={index}>
                  <td className="border border-black p-4 text-lg">{entry.date}</td>
                  <td className="border border-black p-4 text-lg">{entry.version}</td>
                  <td className="border border-black p-4 text-lg">{entry.description}</td>
                  <td className="border border-black p-4 text-lg">{entry.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {
          /*
          TARTALOMJEGYZÉK
          */
        }

          <div className="flex flex-col items-center justify-center mb-16">
          <h1 className="text-4xl mb-8">Tartalomjegyzék</h1>
          <table className="mb-16 border-collapse underline text-blue-600 hover:text-blue-900 transition-colors duration-200 border-black">
            <tbody>
              {tableOfContents.map((item, index) => (
                <tr key={index}>
                  <td className="px-52 border-black">
                    <a href={`#${item.id}`} className="text-blue-600 hover:text-blue-900 transition-colors duration-200">
                      {item.number} {item.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {
          /*
          BEVEZETÉS
          */
        }

        <h2 id="bevezetes" className="ml-8 text-xl font-bold text-sky-600 pt-6">1. Bevezetés</h2>

        <p className="pl-[5.3rem] pt-6">
        Az analízis modell a Learnify platform objektumorientált tervezésének alapját képezi, célja a rendszer kulcsfontosságú elemeinek és azok kapcsolódásainak részletes leírása. Az e-learning platform funkcióinak megvalósítása érdekében a modell azonosítja és definiálja azokat az objektumokat, amelyek az alapvető működést biztosítják, beleértve a kurzusok létrehozását, a felhasználói interakciókat és a bevételmegosztási mechanizmust. Ez a dokumentáció szolgál majd kiindulópontként a platform tényleges implementációjához, biztosítva az átláthatóságot és a hatékony fejlesztést.
        </p>


        {
          /*
          KEZDETI OSZTÁLYDIAGRAM
          */
        }

        <h2 id="kezdetiosztalydiagram" className="ml-8 text-xl font-bold text-sky-600 pt-6">2. Kezdeti osztálydiagram</h2>

        {
          /*
          OSZTÁLYDIAGRAM
          */
        }

        <h2 id="osztalydiagram" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.1. Osztálydiagram</h2>

        {
          /*
          OSZTÁLYOK FELSOROLÁSA
          */
        }

        <h2 id="osztalyokfelsorolasa" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.2. Osztályok felsorolása</h2>

        <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
          <p className="font-bold">Felhasználó</p>
          <li className="pl-[1rem]">Leírás: A felhasználó osztály a platformot használó személyek képviselete. Képviseli a tanulókat, a kurzusokat készítő felhasználókat, illetve azokat, akik értékeléseket adnak. Ők gyűjtik az XP-t, szerezhetnek jelvényeket és különböző tevékenységekhez kapcsolódó teljesítményeket érhetnek el.</li>
          <p className="font-bold pt-6">Kurzus</p>
          <li className="pl-[1rem]">Leírás: A kurzus osztály a felhasználók által létrehozott tananyagot képviseli. Tartalmazza a kurzus nevét, leírását, árát és egyéb jellemzőit. A kurzusok lehetnek ingyenesek vagy fizetősek, és egy felhasználó hozhatja létre őket. A kurzusok összekapcsolódnak a tananyagokkal és az értékelésekkel.</li>
          <p className="font-bold pt-6">Értékelés</p>
          <li className="pl-[1rem]">Leírás: Az értékelés osztály segíti a felhasználók visszajelzéseit, hogy egy adott kurzus mennyire volt hasznos. Minden értékelés tartalmaz egy pontszámot és szöveges véleményt. Az értékelések segítik a többi felhasználót a kurzusok kiválasztásában és hozzájárulnak a kurzusok népszerűsítéséhez.</li>
          <p className="font-bold pt-6">Tananyag</p>
          <li className="pl-[1rem]">Leírás: A tananyag osztály a kurzusokon belüli egyes leckéket vagy más típusú tartalmakat reprezentálja. A tananyagok különféle típusokat tartalmazhatnak, mint szöveges anyagok, videók vagy feladatok, és ezek az alapvető oktatási egységek, amelyek segítik a tanulókat a kurzus végrehajtásában.</li>
          <p className="font-bold pt-6">Tranzakció</p>
          <li className="pl-[1rem]">Leírás: A tranzakció osztály a felhasználók által fizetett kurzusokkal kapcsolatos pénzügyi tranzakciókat kezeli. Rögzíti a fizetés összegét, dátumát és státuszát, és biztosítja, hogy a fizetős kurzusok sikeresen lebonyolíthatóak.</li>
          <p className="font-bold pt-6">Jelvény</p>
          <li className="pl-[1rem]">Leírás: A jelvény osztály a felhasználók által megszerezhető gamifikációs elemeket képviseli, amelyeket különböző teljesítményekért, például a kurzusok sikeres befejezéséért kaphatnak. Minden jelvény egy adott teljesítményhez van kötve, és segíti a felhasználók motiválását.</li>
          <p className="font-bold pt-6">Teljesítmény</p>
          <li className="pl-[1rem]">Leírás: A teljesítmény osztály a felhasználók által elért mérföldköveket és nagyobb eredményeket rögzíti. Minden teljesítmény egy adott cél vagy követelmény teljesítését igazolja, például jelvények összegyűjtését vagy egy meghatározott számú kurzus sikeres befejezését.</li>
          <p className="font-bold pt-6">XP</p>
          <li className="pl-[1rem]">Leírás: Az XP osztály a felhasználók által gyűjtött tapasztalati pontokat tartalmazza. A pontok a felhasználók tevékenységei, például kurzusok elvégzése, értékelések írása és más rendszerbeli interakciók alapján gyűlnek. Az XP-ek segítenek a felhasználók rangjának növelésében és a gamifikációs célok elérésében.</li>
          <p className="font-bold pt-6">Toplista</p>
          <li className="pl-[1rem]">Leírás: A toplista osztály a rendszer legaktívabb felhasználóit és legjobban értékelt kurzusait sorolja fel. Az aktív felhasználók és népszerű kurzusok rangsorát jeleníti meg, ezzel is motiválva a felhasználókat a rendszer használatára. Az osztály különféle időszakok (például heti, havi) szerinti rangsorolást végezhet.</li>
        </ol>

        {
          /*
          ALRENDSZEREK
          */
        }

        <h2 id="alrendszerek" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.3. Alrendszerek</h2>

        <p className="pl-[5.3rem] pt-6">
        A Learnify e-learning platform funkcionális alrendszerei az osztálydiagram alapján az alábbiak szerint bonthatók le. Az egyes alrendszerek különböző felelősségi köröket képviselnek a rendszerben, és ezek az alrendszerek az egész platform működését támogatják. Az alábbiakban a legfontosabb alrendszerek és azok leírása található, valamint az osztályok, amelyek ezekhez az alrendszerekhez tartoznak.
        </p>

        <h2 id="felhasznaloalrendszer" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.3.1. Felhasználói kezelés alrendszer</h2>

        <p className="pl-[5.3rem] pt-6">
        Ez az alrendszer felelős a felhasználói adatok kezeléséért, beleértve a felhasználói regisztrációt, belépést, a felhasználói profilok létrehozását és frissítését. A rendszer ezen keresztül biztosítja a különböző típusú felhasználók (diákok, kurzus készítők, értékelők) közötti megkülönböztetést, valamint a felhasználói tevékenységek (XP gyűjtés, jelvények, ranglista) nyomon követését.
        </p>

        <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
          <p className="font-bold">Osztályok</p>
          <li>Felhasználó</li>
          <li>XP (Tapasztalati pont)</li>
          <li>Jelvény</li>
          <li>Teljesítmény (Achievement)</li>
        </ol>

        <h2 id="kurzusalrendszer" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.3.2. Kurzus kezelés alrendszer</h2>

        <p className="pl-[5.3rem] pt-6">
        Ez az alrendszer felelős a kurzusok létrehozásáért, kezeléséért és megjelenítéséért a platformon. A kurzusokat a felhasználók hozhatják létre, és ezek lehetnek ingyenesek vagy fizetősek. A kurzusok tartalmazzák a szükséges tananyagokat és egyéb kiegészítő elemeket. Az alrendszer emellett kezeli a kurzusok értékelését és a felhasználók közötti interakciókat.
        </p>

        <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
          <p className="font-bold">Osztályok</p>
          <li>Kurzus</li>
          <li>Tananyag</li>
          <li>Értékelés</li>
          <li>Tranzakció</li>
        </ol>

        <h2 id="gamifikaciosalrendszer" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.3.3. Gamifikációs alrendszer</h2>

        <p className="pl-[5.3rem] pt-6">
        A gamifikációs alrendszer célja a felhasználók motiválása a különböző játékelemek, mint XP, jelvények és teljesítmények segítségével. Ez az alrendszer kezeli a felhasználói teljesítményeket, elismeréseket és különféle ranglistákat. A cél, hogy a tanulási élményt játékos elemekkel tedd vonzóbbá és szórakoztatóbbá.
        </p>

        <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
        <p className="font-bold">Osztályok</p>
        <li>Jelvény</li>
        <li>XP (Tapasztalati pont)</li>
        <li>Teljesítmény (Achievement)</li>
        <li>Toplista</li>
        </ol>

        <h2 id="ertekelesvelemenyalrendszer" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.3.4. Értékelés és Véleményezés alrendszer</h2>

        <p className="pl-[5.3rem] pt-6">
        Ez az alrendszer felelős a kurzusok értékeléséért és véleményezéséért. A felhasználók itt írhatják le tapasztalataikat, pontozhatják a kurzusokat és hozzájárulhatnak mások döntéséhez a legjobb kurzusok kiválasztásában. Az értékelések segítik a kurzusok népszerűsítését és javítják a felhasználói élményt.
        </p>

        <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
        <p className="font-bold">Osztályok</p>
        <li>Értékelés</li>
        <li>Toplista</li>
        </ol>

        <h2 id="penzugyfizetesalrendszer" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.3.5. Pénzügyi és Fizetési alrendszer</h2>

        <p className="pl-[5.3rem] pt-6">
        Ez az alrendszer felelős a fizetési tranzakciók kezeléséért, beleértve a kurzusok árának beállítását és a felhasználók számára történő pénzügyi műveletek lebonyolítását. Az alrendszer biztosítja a fizetős kurzusok kezeléseit, és az ezekből származó bevételek elosztását a rendszer üzemeltetője és a kurzus készítői között.
        </p>

        <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
        <p className="font-bold">Osztályok</p>
        <li>Tranzakció</li>
        <li>Kurzus</li>
        </ol>

        <h2 id="adatkezelesalrendszer" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.3.6. Adatkezelési alrendszer</h2>

        <p className="pl-[5.3rem] pt-6">
        Az adatkezelés alrendszer biztosítja az adatok tárolását és kezelését, beleértve a felhasználói adatokat, a kurzusokhoz tartozó információkat, az értékeléseket, valamint minden más szükséges adatot. Az alrendszer biztosítja az adatok védelmét, és a rendszerben végzett műveletek nyomon követését.
        </p>

        <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
        <p className="font-bold">Osztályok</p>
        <li>Felhasználó</li>
        <li>Kurzus</li>
        <li>Értékelés</li>
        <li>Tananyag</li>
        <li>Tranzakció</li>
        </ol>


        {
          /*
          AZ ELSŐ ALRENDSZER MODELLJE
          */
        }

        <h2 id="alrendszermodell" className="ml-8 text-xl font-bold text-sky-600 pt-6">3. Az első alrendszer modellje</h2>

        {
          /*
          STATIKUS MODELL
          */
        }

        <h2 id="statikusmodell" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.1. Statikus modell</h2>

        {
          /*
          KAPCSOLATOK PONTOSÍTÁSA
          */
        }

        <h2 id="kapcsolatokpontositasa" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.1.1. Kapcsolatok pontosítása</h2>

        <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
          <p className="font-bold">1. Felhasználó és Kurzus közötti kapcsolat:</p>
          
            <p className="font-bold pt-6 pl-[1rem]">Kapcsolat pontosítása:</p>
          <li className="pl-[1rem]">
            A kapcsolat pontosítása során meghatároztuk, hogy a felhasználó többféle szerepet is betölthet: kurzus készítő vagy kurzus értékelő. A kapcsolat szerepkörök szerint változik, mivel a felhasználó lehet a kurzus készítője (aki létrehozza és szerkeszti), értékelője (aki a kurzusok minőségét pontozza és véleményezi), vagy résztvevője (aki a kurzust elvégzi és véleményt ír róla). Az osztálydiagramon a "Felhasználó" osztályhoz szerepköröket adtunk, és a kapcsolatokat ennek megfelelően frissítettük.
          </li>

          <p className="font-bold pt-6 pl-[1rem]">Szerepkörök és számosságok:</p>
          <li className="pl-[1rem]">A Felhasználó osztálynak lehet 0 vagy több "készített kurzus" kapcsolata.
          </li>
          <li className="pl-[1rem]">A Felhasználó osztálynak lehet 0 vagy több "készített kurzus" kapcsolata.
          </li>
        </ol>

        <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
          <p className="font-bold">2. XP és Jelvények közötti kapcsolat:</p>
          
            <p className="font-bold pt-6 pl-[1rem]">Kapcsolat pontosítása:</p>
          <li className="pl-[1rem]">
          Mivel a rendszer gamifikációt is tartalmaz, a pontosítás során egy új kapcsolatot hoztunk létre az XP és Jelvény osztályok között. Az XP gyűjtése egy szintlépést vagy eredmény elérését eredményezheti, amelyhez jelvények kapcsolódhatnak. Egy felhasználó több XP-t gyűjthet, és az XP értékekhez jelvényeket rendelhetünk, így minden szintlépéshez egy-egy jelvényt társíthatunk.
          </li>

          <p className="font-bold pt-6 pl-[1rem]">Szerepkörök és számosságok:</p>
          <li className="pl-[1rem]">A Felhasználó osztály 0 vagy több XP-vel rendelkezhet.
          </li>
          <li className="pl-[1rem]">Az XP osztályhoz 0 vagy több jelvény tartozhat.
          </li>
        </ol>

        <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
          <p className="font-bold">3. Kurzus és Értékelés közötti kapcsolat:</p>
          
            <p className="font-bold pt-6 pl-[1rem]">Kapcsolat pontosítása:</p>
          <li className="pl-[1rem]">
          A pontosítás során meghatároztuk, hogy a Kurzus osztály és az Értékelés osztály közötti kapcsolat 1-1: egy kurzushoz egy értékelés tartozik, de több felhasználó is adhat értékelést egy kurzusra. Az értékelés kapcsán hozzáadtuk a különböző értékelési szempontokat, mint például a pontozás és a kommentár. Az értékeléseket egy felhasználó írhatja meg, de fontos, hogy a felhasználó az értékelést csak egyszer teheti meg egy adott kurzusra.
          </li>

          <p className="font-bold pt-6 pl-[1rem]">Szerepkörök és számosságok:</p>
          <li className="pl-[1rem]">A Kurzus osztályhoz 0 vagy több értékelés tartozhat.
          </li>
          <li className="pl-[1rem]">Az Értékelés osztály egy 1:1 kapcsolatot ábrázol, tehát egy értékelés egy konkrét kurzust és felhasználót kapcsol össze.
          </li>
        </ol>

        <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
          <p className="font-bold">4. Toplista és XP kapcsolata:</p>
          
            <p className="font-bold pt-6 pl-[1rem]">Kapcsolat pontosítása:</p>
          <li className="pl-[1rem]">
          A pontosítás során bevezettük a Toplista osztályt, amely az XP és a Felhasználó közötti kapcsolatot modellezi. A toplista minden felhasználót a legmagasabb XP-jük alapján rangsorolja. Az XP gyűjtése közvetlen hatással van a toplistára, és az osztályok közötti kapcsolatot 1
számosságúra módosítottuk, hiszen több felhasználó is szerepelhet a toplistán, de egy felhasználó csak egy rangsorolt pozícióval rendelkezhet.
          </li>

          <p className="font-bold pt-6 pl-[1rem]">Szerepkörök és számosságok:</p>
          <li className="pl-[1rem]">A Toplista osztály egy 1
          kapcsolatot ábrázol a Felhasználó és az XP osztályok között.
          </li>
        </ol>

        <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
          <p className="font-bold">5. Jelvények és Teljesítmények kapcsolata:</p>
          
            <p className="font-bold pt-6 pl-[1rem]">Kapcsolat pontosítása:</p>
          <li className="pl-[1rem]">
          A kapcsolat pontosítása során a Jelvény és Achievement osztályokat külön entitásként modelleztük, és meghatároztuk, hogy egy felhasználó egy teljesítményt érhet el, amelyhez jelvényeket kaphat. Az achievementek nyújtanak egy elismerést, amelyhez a megfelelő jelvényt a rendszer automatikusan hozzárendeli, ha a felhasználó teljesíti a szükséges feltételeket.
          </li>

          <p className="font-bold pt-6 pl-[1rem]">Szerepkörök és számosságok:</p>
          <li className="pl-[1rem]">Az Achievement osztályhoz 0 vagy több jelvény tartozhat.
          </li>
          <li className="pl-[1rem]">A Felhasználó osztályhoz 0 vagy több achievement és jelvény tartozik.
          </li>
        </ol>


        {
          /*
          ATTRIBÚTUMOK AZONOSÍTÁSA
          */
        }

        <h2 id="attributumokazonositasa" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.1.2. Attribútumok azonosítása</h2>

        <ol className="pl-[5.3rem] list-decimal list-inside">
          <li className="font-bold pt-6">Felhasználó osztály</li>
          <p className="pl-[1rem] font-bold pt-6">Attribútumok:</p>

          <ol className="pl-[1rem] list-disc list-inside">
           <li><span className="font-bold">id (string):</span> Egyedi azonosító, amely biztosítja, hogy minden felhasználó egyedileg azonosítható legyen.</li>
           <li><span className="font-bold">név (string):</span> A felhasználó neve.</li>
           <li><span className="font-bold">email (string):</span> A felhasználó e-mail címe, amely a kommunikációhoz szükséges.</li>
           <li><span className="font-bold">regisztráció_dátuma (date)</span>: A felhasználó regisztrációjának dátuma.</li>
           <li><span className="font-bold">szerep (string):</span> A felhasználó szerepe (pl. készítő, értékelő, résztvevő).</li>
          </ol>

          <p className="pl-[1rem] font-bold pt-6">Megegyezések és meggondolások:</p>

          <ol className="pl-[1rem] list-disc list-inside">
           <li>A <span className="font-bold">pozíció</span> attribútum segítségével minden felhasználó számára meghatározható, hogy hol helyezkedik el a toplistán, biztosítva a gamifikációs szempontok figyelembevételét.</li>
          </ol>


          <li className="font-bold pt-6">Kurzus osztály</li>
          <p className="pl-[1rem]  font-bold pt-6">Attribútumok:</p>

          <ol className="pl-[1rem] list-disc list-inside">
           <li><span className="font-bold">id (string):</span> Egyedi azonosító, amely biztosítja, hogy minden kurzus egyedileg azonosítható legyen.</li>
           <li><span className="font-bold">név (string):</span> A kurzus neve.</li>
           <li><span className="font-bold">leírás (string):</span> A kurzus rövid leírása, amely információt nyújt a kurzus tartalmáról.</li>
           <li><span className="font-bold">kategória (string)</span> A kurzus típusa vagy kategóriája (pl. programozás, design, matematika).</li>
           <li><span className="font-bold">készítő (felhasználó)</span> A kurzust készítő felhasználó, akinek a Felhasználó osztályhoz tartozó id attribútuma szerepel.</li>
           <li><span className="font-bold">dátum (date)</span> A kurzus kezdő dátuma.</li>
          </ol>

          <p className="pl-[1rem] font-bold pt-6">Megegyezések és meggondolások:</p>

          <ol className="pl-[1rem] list-disc list-inside">
           <li>A <span className="font-bold">készítő</span> attribútum egy új kapcsolatot hozott létre a Felhasználó és Kurzus osztály között, hiszen a kurzus készítője lehet más, mint az értékelő vagy a résztvevő.</li>
           <li>A <span className="font-bold">kategória</span> attribútum segíti a kurzusok tematikai csoportosítását, ami a felhasználói élmény javítását szolgálja.</li>
          </ol>

          <li className="font-bold pt-6">XP osztály</li>
          <p className="pl-[1rem] font-bold pt-6">Attribútumok:</p>

          <ol className="pl-[1rem] list-disc list-inside">
           <li><span className="font-bold">id (string)</span> Egyedi azonosító, amely biztosítja, hogy minden XP egyedileg azonosítható legyen.</li>
           <li><span className="font-bold">mennyiség (int)</span> Az XP mennyisége, amelyet a felhasználó egy adott teljesítmény vagy aktivitás során szerez.</li>
           <li><span className="font-bold">típus (string)</span> Az XP típusa (pl. szintlépés, teljesítmény alapú).</li>
           <li><span className="font-bold">hozzárendelt_jelvény (jelvény)</span> Az XP-hez kapcsolódó jelvények azonosítása, amelyeket a felhasználó elérhet a megszerzett XP alapján.</li>
          </ol>

          <p className="pl-[1rem] font-bold pt-6">Megegyezések és meggondolások:</p>

          <ol className="pl-[1rem] list-disc list-inside">
           <li>Az <span className="font-bold">XP</span> osztályhoz hozzáadtuk a mennyiség és típus attribútumokat, hogy nyomon követhessük, milyen típusú aktivitások generálnak XP-t.</li>
           <li>A <span className="font-bold">hozzárendelt_jelvény</span> kapcsolat szorosabb kapcsolatot teremtett az XP és Jelvény osztályok között, lehetővé téve a gamifikációs elemek precíz nyomon követését.</li>
          </ol>

          <li className="font-bold pt-6">Jelvény osztály</li>
          <p className="pl-[1rem] font-bold pt-6">Attribútumok:</p>

          <ol className="pl-[1rem] list-disc list-inside">
           <li><span className="font-bold">id (string)</span> Egyedi azonosító, amely biztosítja, hogy minden jelvény egyedileg azonosítható legyen.</li>
           <li><span className="font-bold">név (string)</span> A jelvény neve (pl. "Első lépés", "Hókusz-pókusz").</li>
           <li><span className="font-bold">leírás (string)</span> A jelvény leírása, amely tartalmazza a megszerzésének feltételeit.</li>
           <li><span className="font-bold">szint (int)</span> A jelvényhez tartozó szint, amely meghatározza, hogy a felhasználó milyen szintű tevékenységet kell végezzen a megszerzéséhez.</li>
          </ol>

          <p className="pl-[1rem] font-bold pt-6">Megegyezések és meggondolások:</p>

          <ol className="pl-[1rem] list-disc list-inside">
           <li>A <span className="font-bold">szint</span> attribútum bevezetése lehetővé tette, hogy a rendszer kezelje a különböző szintű jelvényeket, amelyek különböző elismeréseket jelenthetnek a felhasználók számára.</li>
          </ol>

          <li className="font-bold pt-6">Értékelés osztály</li>
          <p className="pl-[1rem] font-bold pt-6">Attribútumok:</p>

          <ol className="pl-[1rem] list-disc list-inside">
           <li><span className="font-bold">id (string)</span> Egyedi azonosító, amely biztosítja, hogy minden értékelés egyedileg azonosítható legyen.</li>
           <li><span className="font-bold">értékelés (int)</span> Az értékelés számszerű értéke (pl. 1-5 között).</li>
           <li><span className="font-bold">komment (string)</span> A felhasználó által írt vélemény vagy megjegyzés a kurzusról.</li>
           <li><span className="font-bold">dátum (date)</span> Az értékelés dátuma.</li>
           <li><span className="font-bold">felhasználó (felhasználó)</span> Az értékelést leadó felhasználó.</li>
          </ol>

          <p className="pl-[1rem] font-bold pt-6">Megegyezések és meggondolások:</p>

          <ol className="pl-[1rem] list-disc list-inside">
           <li>Az <span className="font-bold">értékelés </span> és <span className="font-bold">komment</span> attribútumok hozzáadásával a rendszer részletesebben modellezi a felhasználói véleményeket, nem csupán numerikus értékelés formájában, hanem szöveges megjegyzésekkel is.</li>
          </ol>

          <li className="font-bold pt-6">Toplista osztály</li>
          <p className="pl-[1rem] font-bold pt-6">Attribútumok:</p>

          <ol className="pl-[1rem] list-disc list-inside">
           <li><span className="font-bold">id (string)</span> Egyedi azonosító a toplista pozíciók azonosításához.</li>
           <li><span className="font-bold">felhasználó_id (string)</span> A felhasználó azonosítója, aki szerepel a toplistán.</li>
           <li><span className="font-bold">xp_érték (int)</span> A felhasználó aktuális XP-je, amely alapján a rangsorban szerepel.</li>
           <li><span className="font-bold">pozíció (int)</span> A felhasználó helyezése a toplistán.</li>
          </ol>

          <p className="pl-[1rem] font-bold pt-6">Megegyezések és meggondolások:</p>

          <ol className="pl-[1rem] list-disc list-inside">
           <li>A <span className="font-bold">pozíció</span> segítségével minden felhasználó számára meghatározható, hogy hol helyezkedik el a toplistán, biztosítva a gamifikációs szempontok figyelembevételét.</li>
          </ol>

        </ol>

        {
          /*
          BÁZISOSZTÁLYOK KERESÉSE
          */
        }

        <h2 id="bazisosztalyokkeresese" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.1.3. Bázisosztályok keresése</h2>

        <p className="pl-[5.3rem] pt-6">
        A bázisosztályok keresése során az a cél, hogy az osztályok közötti hasonlóságokat azonosítsuk, és ha több osztályban is ismétlődnek bizonyos attribútumok, viselkedés, vagy más jellemzők, akkor azokat egy közös bázisosztályba emeljük. Az osztályok közötti ismétlődő elemek általánosítása lehetővé teszi, hogy az osztálydiagram tisztább, egyszerűbb és karbantarthatóbb legyen, miközben a redundanciát csökkenti.
        </p>

        <ol className="pl-[5.3rem] pt-6 list-decimal list-inside">

          <li className="font-bold">Felhasználó és Készítő, Értékelő osztályok általánosítása:</li>

          <ol className="list-disc list-inside">

          <p className="pt-6 font-bold">Jelenlegi állapot:</p>
          <p className="pl-[5.rem] pt-6">A <span className="font-bold">Felhasználó</span> osztály a következő attribútumokat tartalmazza:</p>

          <li className="pl-[1rem]">id (string)</li>
          <li className="pl-[1rem]">név (string)</li>
          <li className="pl-[1rem]">email (string)</li>
          <li className="pl-[1rem]">regisztráció_dátuma (date)</li>
          <li className="pl-[1rem]">szerep (string)</li>

          </ol>

          <p className="pt-6">Ezen kívül külön Készítő és Értékelő osztályok is léteznek, amelyek szintén tartalmazzák a Felhasználó osztályban szereplő alapvető attribútumokat (pl. id, név, email), és különböző egyedi metódusokat.</p>

          <p className="pl-[5.3.rem] pt-6 font-bold">Megegyezések és meggondolások:</p>
          <p className="pt-6">A <span className="font-bold">Készítő</span> és <span className="font-bold">Értékelő</span> osztályok hasonló adatokat tartalmaznak, mint a <span className="font-bold">Felhasználó</span> osztály. Tehát, ahelyett, hogy külön osztályokat definiálnánk, ezek az osztályok örökölhetik a Felhasználó osztályt, és csak azokat az egyedi tulajdonságokat vagy metódusokat tartalmazzák, amelyek a Készítő vagy Értékelő szerephez szükségesek.</p>

          <ol className="list-disc list-inside">

            <p className="font-bold pt-6">Bázisosztály és változtatások:</p>

            <li className="pl-[1rem]">A Felhasználó osztály bázisosztály lesz.</li>
            <li className="pl-[1rem]">A Készítő és Értékelő osztályok Felhasználó osztályból fognak örökölni, így csak a szükséges egyedi attribútumokat vagy metódusokat kell definiálni a két alosztályban.</li>
            <li className="pl-[1rem]">Az osztálydiagramon az Felhasználó osztály az őt öröklő osztályok (pl. Készítő, Értékelő) felé nyíló öröklődési kapcsolatot kap.</li>

          </ol>


        </ol>

        <ol className="pl-[5.3rem] pt-6 list-decimal list-inside">

          <li className="font-bold">Kurzus és Anyag osztályok általánosítása:</li>

          <ol className="list-disc list-inside">

          <p className="pt-6 font-bold">Jelenlegi állapot:</p>
          <p className="pl-[5.rem] pt-6">A <span className="font-bold">Kurzus</span> osztály a következő attribútumokat tartalmazza:</p>

          <li className="pl-[1rem]">id (string)</li>
          <li className="pl-[1rem]">név (string)</li>
          <li className="pl-[1rem]">leírás (string)</li>
          <li className="pl-[1rem]">kategória (string)</li>

          </ol>

          <p className="pt-6">Ezen kívül külön Anyag osztály is létezik, amely hasonló alapvető információkat tartalmaz, például id, típus, leírás.</p>

          <p className="pl-[5.3.rem] pt-6 font-bold">Megegyezések és meggondolások:</p>
          <p className="pt-6">A <span className="font-bold">Kurzus</span> és <span className="font-bold">Anyag</span> osztályok számos közös attribútummal rendelkeznek, mint például a név, leírás és id. Érdemes lenne ezen osztályok közötti ismétlődéseket egy bázisosztályba emelni.</p>

          <ol className="list-disc list-inside">

            <p className="font-bold pt-6">Bázisosztály és változtatások:</p>

            <li className="pl-[1rem]">A Tárgy vagy Elem osztály lehetne a közös bázisosztály, amely tartalmazza az id, név, leírás attribútumokat.</li>
            <li className="pl-[1rem]">A Kurzus és Anyag osztályok ebből a közös bázisosztályból örökölhetnek, csak azokat az egyedi jellemzőket tartalmazva, amelyek a Kurzus vagy Anyag osztályokhoz szükségesek.</li>
            <li className="pl-[1rem]">Az osztálydiagramon ez a közös Tárgy vagy Elem osztály egy bázisosztályként jelenne meg, amelyet a Kurzus és Anyag osztályok örökölnek.</li>

          </ol>


        </ol>

        <ol className="pl-[5.3rem] pt-6 list-decimal list-inside">

          <li className="font-bold">XP és Jelvény osztályok általánosítása:</li>

          <ol className="list-disc list-inside">

          <p className="pt-6 font-bold">Jelenlegi állapot:</p>
          <p className="pl-[5.rem] pt-6">Az <span className="font-bold">XP</span> és a <span className="font-bold">Jelvény</span> osztályok külön-külön szerepelnek, mindkettő rendelkezik id attribútummal, és mindkettő kapcsolódik a felhasználóhoz.</p>
          </ol>

          <p className="pl-[5.3.rem] pt-6 font-bold">Megegyezések és meggondolások:</p>
          <p className="pt-6">Az <span className="font-bold">XP</span> és a <span className="font-bold">Jelvény</span> osztályok bizonyos szempontból hasonlóak, mivel mindkettő egy felhasználó által megszerezhető entitást reprezentál, és mindkettő rendelkezik id-val. Az XP és a Jelvény közötti kapcsolatokat érdemes lenne egy közös bázisosztályba szervezni, amely lehetővé teszi, hogy az XP és Jelvény közös jellemzőiket egy bázisosztályban helyezzük el.</p>

          <ol className="list-disc list-inside">

            <p className="font-bold pt-6">Bázisosztály és változtatások:</p>

            <li className="pl-[1rem]">A Kiváltság vagy Elismerés osztály lehetne a közös bázisosztály, amely tartalmazza az id, név, leírás attribútumokat.</li>
            <li className="pl-[1rem]">Az XP és Jelvény osztályok ebből az osztályból örökölhetnének, így egyszerűbbé válna a kezelésük és a rendszer bővítése.</li>
            <li className="pl-[1rem]">Az osztálydiagramon a Kiváltság osztály a Jelvény és XP osztályok közvetlen bázisosztályaként jelenne meg.
            </li>

          </ol>
          </ol>

        {
          /*
          DINAMIKUS MODELL
          */
        }

        <h2 id="dinamikusmodell" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.2. Dinamikus modell</h2>

        {
          /*
          FUNKCIONÁLIS MODELL
          */
        }

        <h2 id="funkcionalismodell" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.3. Funkcionális modell</h2>

        <p className="pl-[5.3rem] pt-6">
        A funkcionális modell célja, hogy bemutassa a rendszer legfontosabb feldolgozási lépéseit, az egyes tevékenységek közötti adatáramlásokat és az üzleti logikát. A modell általában egy sor tevékenységből, folyamatból és azok összekapcsolásából áll, amelyeket az alábbiakban dokumentálunk.
        </p>

        <ol className="pl-[5.3rem] list-decimal list-inside">

        <li className="font-bold pt-6">Felhasználói Regisztráció és Bejelentkezés</li>

        <p className="font-bold pt-6">Leírás:</p>
        <p>A felhasználói regisztráció és bejelentkezés az alapvető folyamatok közé tartozik, amely biztosítja, hogy csak a jogosult felhasználók férhessenek hozzá a rendszerhez. A regisztráció során a felhasználó adatokat ad meg (pl. név, email, jelszó), amelyek eltárolásra kerülnek az adatbázisban. A bejelentkezés során a felhasználó a már regisztrált adataival jelentkezhet be, és ha a rendszer hitelesíti őt, akkor hozzáférést biztosít az alkalmazás további funkcióihoz.</p>

        <ol className="pt-6 list-disc list-inside">

          <p className="font-bold">Adatáramlás:</p>

          <li className="pl-[1rem]">Felhasználó adatai (név, email, jelszó) a Felhasználó osztály adatain keresztül a Felhasználói adatbázisba kerülnek.</li>
          <li className="pl-[1rem]">A bejelentkezéskor a Felhasználó osztály adatainak összehasonlítása a Felhasználói adatbázissal történik, és ha a jelszó és email megegyezik, a rendszer autentikálja a felhasználót.</li>

        </ol>

        <ol className="pt-6 list-decimal list-inside">

          <p className="font-bold">Diagram:</p>
          <p className="pt-6">A regisztráció és bejelentkezés folyamata egy tevékenységdiagram formájában ábrázolható. A diagram az alábbi lépéseket tartalmazza:</p>

          <li className="font-bold pl-[1rem]">Felhasználó adatai {'->'} Regisztrációs űrlap kitöltése {'->'} Adatok validálása {'->'} Adatbázisba mentés.</li>
          <li className="font-bold pl-[1rem]">Felhasználó bejelentkezése {'->'} Bejelentkezési űrlap kitöltése {'->'} Adatok összehasonlítása az adatbázissal {'->'} Felhasználó hitelesítése.</li>

        </ol>

        </ol>

        <ol className="pl-[5.3rem] list-decimal list-inside">

        <li className="font-bold pt-6">Készítő Tartalomfeltöltése és Értékelő</li>

        <p className="font-bold pt-6">Leírás:</p>
        <p>A Készítő osztály tagjai képesek új kurzusokat vagy anyagokat feltölteni a rendszerbe, amelyeket később az Értékelő osztály tagjai értékelhetnek. A feltöltés folyamata során a Készítő megadja az anyagok adatait, például címét, leírását, illetve esetleg fájlt is csatolhat. Az anyagok feltöltése után az Értékelő véleményezi őket, és visszajelzést ad, ami alapvetően fontos az anyagok minőségének javításában.</p>

        <ol className="pt-6 list-disc list-inside">

          <p className="font-bold">Adatáramlás:</p>

          <li className="pl-[1rem]">Téma anyagok és Téma adatainak feltöltése a Készítő által {'->'} Anyag feltöltése {'->'} Adatbázis frissítése.</li>
          <li className="pl-[1rem]">Az Anyag hozzáférhetősége az Értékelő számára {'->'} Értékelés bejegyzése {'->'} Adatbázis frissítése.</li>

        </ol>

        <ol className="pt-6 list-decimal list-inside">

          <p className="font-bold">Diagram:</p>
          <p className="pt-6">A tevékenységdiagram az alábbi folyamatot mutatja:</p>

          <li className="font-bold pl-[1rem]">Készítő {'->'} Anyag adatok megadása {'->'} Téma feltöltése {'->'} Anyag adatbázis frissítése.</li>
          <li className="font-bold pl-[1rem]">Értékelő {'->'} Anyag értékelése {'->'} Értékelés rögzítése {'->'} Adatbázis frissítése.</li>

        </ol>

        </ol>

        <ol className="pl-[5.3rem] list-decimal list-inside">

<li className="font-bold pt-6">Felhasználói XP és Jelvények</li>

<p className="font-bold pt-6">Leírás:</p>
<p>A rendszerben minden felhasználó XP-t és jelvényeket szerezhet a különböző tevékenységek végrehajtása során. Az XP egyfajta pontozási rendszer, amelyet a felhasználó teljesítménye alapján állítanak össze. A jelvények pedig különböző elismeréseket adnak, például a rendszerben való aktív részvételért vagy egy-egy kihívás teljesítéséért.</p>

<ol className="pt-6 list-disc list-inside">

  <p className="font-bold">Adatáramlás:</p>

  <li className="pl-[1rem]">XP számítása a Felhasználó tevékenységei alapján {'->'} XP frissítése a Felhasználó adatbázisában.</li>
  <li className="pl-[1rem]">Jelvények hozzáadása a Felhasználó elért eredményei alapján {'->'} Jelvények rögzítése a Felhasználó adatbázisában.</li>

</ol>

<ol className="pt-6 list-decimal list-inside">

  <p className="font-bold">Diagram:</p>
  <p className="pt-6">Ez a folyamat a következő lépéseket tartalmazza:</p>

  <li className="font-bold pl-[1rem]">Felhasználó aktivitása {'->'} XP számítása {'->'} Adatbázis frissítése.</li>
  <li className="font-bold pl-[1rem]">Felhasználó eredményei {'->'} Jelvény hozzáadása {'->'} Adatbázis frissítése.</li>

</ol>

</ol>


<ol className="pl-[5.3rem] list-decimal list-inside">

<li className="font-bold pt-6">Ranglista és Értékelések</li>

<p className="font-bold pt-6">Leírás:</p>
<p>A ranglista a felhasználók XP-jét rangsorolja, és megjeleníti a legaktívabb felhasználókat. Az értékelések segítenek nyomon követni, hogy egy-egy anyag mennyire sikeres a felhasználók körében, és ez befolyásolhatja a rangsorokat is. A ranglisták és az értékelések folyamatosan frissülnek a felhasználói aktivitás alapján.</p>

<ol className="pt-6 list-disc list-inside">

  <p className="font-bold">Adatáramlás:</p>

  <li className="pl-[1rem]">Felhasználói XP adatok {'->'} Ranglista frissítése {'->'} Adatbázis frissítése.</li>
  <li className="pl-[1rem]">Értékelések bejegyzése {'->'} Anyag értékelése {'->'} Értékelés mentése az adatbázisba.</li>

</ol>

<ol className="pt-6 list-decimal list-inside">

  <p className="font-bold">Diagram:</p>
  <p className="pt-6">A ranglista és értékelések folyamata:</p>

  <li className="font-bold pl-[1rem]">Felhasználói aktivitás {'->'} XP számítása {'->'} Ranglista frissítése {'->'} Adatbázis frissítése.</li>
  <li className="font-bold pl-[1rem]">Anyag értékelés {'->'} Értékelés bejegyzése {'->'} Adatbázis frissítése.
  </li>

</ol>

</ol>



        {
          /*
          OPERÁCIÓK AZONOSÍTÁSA
          */
        }

        <h2 id="operaciokazonositasa" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.4. Operációk azonosítása</h2>

        <p className="pl-[5.3rem] pt-6">Az operációk azonosítása során az osztálydiagramot kiegészítjük az egyes osztályokhoz tartozó műveletekkel (operációkkal), amelyek meghatározzák, hogy az osztályok hogyan reagálnak a felhasználói interakciókra, valamint hogyan kezelik az adatokat és végrehajtják a rendszer logikai folyamatait. A dinamikus és funkcionális modellek alapján az osztályokhoz rendelt operációk segítenek a rendszer működésének pontosabb modellezésében és az osztályok közötti kapcsolat részletesebb leírásában.</p>

        <ol className="pl-[5.3rem] pt-6 list-decimal list-inside">

        <li className="font-bold">Felhasználó osztály operációi:</li>

        <ol className="pt-6 list-disc list-inside">

          <p>A <span className="font-bold">Felhasználó</span> osztály az alapvető interakciókat képviseli, mint például a regisztráció, bejelentkezés, profil módosítása, és XP gyűjtése. Az alábbi operációk szükségesek:</p>

          <li className="pl-[1rem]"><span className="font-bold">regisztráció(adatok):</span> A felhasználó adatainak (pl. név, email, jelszó) rögzítése és tárolása az adatbázisban.</li>
          <li className="pl-[1rem]"><span className="font-bold">bejelentkezés(email, jelszó):</span> A felhasználó hitelesítése a rendszerbe való belépéshez.</li>
          <li className="pl-[1rem]"><span className="font-bold">profilMódosítása(adatok):</span> A felhasználói profil módosítása (pl. jelszó, email, egyéb személyes információk).</li>
          <li className="pl-[1rem]"><span className="font-bold">xpSzámítás(tevékenységek):</span> A felhasználó XP-jének frissítése a végrehajtott tevékenységek alapján.</li>
          <li className="pl-[1rem]"><span className="font-bold">jelvényHozzáadása(jelvények):</span> Az új jelvények hozzáadása a felhasználó profiljához.</li>

          <p className="font-bold pt-6">Döntések és Meggondolások:</p>

          <li className="pl-[1rem]">A <span className="font-bold">felhasználó adatainak</span> kezelése és a hitelesítési folyamat biztonsági megfontolások alapján kerültek meghatározásra.</li>
          <li className="pl-[1rem]">Az XP és jelvények operációi az <span className="font-bold">interakciók</span> alapján kerültek beemelésre a rendszerbe, és szorosan kapcsolódnak a felhasználó aktivitásához.</li>

      </ol>

      <li className="font-bold pt-6">Készítő osztály operációi</li>

      <ol className="pt-6 list-disc list-inside">

          <p>A <span className="font-bold">Készítő</span> osztály fő feladata a tartalom feltöltése, kezelése és annak értékelése. Az alábbi operációk szükségesek:</p>

          <li className="pl-[1rem]"><span className="font-bold">anyagFeltöltése(téma, fájl): </span> Az anyagok feltöltése a rendszerbe (pl. kurzusok, dokumentumok, fájlok).</li>
          <li className="pl-[1rem]"><span className="font-bold">anyagMódosítása(téma, fájl):</span> A feltöltött anyagok módosítása vagy frissítése.</li>
          <li className="pl-[1rem]"><span className="font-bold">anyagEltávolítása(téma):</span> A feltöltött anyag eltávolítása a rendszerből.</li>
          <li className="pl-[1rem]"><span className="font-bold">értékelésKérés(értékelő):</span> A feltöltött anyagok értékelése kérésének kezdeményezése.</li>

          <p className="font-bold pt-6">Döntések és Meggondolások:</p>

          <li className="pl-[1rem]">A <span className="font-bold">Készítő </span> operációi szoros kapcsolatban állnak az anyagok kezelésével. A módosítások és eltávolítások operációk figyelembe veszik az anyagok verziókezelését és biztonságos tárolását.</li>
          <li className="pl-[1rem]">Az <span className="font-bold">értékelés kérése</span> operáció lehetőséget ad arra, hogy az anyagok minősége folyamatosan javuljon a felhasználók visszajelzései alapján.
          </li>

      </ol>

      <li className="font-bold pt-6">Értékelő osztály operációi</li>

      <ol className="pt-6 list-disc list-inside">

          <p>Az <span className="font-bold">Értékelő</span> osztály az anyagok minőségét és hasznosságát értékeli, így az alábbi operációkra van szükség:</p>

          <li className="pl-[1rem]"><span className="font-bold">értékelésAdása(anyag, értékelés):</span> A feltöltött anyagok értékelése egy adott skálán.</li>
          <li className="pl-[1rem]"><span className="font-bold">kommentálás(anyag, komment)</span> A felhasználók visszajelzésének rögzítése a feltöltött anyagokkal kapcsolatban.</li>

          <p className="font-bold pt-6">Döntések és Meggondolások:</p>

          <li className="pl-[1rem]">Az <span className="font-bold">értékelés és kommentálás</span> operációk biztosítják a felhasználói visszajelzéseket és segítik a tartalom minősítését.</li>
          <li className="pl-[1rem]">A kommentek rögzítése az <span className="font-bold">anyagról</span> való véleményezés és az interakciók dokumentálásának fontos eleme, és segíti a transzparenciát az anyagok minősítésében.
          </li>

      </ol>

      <li className="font-bold pt-6">Ranglista osztály operációi</li>

      <ol className="pt-6 list-disc list-inside">

          <p>A <span className="font-bold">Ranglista</span> osztály a felhasználók teljesítményét követi, és ennek alapján rangsort alkot. Az operációk a következők:</p>

          <li className="pl-[1rem]"><span className="font-bold">rangListaFrissítés():</span> A ranglista automatikus frissítése, amely figyelembe veszi az összes felhasználó XP-jét.</li>
          <li className="pl-[1rem]"><span className="font-bold">rangListaFrissítés():</span> A legjobb felhasználó kiválasztása az XP alapján.</li>

          <p className="font-bold pt-6">Döntések és Meggondolások:</p>

          <li className="pl-[1rem]">A ranglista frissítésének operációja minden új aktivitás során automatikusan frissíti a rangsort.</li>
          <li className="pl-[1rem]">Az <span className="font-bold">aktivitás</span> alapján történő rangsorolás a felhasználói interakciók és eredmények összegzésére épül.
          </li>

      </ol>

      <li className="font-bold pt-6">Jelvények osztály operációi</li>

      <ol className="pt-6 list-disc list-inside">

          <p>A <span className="font-bold">Jelvények</span> osztály az elért eredmények és kitüntetések nyilvántartásáért felelős. Az operációk:</p>

          <li className="pl-[1rem]"><span className="font-bold">jelvényHozzáadása(felhasználó, jelvény):</span> Új jelvények hozzárendelése a felhasználókhoz az elért eredmények alapján.</li>

          <p className="font-bold pt-6">Döntések és Meggondolások:</p>

          <li className="pl-[1rem]">A jelvények adása a felhasználói eredmények alapján történik, így az operációk a motiváció növelésére és a felhasználói elismerésre összpontosítanak.</li>

      </ol>

      </ol>

        {
          /*
          AZ ANALÍZIS MODELL OSZTÁLYDIAGRAMJA
          */
        }

        <h2 id="analizismodellosztalydiagram" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.5. Az analízis modell osztálydiagramja</h2>

        {
          /*
          AZ ANALÍZIS MODELL OSZTÁLYAINAK LISTÁJA
          */
        }

        <h2 id="analizismodellosztalyai" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.6. Az analízis modell osztályainak listája</h2>

        <h2 id="felhasznaloosztaly" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.6.1. Felhasználó osztály</h2>
        <h2 id="keszitoosztaly" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.6.2. Készítő osztály</h2>
        <h2 id="ertekeloosztaly" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.6.3. Értékelő osztály</h2>
        <h2 id="tananyagosztaly" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.6.4. Tananyag osztály</h2>
        <h2 id="jelvenyosztaly" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.6.5. Jelvény osztály</h2>
        <h2 id="xposztaly" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.6.6. XP osztály</h2>
        <h2 id="ranglistaosztaly" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.6.7. Ranglista osztály</h2>


    </>
  );
}
