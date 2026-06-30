// BAZA PYTAŃ - Tutaj wprowadzasz swoje dane do nauki
// BAZA PYTAŃ - Wygenerowano na podstawie materiałów MAS
const allQuestions = [
    {
        question: "W przypadku implementacji ekstensji klasy w ramach klasy zewnętrznej, odpowiedni kontener musi być oznaczony słowem static",
        correctAnswer: false
    },
    {
        question: "Tablice języka Java umożliwiają łatwe wstawianie elementów",
        correctAnswer: true
    },
    {
        question: "Ograniczenia w UML są jedynym z mechanizmów rozszerzalności",
        correctAnswer: false
    },
    {
        question: "Operacje swing.buildbackground nie mogą być przerwane",
        correctAnswer: false
    },
    {
        question: "Deklarowanie stałych określających warunki w ograniczeniach jest dobrą praktyką",
        correctAnswer: true
    },
    {
        question: "Asocjacje z modelu obiektowego są implementowane w modelu relacyjnym jako tabele",
        correctAnswer: false
    },
    {
        question: "Asocjacje skierowane są bardziej użyteczne od dwukierunkowych",
        correctAnswer: false
    },
    {
        question: "Asocjacje występują bezpośrednio w języku Java",
        correctAnswer: false
    },
    {
        question: "Asocjacje skierowane są zawsze bardziej użyteczne od dwukierunkowych.",
        correctAnswer: false
    },
    {
        question: "Asocjacja to grupa powiązań o tej samej semantyce i strukturze",
        correctAnswer: true
    },
    {
        question: "Architektura klient-serwer sprzyja redukcji ruchu sieciowego",
        correctAnswer: true
    },
    {
        question: "Architektury warstwowe ułatwiają tworzenie współczesnego oprogramowania",
        correctAnswer: true
    },
    {
        question: "Architektura klient-serwer wymaga mocnego komputera centralnego",
        correctAnswer: true
    },
    {
        question: "Architektura mainframe nie wymaga mocnego komputera centralnego",
        correctAnswer: false
    },
    {
        question: "Architektura systemu nie musi uwzględniać celów biznesowych",
        correctAnswer: false
    },
    {
        question: "Atrybut klasowy ma zawsze stałą wartość.",
        correctAnswer: false
    },
    {
        question: "Zasadniczą wadą obejścia dziedziczenia za pomocą kompozycji jest poważnie zwiększone zużycie pamięci",
        correctAnswer: true
    },
    {
        question: "W języku Java, implementacja dziedziczenia typu „incomplete” odbywa się za pomocą specjalnego słowa kluczowego „partial”",
        correctAnswer: false
    },
    {
        question: "W czasie implementacji kompozycji należy rozwiązać problem usuwania części przy usuwaniu całości",
        correctAnswer: true
    },
    {
        question: "Jedną z wad wykorzystania JDBC w języku Java jest niezgodność impedancji",
        correctAnswer: true
    },
    {
        question: "Dobre GUI, w celu pokazania wykluczających się opcji wykorzystuje 'radio buttons'.",
        correctAnswer: true
    },
    {
        question: "Trwałość ekstensji można symulować m. in przez zapis/odczyt do/z pliku",
        correctAnswer: true
    },
    {
        question: "Klasa asocjacji z modelu obiektowego, jest implementowana w modelu relacyjnym jako dwie tabele pośredniczące",
        correctAnswer: false
    },
    {
        question: "Implementacja {xor} wymaga metody sprawdzającej istnienie podanego powiązania.",
        correctAnswer: true
    },
    {
        question: "Klasy mapujemy na tabele relacyjne.",
        correctAnswer: true
    },
    {
        question: "W klasycznym modelu relacyjnym występują wszystkie rodzaje dziedziczenia oprócz overlapping.",
        correctAnswer: false
    },
    {
        question: "Biblioteki API zostały zaprojektowane wyłącznie do pracy z BD.",
        correctAnswer: false
    },
    {
        question: "Przed rozpoczęciem własnych prac projektowych, warto przetestować rozwiązania konkurencji.",
        correctAnswer: true
    },
    {
        question: "Projekt interfejsu może zawierać informacje o rodzaju kontrolek.",
        correctAnswer: true
    },
    {
        question: "Dodanie Stringów zamiast obiektów do kontrolki pogarsza wydajność aplikacji i zwiększa wymagany nakład pracy programisty.",
        correctAnswer: true
    },
    {
        question: "JavaDoc spowalnia działanie programu",
        correctAnswer: false
    },
    {
        question: "Atrybut opcjonalny zawsze musi mieć jakąś wartość",
        correctAnswer: false
    },
    {
        question: "Asocjacje z modelu obiektowego są implementowane w modelu relacyjnym jako tabele.",
        correctAnswer: false
    },
    {
        question: "W przypadku implementacji ekstensji klasy w ramach klasy zewnętrznej, odpowiedni kontener musi być oznaczony słowem static.",
        correctAnswer: false
    },
    {
        question: "W przypadku implementacji ekstensji klasy w ramach klasy zewnętrznej metody klasowe muszą być oznaczone słowem static",
        correctAnswer: false
    },
    {
        question: "Atrybut wyliczalny może być usunięty bez szkody dla informacji zapamiętanych w systemie.",
        correctAnswer: true
    },
    {
        question: "W modelu relacyjnym, w przypadku kolumny typu INT, wartość null oznacza 0",
        correctAnswer: false
    },
    {
        question: "W klasie ObjectPlus, kontener służący do przechowywania wszystkich ekstensji, może być łatwo zaimplementowany przy użyciu klasy Vector.",
        correctAnswer: true
    },
    {
        question: "Do zapisywania ograniczeń UML, można wykorzystywać tylko język OCL.",
        correctAnswer: false
    },
    {
        question: "Zaletą obejścia dziedziczenia wielokrotnego wykorzystującego interfejsy, jest łatwość umieszczenia w nich atrybutów",
        correctAnswer: false
    },
    {
        question: "Zjawisko określane jako niezgodność impedancji jest spowodowane połączeniem modelu obiektowego oraz relacyjnego.",
        correctAnswer: true
    },
    {
        question: "Zasadniczą zaletą obejścia dziedziczenia za pomocą kompozycji jest ogromna prostota implementacji",
        correctAnswer: false
    },
    {
        question: "Wykorzystanie mechanizmu serializacji języka Java oznacza, że zamiast tych samych obiektów, mamy takie same obiekty",
        correctAnswer: false
    },
    {
        question: "Wykorzystanie kompozycji do opisu zależności pomiędzy klasami oznacza użycie specyficznych liczności",
        correctAnswer: false
    },
    {
        question: "Wykorzystanie asocjacji kwalifikowanej ma umożliwić przechowanie większej liczby informacji",
        correctAnswer: false
    },
    {
        question: "W technologii Hibernate, mapowanie asocjacji oraz atrybutów (powtarzalnych) wielowartościowych niczym się nie różni",
        correctAnswer: false
    },
    {
        question: "W przypadku implementacji ekstensji klasy w ramach tej samej klasy, metody klasowe muszą być oznaczone słowem static.",
        correctAnswer: true
    },
    {
        question: "W przypadku implementacji ekstensji klasy w ramach tej samej klasy odpowiedni kontener musi być oznaczony słowem static",
        correctAnswer: true
    },
    {
        question: "W przypadku implementacji ekstensji klasy w ramach klasy zewnętrznej, metody klasowe muszą być oznaczone słowem static",
        correctAnswer: false
    },
    {
        question: "W modelu relacyjnym tabela pośrednicząca (dla relacji „wiele - wiele”) zawiera co najmniej dwa klucze obce",
        correctAnswer: true
    },
    {
        question: "W przypadku obejścia dziedziczenia wieloaspektowego, jeden z aspektów realizujemy za pomocą klasycznego dziedziczenia udostępnianego przez język",
        correctAnswer: true
    },
    {
        question: "W przypadku niektórych rodzajów asocjacji, nazwy ról są wymagane.",
        correctAnswer: true
    },
    {
        question: "W klasie ObjectPlus, kontener służący do przechowywania wszystkich ekstensji, musi umożliwiać przechowywanie duplikatów referencji",
        correctAnswer: false
    },
    {
        question: "W klasie ObjectPlusPlus, jeden zbiorczy pojemnik mapujący przechowuje wszystkie powiązania konkretnego obiektu",
        correctAnswer: true
    },
    {
        question: "W klasie ObjectPlus, metody pomocnicze służą między innymi do wyświetlania ekstensji klasy",
        correctAnswer: true
    },
    {
        question: "W języku Java, wszystkie wołania metod są domyślnie polimorficzne",
        correctAnswer: true
    },
    {
        question: "W języku Java, technologia JDBC służy do implementacji dziedziczenia dynamicznego",
        correctAnswer: false
    },
    {
        question: "W języku Java ograniczenie UML „pensja nie może zmaleć” implementujemy w postaci specjalnej metody",
        correctAnswer: true
    },
    {
        question: "W języku Java, klasa może implementować co najwyżej 3 interfejsy",
        correctAnswer: false
    },
    {
        question: "W języku Java komunikacja z plikami może odbywać się w oparciu o strumienie",
        correctAnswer: true
    },
    {
        question: "W języku Java implementacja asocjacji o liczności „wiele - wiele” wymaga użycia tablicy lub kontenera",
        correctAnswer: true
    },
    {
        question: "W języku Java, buforowanie z plikami może odbywać się w oparciu o strumienie",
        correctAnswer: true
    },
    {
        question: "W języku Java buforowanie odczytu danych ze strumienia ma na celu poprawę wydajności",
        correctAnswer: true
    },
    {
        question: "Widok logiczny architektury uwzględnia komponenty oraz ich interfejsy",
        correctAnswer: true
    },
    {
        question: "Większość rodzajów dziedziczenia można obejść za pomocą kompozycji",
        correctAnswer: true
    },
    {
        question: "W czasie implementacji kompozycji, należy rozwiązać problem usuwania całości przy usuwaniu części",
        correctAnswer: false
    },
    {
        question: "W czasie implementacji kompozycji należy rozwiązać problem blokowania samodzielnego tworzenia części",
        correctAnswer: true
    },
    {
        question: "Ekstensja klasy i obiekt znaczą to samo.",
        correctAnswer: false
    },
    {
        question: "W architekturze trójwarstwowej, warstwa pośrednicząca nie zajmuje się wymianą komunikatów, ponieważ jest to zadanie WebService",
        correctAnswer: false
    },
    {
        question: "W architekturze dwuwarstwowej, serwer nie zajmuje się udostępnianiem danych",
        correctAnswer: false
    },
    {
        question: "W architekturze trójwarstwowej, warstwa pośrednicząca zajmuje się między innymi interfejsem użytkownika.",
        correctAnswer: true
    },
    {
        question: "Wadą modelu obiektowego jest to, że aby odnaleźć powiązane obiekty trzeba (potencjalnie) przejrzeć całą ich ekstensję",
        correctAnswer: false
    },
    {
        question: "Wadą technologii Hibernate jest brak możliwości mapowania asocjacji",
        correctAnswer: false
    },
    {
        question: "Trwałość ekstensji jest bezpośrednio dostępna w języku Java",
        correctAnswer: false
    },
    {
        question: "Tablice języka Java umożliwiają przechowywanie wielu elementów",
        correctAnswer: true
    },
    {
        question: "Sposoby obejścia braku dziedziczenia w modelu relacyjnym są zbliżone do tych wykorzystywanych przy przejściu z modelu pojęciowego do implementacyjnego.",
        correctAnswer: false
    },
    {
        question: "Słowo kluczowe „extends” języka Java służy do implementacji ekstensji",
        correctAnswer: false
    },
    {
        question: "Słowo kluczowe catch języka Java służy do implementacji dziedziczenia",
        correctAnswer: false
    },
    {
        question: "Słowo kluczowe „break” języka Java służy do niszczenia obiektów.",
        correctAnswer: false
    },
    {
        question: "Przy implementacji ograniczenia {subset} warto użyć metody containsKey(...) lub containsValue(...) z klasy pojemnika",
        correctAnswer: true
    },
    {
        question: "Przy implementacji ograniczenia {XOR} warto użyć jednej z wersji metody contains(...).",
        correctAnswer: true
    },
    {
        question: "Przechodząc z modelu obiektowego na relacyjny, atrybuty złożone możemy zastąpić dodatkowymi tabelami",
        correctAnswer: true
    },
    {
        question: "Programista języka Java może tworzyć własne klasy wyjątkowe",
        correctAnswer: true
    },
    {
        question: "Poważną wadą technologii Hibernate jest brak możliwości korzystania z języka zapytań",
        correctAnswer: false
    },
    {
        question: "Plik mapujący wykorzystywany w technologii Hibernate zawiera między innymi informacje dotyczące nadklas mapowanej klasy",
        correctAnswer: true
    },
    {
        question: "Plik mapujący wykorzystany w technologii Hibernate zawiera m.in. informacje dotyczące mapowanych atrybutów",
        correctAnswer: true
    },
    {
        question: "„Pensja nie może zmaleć” jest przykładem ograniczenia dynamicznego",
        correctAnswer: true
    },
    {
        question: "Optymalna implementacja asocjacji kwalifikowanej, odbywa się w oparciu o pojemnik mapujący",
        correctAnswer: true
    },
    {
        question: "Ograniczenie {subset} może dotyczyć asocjacji",
        correctAnswer: true
    },
    {
        question: "Ograniczenie {XOR} oznacza, że może istnieć tylko jedno powiązanie w ramach ograniczonych asocjacji",
        correctAnswer: true
    },
    {
        question: "Metoda obiektu ma dostęp do wszystkich obiektów danej klasy",
        correctAnswer: false
    },
    {
        question: "Mapowanie asocjacji w Hibernate wykorzystuje klasy pojemnikowe języka Java",
        correctAnswer: true
    },
    {
        question: "Asocjację n-arną implementujemy wykorzystując klasę pośredniczącą",
        correctAnswer: true
    },
    {
        question: "Dziedziczenie typu disjoint występuje bezpośrednio w języku Java",
        correctAnswer: true
    },
    {
        question: "Dziedziczenie wieloaspektowe występuje bezpośrednio w języku Java",
        correctAnswer: false
    },
    {
        question: "Jednym ze sposobów kształtowania dobrej użyteczności jest obserwacja sposobu pracy użytkowników",
        correctAnswer: true
    },
    {
        question: "Implementacja asocjacji n-arnej w modelu relacyjnym wykorzystuje tabelę pośredniczącą",
        correctAnswer: true
    },
    {
        question: "Agregacja z modelu obiektowego jest implementowana w modelu relacyjnym jako dwie tabele pośredniczące i 4 klucze obce",
        correctAnswer: false
    },
    {
        question: "Klasa to taki większy obiekt",
        correctAnswer: false
    },
    {
        question: "Ekstensja klasy nie występuje bezpośrednio w języku Java i dlatego musi być ręcznie zaimplementowana",
        correctAnswer: true
    },
    {
        question: "Implementacja asocjacji rekurencyjnej o liczności „wiele - wiele” wymaga wykorzystania dwóch tablic lub dwóch kontenerów",
        correctAnswer: true
    },
    {
        question: "Implementacja asocjacji kwalifikowanej w modelu relacyjnym może bazować na specyficznym doborze klucza obcego",
        correctAnswer: true
    },
    {
        question: "Implementacja kompozycji może odbywać się w oparciu o dziedziczenie",
        correctAnswer: false
    },
    {
        question: "Ekstensja klasy może być zaimplementowana w ramach tej samej klasy biznesowej lub korzystając z klasy dedykowanej.",
        correctAnswer: true
    },
    {
        question: "Dziedziczenie wielokrotne występuje bezpośrednio w języku Java.",
        correctAnswer: false
    },
    {
        question: "Implementacja ograniczenia {history} jest analogiczna do implementacji ograniczenia {bag}",
        correctAnswer: true
    },
    {
        question: "Implementacja w modelu relacyjnym atrybutu klasowego nie jest zbyt prosta",
        correctAnswer: true
    },
    {
        question: "Implementacja w modelu relacyjnym atrybutu opcjonalnego polega na dołożeniu dodatkowej kolumny do tabeli",
        correctAnswer: true
    },
    {
        question: "Metoda implementująca ograniczenie {subset} powinna uwzględniać nazwę roli asocjacji",
        correctAnswer: true
    },
    {
        question: "Konstrukcja „wszystkieCzesci.contains(czesc)” umożliwia sprawdzenie czy kontener „wszystkieCzesci” zawiera „czesc” (język Java i standardowy pojemnik)",
        correctAnswer: true
    },
    {
        question: "Korzystanie z mechanizmu serializacji języka Java, do uzyskania trwałości ekstensji, oznacza pisanie wielu linii kodu",
        correctAnswer: true
    },
    {
        question: "Klasa ObjectPlusPlus bezpośrednio wspiera wszystkie cechy kompozycji.",
        correctAnswer: false
    },
    {
        question: "Klasy szablonowe (generics) w języku Java mogą przechowywać m.in. typ Object",
        correctAnswer: true
    },
    {
        question: "Klasy kontenerowe języka Java umożliwiają przechowywanie tylko referencji do obiektów",
        correctAnswer: false
    },
    {
        question: "Klasa jest wystąpieniem obiektu",
        correctAnswer: false
    },
    {
        question: "Klasa jest zbiorem obiektów",
        correctAnswer: false
    },
    {
        question: "Klasa asocjacji umożliwia podanie dodatkowych informacji dotyczących asocjacji.",
        correctAnswer: true
    },
    {
        question: "Klasa asocjacji z modelu obiektowego, jest implementowana w modelu relacyjnym jako tabela pośrednicząca",
        correctAnswer: true
    },
    {
        question: "Jedną z technik optymalizacji, wykorzystywaną przez Hibernate, jest leniwa inicjalizacja obiektów",
        correctAnswer: true
    },
    {
        question: "Jednym z głównych powodów korzystania z baz danych jest język zapytań",
        correctAnswer: true
    },
    {
        question: "Jeden ze sposobów obejścia problemu braku dziedziczenia wieloaspektowego w modelu relacyjnym, polega na zastąpieniu go dziedziczeniem dynamicznym.",
        correctAnswer: false
    },
    {
        question: "Jednym ze sposobów obejścia problemu braku dziedziczenia w modelu relacyjnym jest dodanie dwóch kluczy głównych do każdej z tabel.",
        correctAnswer: false
    },
    {
        question: "Jednym ze sposobów rozwiązywania problemu niezgodności impedancji jest wprowadzenie istotnych udogodnień z zakresu baz danych do języka programowania",
        correctAnswer: true
    },
    {
        question: "Jednym ze sposobów rozwiązania problemu niezgodności impedancji jest stosowanie dziedziczenia dynamicznego zamiast wielodziedziczenia.",
        correctAnswer: false
    },
    {
        question: "Jednym z czynników wpływających na popularność systemów relacyjnych są aplikacje spadkowe",
        correctAnswer: false
    },
    {
        question: "Jak pokazują testy, wydajność języka Java jest ok. 100 razy słabsza od C++",
        correctAnswer: false
    },
    {
        question: "Istnieją dwa zasadnicze sposoby implementacji asocjacji: za pomocą identyfikatorów lub korzystając z referencji (wskaźników)",
        correctAnswer: true
    },
    {
        question: "Interfejsy in języku Java umożliwiają zdefiniowanie metod",
        correctAnswer: true
    },
    {
        question: "Implementacja w modelu relacyjnym atrybutu wyliczalnego polega na usunięciu klucza głównego z tabeli",
        correctAnswer: false
    },
    {
        question: "Implementacja w modelu relacyjnym: pojedynczy wiersz tabeli może reprezentować jedną osobę.",
        correctAnswer: true
    },
    {
        question: "Ograniczenie {bag} dla asocjacji oznacza, że powiązania pomiędzy tymi samymi obiektami są uporządkowane",
        correctAnswer: false
    },
    {
        question: "Implementacja atrybutu złożonego może polegać na zdefiniowaniu nowego typu.",
        correctAnswer: true
    },
    {
        question: "Zjawisko określane jako niezgodność impedancji jest związane ze słabą wydajnością relacyjnych baz danych.",
        correctAnswer: false
    },
    {
        question: "Implementacja agregacji w modelu relacyjnym jest dokładnie taka sama jak asocjacji.",
        correctAnswer: true
    },
    {
        question: "Głównym powodem implementacji asocjacji za pomocą identyfikatorów (zamiast referencji) jest chęć uniezależnienia obiektów od siebie (z punktu widzenia JVM).",
        correctAnswer: true
    },
    {
        question: "Niektóre nowe wersje aplikacji nie koncentrują się na dodawaniu nowych funkcji, ale na ułatwieniu dostępu do już istniejących.",
        correctAnswer: true
    },
    {
        question: "Korzystanie z deklaratywnego podejścia do tworzenia GUI wymaga dużego zaangażowania ze strony programisty",
        correctAnswer: false
    },
    {
        question: "Technologia zwana refleksją (ang. Reflection) może posłużyć do odczytania budowy/struktury klasy",
        correctAnswer: true
    },
    {
        question: "Mechanizm serializacji języka Java, ułatwia uzyskanie trwałości ekstensji",
        correctAnswer: true
    },
    {
        question: "W popularnych językach programowania (np. Java) ograniczenia nie występują bezpośrednio.",
        correctAnswer: true
    },
    {
        question: "Dobry programista nie musi używać komentarzy",
        correctAnswer: false
    },
    {
        question: "Dziedziczenie dynamiczne występuje bezpośrednio w języku Java",
        correctAnswer: false
    },
    {
        question: "Adnotacje wykorzystywane w technologii Hibernate mogą dotyczyć m. in. asocjacji mapowanej klasy.",
        correctAnswer: true
    },
    {
        question: "Współczesne edytory umożliwiają tworzenie GUI odpowiedniego dla większości aplikacji.",
        correctAnswer: true
    },
    {
        question: "Ograniczenie {ordered} dla asocjacji oznacza, że powiązania są przechowywane w pewnej kolejności",
        correctAnswer: true
    },
    {
        question: "Przechodząc z modelu obiektowego na relacyjny, atrybuty proste zastępujemy kolumnami w tabelach.",
        correctAnswer: true
    },
    {
        question: "W stosunku do architektury dwuwarstwowej, architektura trójwarstwowa posiada tak zwaną warstwę pośredniczącą",
        correctAnswer: true
    },
    {
        question: "Napisanie ograniczenia UML zwykłym tekstem poprawia precyzję informacji",
        correctAnswer: false
    },
    {
        question: "W klasie ObjectPlus, kontener służący do przechowywania wszystkich ekstensji, może być łatwo zaimplementowany przy użyciu klasy ArrayList",
        correctAnswer: false
    },
    {
        question: "Ograniczenie {subset} może dotyczyć jednej asocjacji",
        correctAnswer: true
    },
    {
        question: "Możliwość zrównoleglenia prac jest ważnym czynnikiem uwzględnianym przy wyborze architektury systemu.",
        correctAnswer: true
    },
    {
        question: "GUI to zagadnienia z pogranicza m.in. informatyki, psychologii, ergonomii.",
        correctAnswer: true
    },
    {
        question: "Jednym z elementów architektury dwuwarstwowej jest interfejs użytkownika",
        correctAnswer: true
    },
    {
        question: "Implementacja interfejsu przez klasę oznacza umieszczenie kodu tych metod w klasie.",
        correctAnswer: true
    },
    {
        question: "Ograniczenie {bag} dla asocjacji oznacza, że może istnieć wiele powiązań pomiędzy tymi samymi obiektami.",
        correctAnswer: true
    },
    {
        question: "W przypadku liczności \"jeden - wiele\", użycie klasy asocjacji jako źródła dodatkowych informacji jest opcjonalne.",
        correctAnswer: true
    },
    {
        question: "Technologia Hibernate umożliwia mapowanie asocjacji \"wiele - wiele\"",
        correctAnswer: true
    },
    {
        question: "W języku Java, buforowanie poprawia wydajność",
        correctAnswer: true
    },
    {
        question: "W tej chwili nie istnieją komercyjne deklaratywne GUI",
        correctAnswer: false
    },
    {
        question: "Inaczej niż w badaniach statycznych, nie jest wymagana duża grupa ludzi przy testowaniu użyteczności",
        correctAnswer: true
    },
    {
        question: "Osoby testujące użyteczność powinny być zdane tylko na siebie",
        correctAnswer: true
    },
    {
        question: "Skorzystanie z ułatwień przez ObjectPlus wymaga ręcznego wywołania konstruktora z tej klasy",
        correctAnswer: true
    },
    {
        question: "Przy implementacji ograniczenia {subset} warto użyć metody extend",
        correctAnswer: false
    },
    {
        question: "Wystąpienie klasy to obiekt.",
        correctAnswer: true
    },
    {
        question: "Ekstensja klasy może zmieniać się w czasie.",
        correctAnswer: true
    },
    {
        question: "Klasy w języku Java występują bezpośrednio.",
        correctAnswer: true
    },
    {
        question: "Przykładem atrybutu prostego jest Adres.",
        correctAnswer: false
    },
    {
        question: "W języku Java atrybuty proste implementujemy ze słowem kluczowym simple.",
        correctAnswer: false
    },
    {
        question: "Przykładem atrybutu złożonego jest podwójne nazwisko.",
        correctAnswer: false
    },
    {
        question: "Atrybut złożony może być zaimplementowany jako obiekt klasy.",
        correctAnswer: true
    },
    {
        question: "Atrybut powtarzalny może być zrealizowany używając ArrayList",
        correctAnswer: true
    },
    {
        question: "Zawsze warto korzystać z tablic języka Java do realizacji atrybutów powtarzalnych.",
        correctAnswer: false
    },
    {
        question: "Atrybut opcjonalny Pensja może być zaimplementowany korzystając z typu prostego double",
        correctAnswer: false
    },
    {
        question: "Atrybut opcjonalny i powtarzalny może wykorzystywać ArrayList",
        correctAnswer: true
    },
    {
        question: "Technologia Hibernate ma wsparcie mapowania dziedzicznego overlapping",
        correctAnswer: false
    },
    {
        question: "Część kontrolek Swing pracuje w oparciu o różne modele",
        correctAnswer: true
    },
    {
        question: "Implementacja nazwy ról asocjacji są bardziej użyteczne od jej nazwy",
        correctAnswer: true
    },
    {
        question: "Implementacja atrybutu obiektu musi wykorzystywać tylko typy proste.",
        correctAnswer: false
    },
    {
        question: "Niezależnie od sposobu implementation ekstensji, atrybut klasowy musi być zadeklarowany jako static",
        correctAnswer: false
    },
    {
        question: "Implementacja atrybutu pochodnego może wymagać obliczania i przechowywania jego wartości",
        correctAnswer: true
    },
    {
        question: "Implementacja atrybutu pochodnego zawsze oznacza konieczność stworzenia metod setXXX i getXXX",
        correctAnswer: false
    },
    {
        question: "W celu stworzenia metody obiektu w języku Java, należy użyć słowa kluczowego object",
        correctAnswer: false
    },
    {
        question: "Metoda obiektu może modyfikować tylko atrybuty instancji, na rzecz której została wywołana",
        correctAnswer: true
    },
    {
        question: "W celu stworzenia metody klasowej w języku Java, należy użyć słowa kluczowego class",
        correctAnswer: false
    },
    {
        question: "Metoda klasowa może być użyta nawet wtedy gdy nie ma żadnego obiektu danej klasy",
        correctAnswer: true
    },
    {
        question: "Aplikacje biznesowe nie potrzebują trwałości ekstensji",
        correctAnswer: false
    },
    {
        question: "Metoda utrwalająca wszystkie ekstensje powinna, jako parametr, przyjmować nazwę pliku",
        correctAnswer: true
    },
    {
        question: "Metoda utrwalająca pojedynczy obiekt powinna, jako parametr, przyjmować nazwę pliku",
        correctAnswer: false
    },
    {
        question: "Problem trwałości ekstensji, spowodowany powiązaniami, jest wywołany słabą wydajnością platformy Java.",
        correctAnswer: false
    },
    {
        question: "Jednym ze sposobów na efektywne utrwalanie powiązań pomiędzy obiektami jest wykorzystanie referencji",
        correctAnswer: false
    },
    {
        question: "W celu poprawy wydajności, każdą ekstensję należy serializować do oddzielnego pliku",
        correctAnswer: false
    },
    {
        question: "W celu skorzystania z serializacji wystarczy zaimplementować interfejs ISerial, zamiast Serializable",
        correctAnswer: false
    },
    {
        question: "Własna implementacja zarządzania ekstensją jest spowodowana faktem, iż natywne mechanizmy Javy mają słabą wydajność",
        correctAnswer: false
    },
    {
        question: "Dzięki dziedziczeniu z ObjectPlus, klasy biznesowe otrzymają zarządzanie ekstensją",
        correctAnswer: true
    },
    {
        question: "Hashtable jest pojemnikiem mapującym",
        correctAnswer: true
    },
    {
        question: "Wiele ekstensji klas da się łatwo przechować w ArrayList",
        correctAnswer: false
    },
    {
        question: "Hashtable jest jedną z kilku możliwych klas, które mogą przechowywać wiele ekstensji w Javie.",
        correctAnswer: true
    },
    {
        question: "Sposób implementacji asocjacji oraz powiązań jest różny w zależności od zdefiniowanych liczności",
        correctAnswer: true
    },
    {
        question: "Poprawnie zdefiniowane liczności zmniejszają ryzyko popełnienia błędu",
        correctAnswer: true
    },
    {
        question: "Implementacja liczności wiele - wiele wymusza skorzystanie z dwóch pojemników (np. ArrayList)",
        correctAnswer: true
    },
    {
        question: "Najbardziej wydajnym sposobem realizacji asocjacji kwalifikowanej jest zastąpienie ArrayList przez Vector",
        correctAnswer: false
    },
    {
        question: "Jednym ze sposobów poprawy wydajności asocjacji kwalifikowanej jest zastąpienie ArrayList przez Hashtable",
        correctAnswer: true
    },
    {
        question: "Powiązanie zwrotne ułatwia realizację wymagań biznesowych",
        correctAnswer: true
    },
    {
        question: "Polimorficzne wołanie metod może istnieć bez przesłaniania metod.",
        correctAnswer: false
    },
    {
        question: "Przesłonięcie metody może istnieć bez polimorficznego wołania metod.",
        correctAnswer: true
    },
    {
        question: "W dziedziczeniu overlapping obiekt może należeć do kilku klas na raz.",
        correctAnswer: true
    },
    {
        question: "Dzięki zastosowaniu kompozycji zamiast dziedziczenia mamy ułatwiony dostęp do odziedziczonych inwariantów",
        correctAnswer: false
    },
    {
        question: "Przy obejściu dziedziczenia overlapping za pomocą kompozycji, musimy ją zaimplementować za pomocą klas wewnętrznych",
        correctAnswer: false
    },
    {
        question: "W języku Java, interfejsy mogą bezpośrednio służyć do zdefiniowania atrybutów obiektu, np. imienia",
        correctAnswer: false
    },
    {
        question: "Propagacja operacji sprawia, że kod biznesowy metody znajduje się w jednym miejscu",
        correctAnswer: true
    },
    {
        question: "Dziedziczenie wieloaspektowe jest tym samym co wielokrotne",
        correctAnswer: false
    },
    {
        question: "Dziedziczenie wieloaspektowe występuje we wszystkich popularnych językach programowania",
        correctAnswer: false
    },
    {
        question: "Najprostszym sposobem realizacji dziedziczenia wieloaspektowego jest spłaszczenie hierarchii",
        correctAnswer: true
    },
    {
        question: "Najprostszym sposobem realizacji dziedziczenia dynamicznego jest spłaszczenie hierarchii",
        correctAnswer: true
    },
    {
        question: "Spłaszczenie hierarchii powinno być połączone z dodaniem dyskryminatora",
        correctAnswer: true
    },
    {
        question: "Realizacja dziedziczenia dynamicznego w oparciu o kompozycję powinna wykorzystywać ograniczenie {or}",
        correctAnswer: false
    },
    {
        question: "Najbardziej precyzyjnym sposobem zapisu ograniczeń jest język naturalny",
        correctAnswer: false
    },
    {
        question: "W praktyce nie używa się ograniczeń bo wszystko da się wyrazić \"standardową\" notacją.",
        correctAnswer: false
    },
    {
        question: "Realizacja ograniczeń w Javie polega na skorzystaniu ze specjalnego słowa kluczowego constraint",
        correctAnswer: false
    },
    {
        question: "Podstawową zasadą stosowaną przy implementacji ograniczeń jest tworzenie atrybutów publicznych i prywatnych metod",
        correctAnswer: false
    },
    {
        question: "Realizacja {unique} korzystając z atrybutu klasowego typu Set poprawi wydajność kosztem zużycia pamięci.",
        correctAnswer: true
    },
    {
        question: "Realizacja {unique} korzystając z metody przeglądającej ekstensję zmniejsza zużycie pamięci kosztem wydajności.",
        correctAnswer: true
    },
    {
        question: "Ograniczenie {subset} przechowuje powiązania w ustalonej kolejności",
        correctAnswer: false
    },
    {
        question: "Implementacja {ordered} wymaga metody sprawdzającej istnienie podanego powiązania.",
        correctAnswer: false
    },
    {
        question: "Dzięki ograniczeniu {ordered} możemy przechowywać duplikaty powiązań.",
        correctAnswer: false
    },
    {
        question: "Dzięki ograniczeniu {bag} możemy przechowywać duplikaty powiązań.",
        correctAnswer: true
    },
    {
        question: "Implementacja {bag} wymaga metody sprawdzającej istnienie podanego powiązania.",
        correctAnswer: false
    },
    {
        question: "Dzięki ograniczeniu {xor} możemy przechowywać duplikaty powiązań.",
        correctAnswer: false
    },
    {
        question: "Relacyjne bazy danych na pewno zostaną zastąpione przez obiektowe.",
        correctAnswer: false
    },
    {
        question: "Model relacyjny jest popularny ze względu na bogactwo występujących w nim konstrukcji.",
        correctAnswer: false
    },
    {
        question: "Model relacyjny wykorzystuje koncepcję tożsamości obiektu.",
        correctAnswer: false
    },
    {
        question: "Jednymi z podstawowych pojęć modelu relacyjnego są klucz główny i obcy.",
        correctAnswer: true
    },
    {
        question: "Indeksy zwiększają szybkość wykonywania wszystkich operacji w bazie danych.",
        correctAnswer: false
    },
    {
        question: "Eksplozja popularności aplikacji internetowych przyczyniła się do upowszechnienia baz danych.",
        correctAnswer: true
    },
    {
        question: "Niezgodność impedancji nie występuje w przypadku tworzenia systemu w całości po stronie bazy danych.",
        correctAnswer: true
    },
    {
        question: "Klucz główny służy do identyfikacji konkretnej krotki.",
        correctAnswer: true
    },
    {
        question: "Klucz główny powstały z połączenia kilku kolumn typu tekstowego zapewnia lepszą wydajność niż jednokolumnowy klucz liczbowy.",
        correctAnswer: false
    },
    {
        question: "Atrybuty złożone możemy zaimplementować w MR jako oddzielną tabelę z kluczem obcym.",
        correctAnswer: true
    },
    {
        question: "Atrybuty opcjonalne muszą być zrealizowane jako oddzielna tabela.",
        correctAnswer: false
    },
    {
        question: "Atrybuty wymagane realizujemy jako kolumnę zezwalającą na wartość NULL.",
        correctAnswer: false
    },
    {
        question: "Jednym ze sposobów realizacji atrybutu powtarzalnego jest przechowywanie jego wartości w polu tekstowym.",
        correctAnswer: true
    },
    {
        question: "Jednym ze sposobów realizacji atrybutów powtarzalnych jest przechowywanie wartości w oddzielnej tabeli.",
        correctAnswer: true
    },
    {
        question: "Najlepszym ze sposobów realizacji atrybutu klasowego jest zdefiniowanie go po stronie języka programowania bez martwienia się o trwałość danych.",
        correctAnswer: false
    },
    {
        question: "Atrybut klasowy może być zapisany w dedykowanej tabeli.",
        correctAnswer: true
    },
    {
        question: "Perspektywa (widok) bazy danych umożliwia nam zdefiniowanie np. wieku osoby obliczanego na podstawie daty urodzenia.",
        correctAnswer: true
    },
    {
        question: "Atrybuty pochodne mogą być zrealizowane jako specjalny rodzaj kolumny w zwykłej tabeli.",
        correctAnswer: false
    },
    {
        question: "Każda baza danych umożliwia łatwe zdefiniowanie metod w tabelach.",
        correctAnswer: false
    },
    {
        question: "Każda baza danych umożliwia łatwe zdefiniowanie metod klasowych w tabelach.",
        correctAnswer: false
    },
    {
        question: "Asocjacje o liczności jeden do jeden można zrealizować za pomocą klucza obcego.",
        correctAnswer: true
    },
    {
        question: "Asocjacje o liczności jeden do wiele można zrealizować za pomocą klucza obcego.",
        correctAnswer: true
    },
    {
        question: "Asocjacje o liczności wiele - wiele można zrealizować za pomocą tabeli pośredniczącej.",
        correctAnswer: true
    },
    {
        question: "Wprowadzenie tabeli pośredniczącej ułatwia zrozumienie reguł biznesowych.",
        correctAnswer: false
    },
    {
        question: "Konstrukcja zbliżona do asocjacji kwalifikowanej może być zaimplementowana przez odpowiedni dobór kluczy głównych i obcych.",
        correctAnswer: true
    },
    {
        question: "Głównym celem korzystania z asocjacji kwalifikowanej jest przyspieszenie wyszukiwania podłączonych obiektów.",
        correctAnswer: true
    },
    {
        question: "Przy implementacji kompozycji warto wykorzystać wbudowane mechanizmy BD w postaci wyzwalaczy.",
        correctAnswer: true
    },
    {
        question: "Implementacja agregacji oraz kompozycji w MR polega na wykorzystaniu podobnych założeń co w przypadku Javy.",
        correctAnswer: true
    },
    {
        question: "Jednym ze sposobów realizacji dziedziczenia w MR jest spłaszczenie hierarchii",
        correctAnswer: true
    },
    {
        question: "Technologia JDBC ułatwia pisanie przenaszalnych (pomiędzy różnymi BD) aplikacji.",
        correctAnswer: true
    },
    {
        question: "ORM-y, do pewnego stopnia, niwelują niezgodność impedancji.",
        correctAnswer: true
    },
    {
        question: "Głównym powodem korzystania z narzędzi ORM jest poprawa wydajności w dostępie do bazy danych",
        correctAnswer: false
    },
    {
        question: "Największą zaletą LINQ jest poprawa wydajności w dostępie do baz danych.",
        correctAnswer: false
    },
    {
        question: "Jedna z wersji LINQ umożliwia pracę z natywnymi kolekcjami platformy .NET.",
        correctAnswer: true
    },
    {
        question: "Pracując z Hibernate trzeba samodzielnie tworzyć i aktualizować schemat BD.",
        correctAnswer: false
    },
    {
        question: "Schemat danych dla asocjacji skierowanej i dwukierunkowej jest identyczny.",
        correctAnswer: true
    },
    {
        question: "Zamiana asocjacji skierowanej na dwukierunkową wymaga m.in. dodania odpowiednich konstrukcji po stronie języka Java.",
        correctAnswer: true
    },
    {
        question: "Bardzo łatwo jest zmierzyć jakość interfejsu.",
        correctAnswer: false
    },
    {
        question: "Najważniejsza w aplikacji jest funkcjonalność, a interfejs jest mało istotnym dodatkiem.",
        correctAnswer: false
    },
    {
        question: "Użyteczność interfejsów jest zagadnieniem interdyscyplinarnym.",
        correctAnswer: true
    },
    {
        question: "Jednym z ważniejszych aspektów użyteczności jest przydatność praktyczna danej rzeczy/usługi.",
        correctAnswer: true
    },
    {
        question: "Użyteczność może być kształtowana w całkowitym oderwaniu od użytkowników.",
        correctAnswer: false
    },
    {
        question: "Jednym z podstawowych elementów ułatwiających kształtowanie użyteczności są częste kontakty z użytkownikami.",
        correctAnswer: true
    },
    {
        question: "W czasie przeprowadzania testów użyteczności nie trzeba obserwować użytkowników - wystarczy wysłuchać ich komentarza.",
        correctAnswer: false
    },
    {
        question: "Warto robić testy użyteczności dla bardzo dużych grup użytkowników.",
        correctAnswer: false
    },
    {
        question: "Poziom użyteczności prezentowany przez aplikację nie ma wpływu na produktywność użytkowników.",
        correctAnswer: false
    },
    {
        question: "Zamiast tworzyć spójny projekt GUI lepiej jest dołączyć wyczerpującą instrukcję obsługi.",
        correctAnswer: false
    },
    {
        question: "Współczesne monitory są duże, więc nie trzeba się troszczyć o właściwe gospodarowanie przestrzenią okien.",
        correctAnswer: false
    },
    {
        question: "Wszystkie platformy mają identyczne wymagania dotyczące interfejsu.",
        correctAnswer: false
    },
    {
        question: "Listy kontrolne powinny być uwzględniane przy każdym projekcie interfejsu.",
        correctAnswer: true
    },
    {
        question: "Projekt interfejsu powinien zawierać informacje dotyczące skalowania kontrolek.",
        correctAnswer: true
    },
    {
        question: "Ręczna implementacja GUI jest najszybszym sposobem jego realizacji.",
        correctAnswer: false
    },
    {
        question: "Wykorzystanie graficznych edytorów przyspiesza proces tworzenia GUI.",
        correctAnswer: true
    },
    {
        question: "Kryterium przenaszalności nie zawsze jest istotne.",
        correctAnswer: true
    },
    {
        question: "Jedynym istotnym kryterium wyboru biblioteki GUI jest jej cena.",
        correctAnswer: false
    },
    {
        question: "Biblioteka SWT jest zawsze szybsza od Swing.",
        correctAnswer: false
    },
    {
        question: "Biblioteka Swing jest aktualnie najpopularniejszym rozwiązaniem do tworzenia aplikacji desktopowych dla Javy.",
        correctAnswer: true
    },
    {
        question: "Stworzenie własnej biblioteki GUI wymaga przede wszystkim umiejętności pracy na wysokim poziomie abstrakcji.",
        correctAnswer: false
    },
    {
        question: "Nakład pracy potrzebny do stworzenia własnej biblioteki GUI jest porównywalny z tym wymaganym do modyfikacji istniejącej.",
        correctAnswer: false
    },
    {
        question: "Korzystanie z dedykowanych listenerów do obsługi kontrolek poprawia czytelność kodu.",
        correctAnswer: true
    },
    {
        question: "Wszystkie kontrolki, do których będziemy odnosili się w kodzie, powinny mieć nadane poprawne nazwy.",
        correctAnswer: true
    },
    {
        question: "Programista, w każdych okolicznościach, powinien korzystać tylko z jednego managera rozkładu.",
        correctAnswer: false
    },
    {
        question: "Brak odświeżania informacji jest spowodowany słabą wydajnością języka Java.",
        correctAnswer: false
    },
    {
        question: "Przeniesienie obliczeń do oddzielnego wątku może poprawić pracę interfejsu użytkownika.",
        correctAnswer: true
    },
    {
        question: "Klasa SwingWorker wyświetla domyślną wersję paska postępu.",
        correctAnswer: false
    },
    {
        question: "Wykorzystanie klasy SwingWorker przyspiesza wykonywanie obliczeń ok. 3 razy.",
        correctAnswer: false
    },
    {
        question: "Klasa ProgressWorker podobnie jak SwingWorker wspiera przerywanie wykonywanej operacji.",
        correctAnswer: true
    },
    {
        question: "Klasa ProgressWorker wyświetla pasek postępu.",
        correctAnswer: true
    },
    {
        question: "Deklaratywność semantyczna umożliwia pracę na wyższym poziomie abstrakcji niż komponentowa.",
        correctAnswer: true
    },
    {
        question: "Deklaratywne tworzenie GUI jest absolutną nowością i żadna firma komercyjna nie udostępnia takich możliwości.",
        correctAnswer: false
    },
    {
        question: "Asocjacje z modelu obiektowego są implementowane w modelu relacyjnym jako tabele.",
        correctAnswer: false
    },
    {
        question: "Realizacja {unique} korzystając z atrybutu klasowego typu Set poprawi wydajność kosztem zużycia pamięci",
        correctAnswer: true
    },
    {
        question: "Realizacja {unique} korzystając z metody przeglądającej ekstensję zmniejsza zużycie pamięci kosztem wydajności",
        correctAnswer: true
    },
    {
        question: "Implementacja {subset} wymaga metody sprawdzającej istnienie podanego powiązania.",
        correctAnswer: true
    },
    {
        question: "W klasie ObjectPlus, kontener służący do przechowywania wszystkich ekstensji, może być łatwo zaimplementowany przy użyciu klasy ArrayList.",
        correctAnswer: false
    },
    {
        question: "Implementacja, w modelu relacyjnym, atrybutu opcjonalnego polega na dołożeniu dodatkowej kolumny do tabeli",
        correctAnswer: true
    },
    {
        question: "Atrybuty proste realizujemy w MR jako kolumny w tabeli.",
        correctAnswer: true
    },
    {
        question: "Ograniczenie {subset} może dotyczyć jednej asocjacji.",
        correctAnswer: true
    },
    {
        question: "Wadą technologii Hibernate jest brak możliwości mapowania asocjacji.",
        correctAnswer: false
    },
    {
        question: "Niezgodność impedancji jest spowodowana połączeniem modelu obiektowego oraz relacyjnego.",
        correctAnswer: true
    },
    {
        question: "Niezgodność impedancji jest spowodowaną słabą wydajnością bazy danych.",
        correctAnswer: false
    },
    {
        question: "Jednym ze sposobów rozwiązania problemu niezgodności impedancji jest stosowanie dziedziczenia dynamicznego zamiast wielodziedziczenia.",
        correctAnswer: false
    }
];
// ... [TUTAJ TWOJA BAZA 310 PYTAŃ allQuestions] ...

let activeQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let maxQuestionsRequested = 0;
let isInstantFeedbackMode = true;
let isFlashcardMode = false;
let userAnswersHistory = [];

// Elementy DOM
const setupScreen = document.getElementById('setup-screen');
const quizScreen = document.getElementById('quiz-screen');
const questionCountInput = document.getElementById('question-count');
const instantFeedbackCheckbox = document.getElementById('instant-feedback');
const rangeLabel = document.getElementById('range-label');
const startButton = document.getElementById('start-btn');
const previewContainer = document.getElementById('questions-preview');
const flashStatsWrapper = document.getElementById('flashcard-stats');
const resetFlashBtn = document.getElementById('reset-flash-btn');

const questionElement = document.getElementById('question');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const feedbackElement = document.getElementById('feedback-message');
const progressBarFill = document.getElementById('progress');

const btnTrue = document.getElementById('btn-true');
const btnFalse = document.getElementById('btn-false');
const btnSkip = document.getElementById('btn-skip');
const actionButtons = [btnTrue, btnFalse, btnSkip];

// Ładowanie opanowanych pytań z LocalStorage
let learnedFlashcardIds = JSON.parse(localStorage.getItem('learned_flashcards_ids')) || [];

// Inicjalizacja
rangeLabel.innerText = `Ile pytań wylosować? (Dostępnych: ${allQuestions.length})`;
questionCountInput.max = allQuestions.length;
updateFlashcardsStats();
renderQuestionsPreview();

function toggleModeUI() {
    isFlashcardMode = document.getElementById('mode-flashcards').checked;
    if (isFlashcardMode) {
        flashStatsWrapper.style.display = 'block';
        resetFlashBtn.style.display = 'block';
    } else {
        flashStatsWrapper.style.display = 'none';
        resetFlashBtn.style.display = 'none';
    }
}

function updateFlashcardsStats() {
    const totalCount = allQuestions.length;
    const learnedCount = allQuestions.filter(q => learnedFlashcardIds.includes(q.question)).length;
    const remainingCount = totalCount - learnedCount;

    document.getElementById('flash-rem').innerText = remainingCount;
    document.getElementById('flash-known').innerText = learnedCount;
}

resetFlashBtn.addEventListener('click', () => {
    if(confirm("Czy na pewno chcesz zresetować postęp i przywrócić wszystkie pytania do nauki?")) {
        learnedFlashcardIds = [];
        localStorage.setItem('learned_flashcards_ids', JSON.stringify(learnedFlashcardIds));
        updateFlashcardsStats();
    }
});

function renderQuestionsPreview() {
    previewContainer.innerHTML = '';
    allQuestions.forEach((q, index) => {
        const item = document.createElement('div');
        item.classList.add('preview-item');
        item.innerHTML = `
            <div><strong>${index + 1}.</strong> ${q.question}</div>
            <span class="preview-badge">Odpowiedź: ${q.correctAnswer ? 'TAK' : 'NIE'}</span>
        `;
        previewContainer.appendChild(item);
    });
}

// Start gry
startButton.addEventListener('click', () => {
    isFlashcardMode = document.getElementById('mode-flashcards').checked;
    isInstantFeedbackMode = instantFeedbackCheckbox.checked;
    userAnswersHistory = [];

    // Ustalanie puli pytań w zależności od wybranego trybu
    let availablePool = [];
    if (isFlashcardMode) {
        availablePool = allQuestions.filter(q => !learnedFlashcardIds.includes(q.question));
        if (availablePool.length === 0) {
            alert("Gratulacje! Wszystkie pytania zostały poprawie opanowane. Zresetuj postęp, aby zacząć od nowa.");
            return;
        }
    } else {
        availablePool = [...allQuestions];
    }

    let count = parseInt(questionCountInput.value);
    if (isNaN(count) || count < 1) count = 1;
    if (count > availablePool.length) count = availablePool.length;
    
    maxQuestionsRequested = count;
    
    // Tasowanie i wybór
    availablePool.sort(() => 0.5 - Math.random());
    activeQuestions = availablePool.slice(0, maxQuestionsRequested);

    setupScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    
    startQuiz();
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = 'Następne pytanie';
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = activeQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    
    const progressPercent = (currentQuestionIndex / maxQuestionsRequested) * 100;
    progressBarFill.style.width = `${progressPercent}%`;
}

function resetState() {
    nextButton.style.display = 'none';
    feedbackElement.innerText = '';
    actionButtons.forEach(button => {
        button.disabled = false;
        button.style.opacity = '1';
    });
}

function handleSelection(userChoice) {
    const currentQuestion = activeQuestions[currentQuestionIndex];
    let pointsEarned = 0;
    let statusClass = '';

    if (userChoice === null) {
        pointsEarned = 0;
        statusClass = 'rep-skipped';
    } else if (userChoice === currentQuestion.correctAnswer) {
        pointsEarned = 2;
        statusClass = 'rep-correct';
        score += 2;
        
        // Zapis do opanowanych, jeśli włączony jest tryb Eliminacji (Fiszek)
        if (isFlashcardMode && !learnedFlashcardIds.includes(currentQuestion.question)) {
            learnedFlashcardIds.push(currentQuestion.question);
            localStorage.setItem('learned_flashcards_ids', JSON.stringify(learnedFlashcardIds));
        }
    } else {
        pointsEarned = -2;
        statusClass = 'rep-wrong';
        score -= 2;
    }

    userAnswersHistory.push({
        question: currentQuestion.question,
        userChoice: userChoice,
        correctAnswer: currentQuestion.correctAnswer,
        points: pointsEarned,
        statusClass: statusClass
    });

    if (isInstantFeedbackMode) {
        actionButtons.forEach(button => {
            button.disabled = true;
            if (button !== document.activeElement) button.style.opacity = '0.3';
        });

        if (userChoice === null) {
            feedbackElement.innerText = "Pominięto (0 pkt).";
            feedbackElement.style.color = "var(--text-muted)";
        } else if (userChoice === currentQuestion.correctAnswer) {
            feedbackElement.innerText = "Dobrze! (+2 pkt)";
            feedbackElement.style.color = "var(--success)";
        } else {
            feedbackElement.innerText = `Źle! Prawidłowa odpowiedź to: ${currentQuestion.correctAnswer ? 'TAK' : 'NIE'} (-2 pkt)`;
            feedbackElement.style.color = "var(--danger)";
        }
        nextButton.style.display = 'block';
    } else {
        goToNextQuestion();
    }
}

function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < activeQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

// Event Listeners dla przycisków
btnTrue.addEventListener('click', () => handleSelection(true));
btnFalse.addEventListener('click', () => handleSelection(false));
btnSkip.addEventListener('click', () => handleSelection(null));
nextButton.addEventListener('click', goToNextQuestion);

function showScore() {
    progressBarFill.style.width = '100%';
    quizScreen.style.display = 'none';
    scoreContainer.style.display = 'block';
    
    updateFlashcardsStats();
    
    let scoreColor = score >= 0 ? 'var(--success)' : 'var(--danger)';
    let reportHTML = '';
    
    userAnswersHistory.forEach((item, index) => {
        let textUserChoice = item.userChoice === null ? 'NIE WIEM' : (item.userChoice ? 'TAK' : 'NIE');
        let textCorrectAnswer = item.correctAnswer ? 'TAK' : 'NIE';
        let textPoints = item.points === 0 ? '0 pkt' : (item.points > 0 ? `+${item.points} pkt` : `${item.points} pkt`);

        reportHTML += `
            <div class="report-item ${item.statusClass}">
                <div><strong>${index + 1}.</strong> ${item.question}</div>
                <div class="report-details">
                    <span>Twoja odpowiedź: <strong>${textUserChoice}</strong></span>
                    <span>Poprawna odpowiedź: <strong>${textCorrectAnswer}</strong></span>
                    <span class="report-pts">Bilans: ${textPoints}</span>
                </div>
            </div>
        `;
    });
    
    scoreContainer.innerHTML = `
        <h2>Wynik końcowy</h2>
        <p style="color: var(--text-muted); margin-bottom: 10px;">Wylosowanych pytań: ${maxQuestionsRequested} (Maksymalnie do zdobycia: ${maxQuestionsRequested * 2} pkt)</p>
        <p style="font-size: 18px;">Twój ogólny bilans punktów:</p>
        <div style="color: ${scoreColor}; font-size: 48px; font-weight: 800; margin: 16px 0;">${score}</div>
        <button onclick="location.reload()" class="btn btn-start" style="margin-top: 16px; margin-bottom: 32px;">Wróć do menu</button>
        
        <div class="report-box">
            <h3 style="font-size: 18px; margin-bottom: 16px; text-align: center;">Szczegółowy raport z Twoich odpowiedzi:</h3>
            ${reportHTML}
        </div>
    `;
}