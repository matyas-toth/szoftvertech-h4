'use client';
import Image from "next/image";
import PageTransition from "../PageTransition";

export default function Home() {

    const groupMembers = [
        { name: "TÓTH MÁTYÁS", code: "OQH5NH", email: "matyastoth.mail@gmail.com" },
        { name: "VAY DOMINIKA", code: "VM3DIR", email: "vaydominika@gmail.com" },
        { name: "ARDON MILÁN", code: "E00XC3", email: "ardon.milan1@gmail.com" },
        { name: "KOVÁCS ATTILA MARCELL", code: "SEGUV3", email: "kovacsmarci03@gmail.com" },
        { name: "GOMBKÖTŐ ÁBEL MARCELL", code: "C67VWA", email: "gmbkt09@gmail.com" },
    ];

    const history = [
        { date: "2024. 11. 16.", version: "1.0", description: "Kezdeti verzió elkészítése", author: "Tóth Mátyás" },
        { date: "2024. 11. 17.", version: "1.1", description: "A felhasználói felület elkészítése", author: "Vay Dominika" },
        { date: "2024. 11. 19.", version: "2.0", description: "Dokumentum véglegesítése", author: "Ardon Milán, Kovács Attila Marcell" },
    ];

    const tableOfContents = [
        { number: "1.", title: "Bevezetés", id: "bevezetes" },

        { number: "2.", title: "Felhasználói felület", id: "felhasznaloifelulet" },

        { number: "2.1.", title: "Kezdőoldal", id: "kezdooldal" },
        { number: "2.2.", title: "Kurzusok oldal", id: "kurzusokoldal" },
        { number: "2.3.", title: "Bejelentkezés / regisztráció oldal", id: "bejelentkezesregisztraciooldal" },
        { number: "2.4.", title: "Adminisztrációs felület", id: "adminisztraciosfelulet" },

        { number: "3.", title: "Adatmodellek", id: "adatmodellek" },
        { number: "3.1.", title: "Adatbázis kezelő kiválasztása", id: "adatbaziskezelokivalasztasa" },
        { number: "3.2.", title: "Szemantikai adatmodellezés", id: "szemantikaiadatmodellezes" },
        { number: "3.2.1.", title: "ER Modell", id: "ermodell" },
        { number: "3.3.", title: "Relációs adatmodell", id: "relaciosadatmodell" },
        { number: "3.4.", title: "Az adatbázis kezelővel kapcsolatot tartó osztályok", id: "azadatbaziskezelovelkapcsolatottartoosztalyok" },

        { number: "4.", title: "A funkcionális modell kiegészítése", id: "afunkcionalismodellkiegeszitese" },
        { number: "4.1.", title: "Bejelentkezési folyamat", id: "bejelentkezesifolyamat" },
        { number: "4.2.", title: "Kurzusvásárlás folyamata", id: "kurzusvasarlasifolyamat" },


    ];

    return (

        <PageTransition>
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
                    <h1 className="text-5xl mb-8 py-8">Rendszertervezés</h1>
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
                    <h2>2024. november 19.</h2>
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

            <h2 id="bevezetes" className="ml-8 text-xl font-bold text-sky-600 pt-6">1. Bevezetés</h2>

            <p className="pl-[5.3rem] pt-6">
                A Learnify Platform egy gamifikált oktatási rendszer, amelynek célja, hogy interaktív tanulási élményt nyújtson felhasználóinak. A rendszer lehetővé teszi a tanfolyamok létrehozását, kezelését és értékelését, miközben ösztönző elemeket, például jelvényeket, XP-t (tapasztalati pontokat) és ranglistákat kínál a felhasználók elkötelezettségének növelése érdekében. A platform alapvető funkciói közé tartozik az adminisztrációs felület, a tananyagok hozzáférése, valamint a tranzakciók kezelése. Az adatkezeléshez MySQL adatbázis-kezelőt használunk, amely biztosítja a rendszer számára a szükséges skálázhatóságot és megbízhatóságot.
            </p>


            {
                /*
                KEZDETI OSZTÁLYDIAGRAM
                */
            }

            <h2 id="felhasznaloifelulet" className="ml-8 text-xl font-bold text-sky-600 pt-6">2. Felhasználói felület</h2>

            <p className="pl-[5.3rem] pt-6">
                A felhasználói felület modern, reszponzív dizájnt követ, amely minden eszközön jól működik. A felület főbb részei a következők:
            </p>

            {
                /*
                OSZTÁLYDIAGRAM
                */
            }


            {
                /*
                OSZTÁLYOK FELSOROLÁSA
                */
            }

            <h2 id="kezdooldal" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.1. Kezdőoldal</h2>

            <p className="pl-[5.3rem] pt-6">
                Bemutatja a platform fő funkcióit, a legnépszerűbb kurzusokat, az alogritmus által ajánlott kurzusokat és a felhasználók statisztikáit, illetve tartalmaz egy bejelentkezési és regisztrációs opciót.
            </p>

            <Image className="pl-[5.3rem]" src="/feed.png" alt="Home" width={1300} height={1300} />

            <h2 id="kurzusokoldal" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.2. Kurzusok oldal</h2>

            <p className="pl-[5.3rem] pt-6">
                A felhasználók böngészhetnek az elérhető tanfolyamok között, megtekinthetik a részleteket és jelentkezhetnek rájuk, a kurzusok szűrhetők kategóriák vagy népszerűség szerint.
            </p>

            <h2 id="bejelentkezesregisztraciooldal" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.3. Bejelentkezés / regisztráció oldal</h2>

            <p className="pl-[5.3rem] pt-6">
                Egy egyszerű bejelentkezési és regisztrációs oldal, ahol a felhasználók bejelentkezhetnek, vagy regisztrálhatnak a platformra email és jelszó megadásával.
            </p>

            <Image className="pl-[5.3rem]" src="/login.png" alt="Login" width={1300} height={1300} />

            <h2 id="adminisztraciosfelulet" className="ml-8 text-xl font-bold text-sky-600 pt-6">2.4. Adminisztrációs felület</h2>

            <p className="pl-[5.3rem] pt-6">
                Csak adminisztrátorok számára érhető el, és lehetővé teszi a kurzusok és felhasználók kezelését, valamint a statisztikák megtekintését.
            </p>

            {
                /*
                ALRENDSZEREK
                */
            }

            <h2 id="adatmodellek" className="ml-8 text-xl font-bold text-sky-600 pt-6">3. Adatmodellek</h2>

            <h2 id="adatbaziskezelokivalasztasa" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.1. Adatbázis-kezelő kiválasztása</h2>

            <p className="pl-[5.3rem] pt-6">
                A rendszer adatbázis-kezeléséhez a MySQL került kiválasztásra, amely egy megbízható és széles körben alkalmazott relációs adatbázis-kezelő rendszer. A MySQL-t a következő előnyök miatt választottuk:
            </p>

            <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
                <li>Nagy teljesítményű adatkezelés.</li>
                <li>Skálázható architektúra.</li>
                <li>Széleskörű támogatás fejlesztői körökben.</li>
            </ol>

            <p className="pl-[5.3rem] pt-6">
                Az adatbázis kapcsolatot az alkalmazásban ORM (Object-Relational Mapping) rétegen keresztül kezeljük, amely egyszerűsíti az adatok perzisztens tárolását.
            </p>

            <h2 id="szemantikaiadatmodellezes" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.2. Szemantikai adatmodell</h2>

            <p className="pl-[5.3rem] pt-6">
            A rendszer szemantikai adatmodelljét az osztálydiagram szemlélteti. Az adatmodellek közötti kapcsolatok világosan meghatározzák a platform főbb entitásait, mint például:
            </p>

            <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
                <li>Felhasználók, akik kurzusokon vehetnek részt, XP-t gyűjtenek, és ranglistákon szerepelhetnek.</li>
                <li>Kurzusok, amelyek tananyagokat és értékeléseket tartalmaznak.</li>
                <li>Gamifikációs elemek, például jelvények, XP, és ranglisták.</li>
            </ol>

            <h2 id="ermodell" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.2.1 ER Modell</h2>

            <Image className="pl-[5.3rem]" src="/er.png" alt="ER Modell" width={1300} height={1300} />

            <h2 id="relaciosadatmodell" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.3. Relációs adatmodell</h2>

<p className="pl-[5.3rem] pt-6">
Az osztálydiagram alapján elkészített relációs adatmodell az adatbázis táblákat és azok kapcsolatait tartalmazza.

            <Image className="pl-[5.3rem]" src="/relational.png" alt="Relációs adatmodell" width={1500} height={1500} />

</p>



<h2 id="azadatbaziskezelovelkapcsolatottartoosztalyok" className="ml-8 text-xl font-bold text-sky-600 pt-6">3.4. Az adatbázis-kezelővel kapcsolatot tartó osztályok</h2>

<p className="pl-[5.3rem] pt-6">
Az adatbázis-kezelővel való kommunikációért felelős osztályok:
</p>

<ol className="pl-[5.3rem] pt-6 list-disc list-inside">
  <li><span className="font-bold">DatabaseConnector:</span> Az adatbáziskapcsolat létrehozása és kezelése.</li>
  <li><span className="font-bold">FelhasznaloDAO:</span> CRUD (Create, Read, Update, Delete) műveletek a felhasználók adatain.</li>
  <li><span className="font-bold">KurzusDAO:</span> A kurzusok kezeléséért felelős műveletek.</li>
  <li><span className="font-bold">TranzakcioDAO:</span> A tranzakciók adatainak kezelése.</li>
</ol>

<p className="pl-[5.3rem] pt-6">
Az osztályok biztosítják az adatok biztonságos kezelését és elérését, valamint az adatok konzisztenciáját az alkalmazásban.
</p>

            <h2 id="afunkcionalismodellkiegeszitese" className="ml-8 text-xl font-bold text-sky-600 pt-6">4. A funkcionális modell kiegészítése</h2>
            
            <h2 id="bejelentkezesifolyamat" className="ml-8 text-xl font-bold text-sky-600 pt-6">4.1. Bejelentkezési folyamat</h2>

            <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
                <li>A felhasználó megadja az email címét és jelszavát.</li>
                <li>Az alkalmazás hitelesíti a felhasználót az adatbázisban tárolt adatok alapján.</li>
                <li>Sikeres hitelesítés esetén hozzáférést kap a felhasználói profilhoz és a kurzusokhoz.</li>
            </ol>

            <h2 id="kurzusvasarlasifolyamat" className="ml-8 text-xl font-bold text-sky-600 pt-6">4.2. Kurzusvásárlás folyamata</h2>

            <ol className="pl-[5.3rem] pt-6 list-disc list-inside">
                <li>A felhasználó kiválaszt egy kurzust, majd elindítja a vásárlási folyamatot.</li>
                <li>A rendszer létrehoz egy tranzakciót, és a fizetési folyamat után frissíti az adatbázist.</li>
                <li>A felhasználó hozzáférést kap a kurzushoz.</li>
            </ol>

           

        </>
        </PageTransition>
    );
}
