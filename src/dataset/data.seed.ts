interface SeedAcademys {
  name: string;
  location: string;
  professor: string;
  phone: string;
}

interface SeedAthletes {
  name: string;
  email: string;
}

interface SeedUsers {
  name: string;
  email: string;
  phone: string;
}

interface SeedData {
  academys: SeedAcademys[];
  athletes: SeedAthletes[];
  users: SeedUsers[];
}

export const inicialData: SeedData = {
  academys: [
    {
      name: 'Art of Jiu Jitsu',
      location: 'Costa Mesa, California, USA',
      professor: 'Rafael Mendes, Guillerme Mendes',
      phone: '0800-555-12345',
    },
    {
      name: 'Renzo Gracie Academy',
      location: 'New York, New York',
      professor: 'Renzo Gracie',
      phone: '0800-555-12345',
    },
    {
      name: 'Marcelo Garcia Jiu Jitsu',
      location: 'New York City, United States',
      professor: 'Marcelo Garcia',
      phone: '0800-555-12345',
    },
    {
      name: 'Atos Jiu Jitsu HQ',
      location: 'San Diego, California',
      professor: 'Andre Galvao',
      phone: '0800-555-12345',
    },
    {
      name: 'Gracie Barra TX',
      location: 'Houston, Texas',
      professor: "Vinicius 'Draculino' Magalhães",
      phone: '0800-555-12345',
    },
    {
      name: 'GFTeam',
      location: 'Rio de Janeiro, Brazil',
      professor: 'Roberto Martinez',
      phone: '0800-555-12345',
    },
    {
      name: 'Roger Gracie Academy',
      location: 'London, England',
      professor: 'Roger Gracie',
      phone: '0800-555-12345',
    },
    {
      name: 'Tristar Gym',
      location: 'Montreal, Quebec (Canada)',
      professor: 'Firas Zahabi',
      phone: '0800-555-12345',
    },
    {
      name: 'Six Blades BJJ',
      location: 'Austin, TX',
      professor: 'Xande Ribeiro',
      phone: '0800-555-12345',
    },
    {
      name: 'Checkmat BJJ HQ',
      location: 'Long Beach, CA',
      professor: 'Leo Vieira',
      phone: '0800-555-12345',
    },
    {
      name: 'Carlson Gracie Budapest',
      location: 'Budapest, Hungary',
      professor: 'Mihaly Sztraka',
      phone: '0800-555-12345',
    },
    {
      name: '10th Planet Jiu-Jitsu',
      location: 'Los Angeles, California',
      professor: 'Eddie Bravo',
      phone: '0800-555-12345',
    },
    {
      name: 'Jiu Jitsu Alliance',
      location: 'United States, Brasil, many others',
      professor: 'Fabio Gurgel',
      phone: '0800-555-12345',
    },
    {
      name: 'Nova União',
      location: 'Brasil, United States, many others',
      professor: 'André (Dede) Pederneiras',
      phone: '0800-555-12345',
    },
    {
      name: 'Dream Art',
      location: 'São Paulo, Brasil',
      professor: 'Isaque Bahiense',
      phone: '0800-555-12345',
    },
    {
      name: 'Cicero Costha International',
      location: 'São Paulo, Brasil',
      professor: 'Cicero Costha',
      phone: '0800-555-12345',
    },
    {
      name: 'LEAD BJJ',
      location: 'Brasil',
      professor: 'Bruno Bastos',
      phone: '0800-555-12345',
    }
  ],

  athletes: [
    {
      name: "Abraham Marte",
      email: 'bjj@gmail.com',
    },
    {
      name: "Adam Benayoun",
      email: 'bjj@gmail.com',
    },
    {
      name: "AJ Azagarm",
      email: 'bjj@gmail.com',
    },
    {
      name: "Aleksander Karelin",
      email: 'bjj@gmail.com',
    },
    {
      name: "Alexandre 'Soca' Freitas",
      email: 'bjj@gmail.com',
    },
    {
      name: "Alexandre Riberio",
      email: 'bjj@gmail.com',
    },
    {
      name: "Aloisio Silva",
      email: 'bjj@gmail.com',
    },
    {
      name: "Alvaro Barreto",
      email: 'bjj@gmail.com',
    },
    {
      name: "André Galvão",
      email: 'bjj@gmail.com',
    },
    {
      name: "Angelica Galvao",
      email: 'bjj@gmail.com',
    },
    {
      name: "Antônio Rodrigo Nogueira 'Minotauro'",
      email: 'bjj@gmail.com',
    },
    {
      name: "Shinya Aoki",
      email: 'bjj@gmail.com',
    },
    {
      name: "Armando Wridt",
      email: 'bjj@gmail.com',
    },
    {
      name: "Arthur Virgílio Neto",
      email: 'bjj@gmail.com',
    },
    {
      name: "B.J. Penn",
      email: 'bjj@gmail.com',
    },
    {
      name: "Bernardo Faria",
      email: 'bjj@gmail.com',
    },
    {
      name: "Bill Cooper",
      email: 'bjj@gmail.com',
    },
    {
      name: "Antonio Braga Neto",
      email: 'bjj@gmail.com',
    },
    {
      name: "Brandon 'Wolverine' Mullins",
      email: 'bjj@gmail.com',
    },
    {
      name: "Braulio Estima",
      email: 'bjj@gmail.com',
    },
    {
      name: "Brian Ortega",
      email: 'bjj@gmail.com',
    },
    {
      name: "Bruno Malfacine",
      email: 'bjj@gmail.com',
    },
    {
      name: "Marcus Buchecha",
      email: 'bjj@gmail.com',
    },
    {
      name: "Caio Terra",
      email: 'bjj@gmail.com',
    },
    {
      name: "Carley Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Carlos 'Bagana' Lima",
      email: 'bjj@gmail.com',
    },
    {
      name: "Carlos 'Caique' Elias",
      email: 'bjj@gmail.com',
    },
    {
      name: "Carlos Antonio Rosado",
      email: 'bjj@gmail.com',
    },
    {
      name: "Carlos Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Carlos Gracie, Jr.",
      email: 'bjj@gmail.com',
    },
    {
      name: "Carlos Machado",
      email: 'bjj@gmail.com',
    },
    {
      name: "Carlos Valente",
      email: 'bjj@gmail.com',
    },
    {
      name: "Carlson Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Chael P. Sonnen",
      email: 'bjj@gmail.com',
    },
    {
      name: "Charles Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Chris Haueter",
      email: 'bjj@gmail.com',
    },
    {
      name: "Christian Graugart",
      email: 'bjj@gmail.com',
    },
    {
      name: "Clark Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Claudinha Gadelha",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rodrigo Comprido Medeiros",
      email: 'bjj@gmail.com',
    },
    {
      name: "Danaher Death Squad",
      email: 'bjj@gmail.com',
    },
    {
      name: "Daniel Beleza",
      email: 'bjj@gmail.com',
    },
    {
      name: "Dave Camarillo",
      email: 'bjj@gmail.com',
    },
    {
      name: "Davi Ramos",
      email: 'bjj@gmail.com',
    },
    {
      name: "Dean Lister",
      email: 'bjj@gmail.com',
    },
    {
      name: "Demian Maia",
      email: 'bjj@gmail.com',
    },
    {
      name: "Derval Luciano Rêgo (Mestre Morcego)",
      email: 'bjj@gmail.com',
    },
    {
      name: "Dillon Danis",
      email: 'bjj@gmail.com',
    },
    {
      name: "Dominyka Obelenyte",
      email: 'bjj@gmail.com',
    },
    {
      name: "Matt Serra",
      email: 'bjj@gmail.com',
    },
    {
      name: "Eddie Bravo",
      email: 'bjj@gmail.com',
    },
    {
      name: "Eddie Cummings",
      email: 'bjj@gmail.com',
    },
    {
      name: "Eduardo Telles",
      email: 'bjj@gmail.com',
    },
    {
      name: "Edwin Najmi",
      email: 'bjj@gmail.com',
    },
    {
      name: "Emily Kwok",
      email: 'bjj@gmail.com',
    },
    {
      name: "Enson Inoue",
      email: 'bjj@gmail.com',
    },
    {
      name: "Erberth Santos",
      email: 'bjj@gmail.com',
    },
    {
      name: "Eric Paulson",
      email: 'bjj@gmail.com',
    },
    {
      name: "Fabio Gurgel",
      email: 'bjj@gmail.com',
    },
    {
      name: "Fabricio Martins Costa",
      email: 'bjj@gmail.com',
    },
    {
      name: "Fabrício Werdum",
      email: 'bjj@gmail.com',
    },
    {
      name: "Felicia Oh",
      email: 'bjj@gmail.com',
    },
    {
      name: "Felipe Pena",
      email: 'bjj@gmail.com',
    },
    {
      name: "Flavio Behring",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rafael Barbosa Formiga",
      email: 'bjj@gmail.com',
    },
    {
      name: "Francisco Mansor",
      email: 'bjj@gmail.com',
    },
    {
      name: "Francisco Sá (Sazinho)",
      email: 'bjj@gmail.com',
    },
    {
      name: "Fábio Santos (fighter)",
      email: 'bjj@gmail.com',
    },
    {
      name: "Gabrielle 'Gabi' Garcia",
      email: 'bjj@gmail.com',
    },
    {
      name: "Gabriel Arges",
      email: 'bjj@gmail.com',
    },
    {
      name: "Garry Tonon",
      email: 'bjj@gmail.com',
    },
    {
      name: "Gastão Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Genki Sudo",
      email: 'bjj@gmail.com',
    },
    {
      name: "Geny Rebello",
      email: 'bjj@gmail.com',
    },
    {
      name: "Geo Martinez",
      email: 'bjj@gmail.com',
    },
    {
      name: "Gezary Matuda",
      email: 'bjj@gmail.com',
    },
    {
      name: "Gianni Grippo",
      email: 'bjj@gmail.com',
    },
    {
      name: "Gilbert Burns",
      email: 'bjj@gmail.com',
    },
    {
      name: "Glover Teixeira",
      email: 'bjj@gmail.com',
    },
    {
      name: "Gordon Ryan",
      email: 'bjj@gmail.com',
    },
    {
      name: "Georges 'Rush' St-Pierre",
      email: 'bjj@gmail.com',
    },
    {
      name: "Gui Mendes",
      email: 'bjj@gmail.com',
    },
    {
      name: "Guilherme Mendes",
      email: 'bjj@gmail.com',
    },
    {
      name: "Gunnar Nelson",
      email: 'bjj@gmail.com',
    },
    {
      name: "Guybson Sá",
      email: 'bjj@gmail.com',
    },
    {
      name: "Hannette Staack",
      email: 'bjj@gmail.com',
    },
    {
      name: "Helio Soneca",
      email: 'bjj@gmail.com',
    },
    {
      name: "Helvecino Penna",
      email: 'bjj@gmail.com',
    },
    {
      name: "Hélio Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Igor Silva",
      email: 'bjj@gmail.com',
    },
    {
      name: "Isaac Doerderlein",
      email: 'bjj@gmail.com',
    },
    {
      name: "Jack Mcvicker",
      email: 'bjj@gmail.com',
    },
    {
      name: "Jake Shields",
      email: 'bjj@gmail.com',
    },
    {
      name: "James Puopolo",
      email: 'bjj@gmail.com',
    },
    {
      name: "Jean Jacques Machado",
      email: 'bjj@gmail.com',
    },
    {
      name: "Jeff Glover",
      email: 'bjj@gmail.com',
    },
    {
      name: "Jeff Monson",
      email: 'bjj@gmail.com',
    },
    {
      name: "Jeff Shaw",
      email: 'bjj@gmail.com',
    },
    {
      name: "Joao Miyao",
      email: 'bjj@gmail.com',
    },
    {
      name: "Joaquim Valente",
      email: 'bjj@gmail.com',
    },
    {
      name: "Joe Moreira",
      email: 'bjj@gmail.com',
    },
    {
      name: "Joe Rogan",
      email: 'bjj@gmail.com',
    },
    {
      name: "John Danaher",
      email: 'bjj@gmail.com',
    },
    {
      name: "John Jones",
      email: 'bjj@gmail.com',
    },
    {
      name: "Jon Satava",
      email: 'bjj@gmail.com',
    },
    {
      name: "Jorge (George) Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Jorge Pereira",
      email: 'bjj@gmail.com',
    },
    {
      name: "Josh Barnett",
      email: 'bjj@gmail.com',
    },
    {
      name: "Josh Hinger",
      email: 'bjj@gmail.com',
    },
    {
      name: "João Alberto Barreto",
      email: 'bjj@gmail.com',
    },
    {
      name: "JT Torres",
      email: 'bjj@gmail.com',
    },
    {
      name: "Kazushi Sakuraba",
      email: 'bjj@gmail.com',
    },
    {
      name: "Keenan Cornelius",
      email: 'bjj@gmail.com',
    },
    {
      name: "Ken Gabrielson",
      email: 'bjj@gmail.com',
    },
    {
      name: "Kennedy Maciel",
      email: 'bjj@gmail.com',
    },
    {
      name: "Kenny Florian",
      email: 'bjj@gmail.com',
    },
    {
      name: "Kit Dale",
      email: 'bjj@gmail.com',
    },
    {
      name: "Kron Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Kurt Osiander",
      email: 'bjj@gmail.com',
    },
    {
      name: "Lachlan Giles",
      email: 'bjj@gmail.com',
    },
    {
      name: "Leandro Lo",
      email: 'bjj@gmail.com',
    },
    {
      name: "Leo Noguiera",
      email: 'bjj@gmail.com',
    },
    {
      name: "Leonardo Neves",
      email: 'bjj@gmail.com',
    },
    {
      name: "Leonardo 'Leozinho' Vieira",
      email: 'bjj@gmail.com',
    },
    {
      name: "Leticia Ribeiro",
      email: 'bjj@gmail.com',
    },
    {
      name: "Lucas Leite",
      email: 'bjj@gmail.com',
    },
    {
      name: "Lucas Lepri",
      email: 'bjj@gmail.com',
    },
    {
      name: "Luis Carlos Guedes de Castro",
      email: 'bjj@gmail.com',
    },
    {
      name: "Luis Franca",
      email: 'bjj@gmail.com',
    },
    {
      name: "Luiz França Filho",
      email: 'bjj@gmail.com',
    },
    {
      name: "Luiz Fux",
      email: 'bjj@gmail.com',
    },
    {
      name: "Luiz Heredia",
      email: 'bjj@gmail.com',
    },
    {
      name: "Luiz Palhares",
      email: 'bjj@gmail.com',
    },
    {
      name: "Luiza Monteiro",
      email: 'bjj@gmail.com',
    },
    {
      name: "Leonardo Alcantara Vieira",
      email: 'bjj@gmail.com',
    },
    {
      name: "Mackenzie Dern",
      email: 'bjj@gmail.com',
    },
    {
      name: "Mansher Khera",
      email: 'bjj@gmail.com',
    },
    {
      name: "Marcelo Garcia",
      email: 'bjj@gmail.com',
    },
    {
      name: "Marcelo Mattos",
      email: 'bjj@gmail.com',
    },
    {
      name: "Marcio Andre",
      email: 'bjj@gmail.com',
    },
    {
      name: "Marcio Cruz",
      email: 'bjj@gmail.com',
    },
    {
      name: "Marcos Tinoco",
      email: 'bjj@gmail.com',
    },
    {
      name: "Marcus 'Buchecha' Almeida",
      email: 'bjj@gmail.com',
    },
    {
      name: "Marcus Soares",
      email: 'bjj@gmail.com',
    },
    {
      name: "Mark Hunt",
      email: 'bjj@gmail.com',
    },
    {
      name: "Masakazu Iminari",
      email: 'bjj@gmail.com',
    },
    {
      name: "Matheus Diniz",
      email: 'bjj@gmail.com',
    },
    {
      name: "Mauricio Motta Gomes",
      email: 'bjj@gmail.com',
    },
    {
      name: "Mendes Bros",
      email: 'bjj@gmail.com',
    },
    {
      name: "Miyao Brothers",
      email: 'bjj@gmail.com',
    },
    {
      name: "Michael Langhi",
      email: 'bjj@gmail.com',
    },
    {
      name: "Micheal Liera",
      email: 'bjj@gmail.com',
    },
    {
      name: "Michelle Nicollini",
      email: 'bjj@gmail.com',
    },
    {
      name: "Mickey Gall",
      email: 'bjj@gmail.com',
    },
    {
      name: "Milton Vieira",
      email: 'bjj@gmail.com',
    },
    {
      name: "Moises Muradi",
      email: 'bjj@gmail.com',
    },
    {
      name: "Murilo Bustamante",
      email: 'bjj@gmail.com',
    },
    {
      name: "Murilo Santana",
      email: 'bjj@gmail.com',
    },
    {
      name: "Márcio Stambowsky",
      email: 'bjj@gmail.com',
    },
    {
      name: "Nate Diaz",
      email: 'bjj@gmail.com',
    },
    {
      name: "Nathan Orchard",
      email: 'bjj@gmail.com',
    },
    {
      name: "Nelson Monteiro",
      email: 'bjj@gmail.com',
    },
    {
      name: "Nicholas Meregali",
      email: 'bjj@gmail.com',
    },
    {
      name: "Nick Diaz",
      email: 'bjj@gmail.com',
    },
    {
      name: "Antonio 'Nino' Schembri",
      email: 'bjj@gmail.com',
    },
    {
      name: "Oliver 'Oli' Geddes",
      email: 'bjj@gmail.com',
    },
    {
      name: "Osvaldo Alves",
      email: 'bjj@gmail.com',
    },
    {
      name: "Oswaldo Fadda",
      email: 'bjj@gmail.com',
    },
    {
      name: "Oswaldo Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Ottavia Bourdain",
      email: 'bjj@gmail.com',
    },
    {
      name: "Pablo Popovitch",
      email: 'bjj@gmail.com',
    },
    {
      name: "Patrice Poissant",
      email: 'bjj@gmail.com',
    },
    {
      name: "Paulo Miyao",
      email: 'bjj@gmail.com',
    },
    {
      name: "Pedro Diaz",
      email: 'bjj@gmail.com',
    },
    {
      name: "Pedro Hemeterio",
      email: 'bjj@gmail.com',
    },
    {
      name: "Pedro Sauer",
      email: 'bjj@gmail.com',
    },
    {
      name: "Pedro Valente Sr.",
      email: 'bjj@gmail.com',
    },
    {
      name: "Percy Harvin",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rafael Lovato Jr.",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rafael Mendes",
      email: 'bjj@gmail.com',
    },
    {
      name: "Ralph Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Daniel 'Raspberry Ape' Strauss",
      email: 'bjj@gmail.com',
    },
    {
      name: "Relson Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Renato Paquet",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rener Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Renzo Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Reyson Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rhadi Ferguson",
      email: 'bjj@gmail.com',
    },
    {
      name: "Riberio Brothers",
      email: 'bjj@gmail.com',
    },
    {
      name: "Ricardo De La Riva",
      email: 'bjj@gmail.com',
    },
    {
      name: "Ricardo Murgel",
      email: 'bjj@gmail.com',
    },
    {
      name: "Ricardo Vieira",
      email: 'bjj@gmail.com',
    },
    {
      name: "Richie Martinez",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rickson Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rigan Machado",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rilion Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Robert Drysdale",
      email: 'bjj@gmail.com',
    },
    {
      name: "Roberto 'Cyborg' Abreu",
      email: 'bjj@gmail.com',
    },
    {
      name: "Roberto Satoshi",
      email: 'bjj@gmail.com',
    },
    {
      name: "Robson Gracie (Carlos Robson Gracie)",
      email: 'bjj@gmail.com',
    },
    {
      name: "Robson Moura",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rodoflo Viera",
      email: 'bjj@gmail.com',
    },
    {
      name: "Roger Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rolando Samson",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rolker Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rolls Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Romero 'Jacare' Cavalcanti",
      email: 'bjj@gmail.com',
    },
    {
      name: "Romulo Barral",
      email: 'bjj@gmail.com',
    },
    {
      name: "Ronaldo 'Jacare' Souza",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rorion Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rousimar Palhares",
      email: 'bjj@gmail.com',
    },
    {
      name: "Roy Dean",
      email: 'bjj@gmail.com',
    },
    {
      name: "Royce Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Royler Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Rubens 'Cobrinha' Charles",
      email: 'bjj@gmail.com',
    },
    {
      name: "Ryan Hall",
      email: 'bjj@gmail.com',
    },
    {
      name: "Ryron Gracie",
      email: 'bjj@gmail.com',
    },
    {
      name: "Saulo Ribeiro",
      email: 'bjj@gmail.com',
    },
    {
      name: "Sergio 'Malibu' Jardim",
      email: 'bjj@gmail.com',
    },
    {
      name: "Shamil Gamzatov",
      email: 'bjj@gmail.com',
    },
    {
      name: "Fernando Di Piero",
      email: 'bjj@gmail.com',
    },
    {
      name: "Stephan Kesting",
      email: 'bjj@gmail.com',
    },
    {
      name: "Sylvio Behring",
      email: 'bjj@gmail.com',
    },
    {
      name: "Sérgio Penha",
      email: 'bjj@gmail.com',
    },
    {
      name: "Tammi Musumeci",
      email: 'bjj@gmail.com',
    },
    {
      name: "Augusto 'Tanquinho' Mendes",
      email: 'bjj@gmail.com',
    },
    {
      name: "Fernando 'Terere' Augusto",
      email: 'bjj@gmail.com',
    },
    {
      name: "Tim Kennedy",
      email: 'bjj@gmail.com',
    },
    {
      name: "Tom Barlow",
      email: 'bjj@gmail.com',
    },
    {
      name: "Tom Brady",
      email: 'bjj@gmail.com',
    },
    {
      name: "Travis Stevens",
      email: 'bjj@gmail.com',
    },
    {
      name: "Urijah Faber",
      email: 'bjj@gmail.com',
    },
    {
      name: "Valerie Worthington",
      email: 'bjj@gmail.com',
    },
    {
      name: "Vanderson Gomez",
      email: 'bjj@gmail.com',
    },
    {
      name: "Vinny Magalhães",
      email: 'bjj@gmail.com',
    },
    {
      name: "Vitor Ribeiro",
      email: 'bjj@gmail.com',
    },
    {
      name: "Wellington 'Megaton' Dias",
      email: 'bjj@gmail.com',
    },
    {
      name: "Wilson Mattos",
      email: 'bjj@gmail.com',
    },
    {
      name: "Xande Ribeiro",
      email: 'bjj@gmail.com',
    },
    {
      name: "Yuri Simoes",
      email: 'bjj@gmail.com',
    },
    {
      name: "Yvonne Duarte",
      email: 'bjj@gmail.com',
    }
  ],

  users: [
    {
      name: 'Camilo Pacheco',
      email: 'cpacheco.arg@gmail.com',
      phone: '+5493513741024',
    },
    {
      name: 'Olegario Ortega',
      email: 'olega@gmail.com',
      phone: '+5492887542014',
    },
    {
      name: 'Justo Del Toro',
      email: 'deltoro@gmail.com',
      phone: '+5493887357229',
    },
  ]


}