import * as bcrypt from 'bcrypt';

interface SeedAcademys {
  name: string;
  location: string;
  professor: string;
  phone: string;
  image: string;
}

interface SeedAthletes {
  name: string;
  lastName: string;
  team: string;
  email: string;
}

interface SeedUsers {
  name: string;
  email: string;
  password: string;
  phone: string;
  image: string;
  roles: string[];
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
      image: 'https://i.imgur.com/xzJryeS.png',
    },
    {
      name: 'Renzo Gracie Academy',
      location: 'New York, New York',
      professor: 'Renzo Gracie',
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/jkczJ6G.jpeg',
    },
    {
      name: 'Marcelo Garcia Jiu Jitsu',
      location: 'New York City, United States',
      professor: 'Marcelo Garcia',
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/v4uo7mT.jpeg',
    },
    {
      name: 'Atos Jiu Jitsu HQ',
      location: 'San Diego, California',
      professor: 'Andre Galvao',
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/C7J1In8.png',
    },
    {
      name: 'Gracie Barra TX',
      location: 'Houston, Texas',
      professor: "Vinicius 'Draculino' Magalhães",
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/i66IjVz.png',
    },
    {
      name: 'GFTeam',
      location: 'Rio de Janeiro, Brazil',
      professor: 'Roberto Martinez',
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/ZvknhRX.jpg',
    },
    {
      name: 'Roger Gracie Academy',
      location: 'London, England',
      professor: 'Roger Gracie',
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/m6cFt7F.jpeg',
    },
    {
      name: 'Six Blades BJJ',
      location: 'Austin, TX',
      professor: 'Xande Ribeiro',
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/y3mum3s.jpeg',
    },
    {
      name: 'Checkmat BJJ HQ',
      location: 'Long Beach, CA',
      professor: 'Leo Vieira',
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/id9IvM6.png',
    },
    {
      name: 'Carlson Gracie Budapest',
      location: 'Budapest, Hungary',
      professor: 'Mihaly Sztraka',
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/bkhuWbb.jpeg',
    },
    {
      name: '10th Planet Jiu-Jitsu',
      location: 'Los Angeles, California',
      professor: 'Eddie Bravo',
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/kVAhjMM.jpeg',
    },
    {
      name: 'Jiu Jitsu Alliance',
      location: 'United States, Brasil, many others',
      professor: 'Fabio Gurgel',
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/SgXhLCk.png',
    },
    {
      name: 'Nova União',
      location: 'Brasil, United States, many others',
      professor: 'André (Dede) Pederneiras',
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/WJfP3dH.png',
    },
    {
      name: 'Dream Art',
      location: 'São Paulo, Brasil',
      professor: 'Isaque Bahiense',
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/1edDHjW.jpeg',
    },
    {
      name: 'Cicero Costha International',
      location: 'São Paulo, Brasil',
      professor: 'Cicero Costha',
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/uOM0QMa.jpg',
    },
    {
      name: 'LEAD BJJ',
      location: 'Brasil',
      professor: 'Bruno Bastos',
      phone: '0800-555-12345',
      image: 'https://i.imgur.com/Nso1au5.jpeg',
    }
  ],

  athletes: [
    {
      "name": "Aarae",
      "lastName": "Alexander",
      "team": "Team Lloyd Irvin",
      "email": "aarae.alexander@teamlloydirevin.com"
    },
    {
      "name": "Aaron",
      "lastName": "Johnson",
      "team": "Tex Unity JJ",
      "email": "aaron.johnson@unityjj.com"
    },
    {
      "name": "Abdurakhman",
      "lastName": "Bilarov",
      "team": "Team Nogueira",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Abmar",
      "lastName": "Barbosa",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Abraham",
      "lastName": "Marte Messina",
      "team": "Yamasaki / Basico",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Adam",
      "lastName": "Benayoun",
      "team": "Fifty/50 Martial Arts Academy",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Adam",
      "lastName": "Ferrara",
      "team": "GF Team",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Adam",
      "lastName": "Kayoom",
      "team": "BKK BJJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Adam",
      "lastName": "Wardzinski",
      "team": "Megatron Checkmat",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Ademir",
      "lastName": "Barreto",
      "team": "GF Team",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Admilson",
      "lastName": "Brites",
      "team": "Juquinha Gracie Humaita",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Admilson",
      "lastName": "Gobi Junior",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Aniel",
      "lastName": "Bonifacio",
      "team": "Rodrigo Carvalho JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Adele",
      "lastName": "Fornarino",
      "team": "Team Dominance",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Adriana",
      "lastName": "Martins",
      "team": "Akxe",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Adriano",
      "lastName": "Martins",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Adriano",
      "lastName": "Silva",
      "team": "Barbosa JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "AJ",
      "lastName": "Agazarm",
      "team": "Gracie Barra",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alan",
      "lastName": "Belcher",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alan",
      "lastName": "do Nascimento",
      "team": "Finfou Checkmat",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alan",
      "lastName": "Moraes",
      "team": "Carlson Gracie",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alan",
      "lastName": "Sanchez",
      "team": "10th Planet",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alberto",
      "lastName": "Carmona",
      "team": "Beto Akxe",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alberto",
      "lastName": "Crane",
      "team": "Gracie Barra",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alef",
      "lastName": "Brito",
      "team": "Ares JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alex",
      "lastName": "Martins",
      "team": "AMBJJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alex",
      "lastName": "Munis",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alex",
      "lastName": "Nguyen",
      "team": "Standard JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alessandra",
      "lastName": "Vieira",
      "team": "Leka",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexander",
      "lastName": "Trans",
      "team": "Checkmat",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alessandro",
      "lastName": "Capodeferro",
      "team": "Barbosa JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alehander",
      "lastName": "Mariano",
      "team": "Atos",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexandre",
      "lastName": "Barauna",
      "team": "GF Team",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexandre",
      "lastName": "Cavaliere",
      "team": "Alliance",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexandre",
      "lastName": "de Souza",
      "team": "Pop Gracie Floripa",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexandre",
      "lastName": "Ceconi",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexandre",
      "lastName": "de Freitas",
      "team": "Soca BJJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexandre",
      "lastName": "Jesus",
      "team": "Robinho Calasans JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexandre",
      "lastName": "Molinaro",
      "team": "Carlson Gracie",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexandre",
      "lastName": "Paiva",
      "team": "Gigi Alliance",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexandre",
      "lastName": "Pimentel",
      "team": "Pulga Nova Geracao",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexandre",
      "lastName": "Puga",
      "team": "Alliance",
      "email": "alexandre@alliance.com",
    },
    {
      "name": "Alexandre",
      "lastName": "Ribeiro",
      "team": "Xande Ribeiro JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexandre",
      "lastName": "Santos",
      "team": "Cia Paulista",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexandre",
      "lastName": "Vieira",
      "team": "BTT",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexandria",
      "lastName": "Enriquez",
      "team": "Atos",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexsandro",
      "lastName": "Machado",
      "team": "Baiano Checkmat",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexis",
      "lastName": "Alduncin",
      "team": "Renzo Gracie Mexico",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alexsandro",
      "lastName": "Sodre",
      "team": "Clube Feijão JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Ali",
      "lastName": "Monfaradi",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Allan",
      "lastName": "Goes",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alvaro",
      "lastName": "Barreto",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Alvaro",
      "lastName": "Bobadilla",
      "team": "Cabecao GF Team",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Amal",
      "lastName": "Amjahid",
      "team": "C.E.N.S. Academy",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Amanda",
      "lastName": "Alequin / Santana",
      "team": "Tubby Marcio Cruz JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Amanda",
      "lastName": "Leve",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Amanda",
      "lastName": "Magda",
      "team": "Frates JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Amanda",
      "lastName": "Monteiro",
      "team": "GF Team",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Amaury",
      "lastName": "Bitetti",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Amin",
      "lastName": "Touati",
      "team": "Royce Gracie BJJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Amy",
      "lastName": "Campo",
      "team": "Zenith JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Ana Carolina",
      "lastName": "Schmitt",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Ana Carolina",
      "lastName": "Vieira",
      "team": "GF Team",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Ana Laura",
      "lastName": "Cordeiro",
      "team": "Gracie Barra",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Ana Maria",
      "lastName": "Soares",
      "team": "India",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Anderson",
      "lastName": "Munis",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Anderson",
      "lastName": "Pereira",
      "team": "Deton Brazilian Top Team",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andrea",
      "lastName": "Baggio",
      "team": "Manimal",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andre",
      "lastName": "Almeida",
      "team": "Gracie Barra",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andre",
      "lastName": "Almeida",
      "team": "Dedeco American Top Team",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andre",
      "lastName": "Galvao",
      "team": "Atos",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andre",
      "lastName": "Gois",
      "team": "Alliance",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andre",
      "lastName": "Maracaba",
      "team": "Maracaba BJJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andre",
      "lastName": "Monteiro",
      "team": "Nova Geracao",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andre",
      "lastName": "Pederneiras",
      "team": "Dedé Nova Uniao",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andre",
      "lastName": "Porfirio",
      "team": "Fight Sports",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andre",
      "lastName": "Quiles",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andre",
      "lastName": "Terencio",
      "team": "Negao Brazil 021",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andressa",
      "lastName": "Cintra",
      "team": "Checkmat",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andrew",
      "lastName": "Wiltse",
      "team": "Pedigo Submission Fighting",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andrew",
      "lastName": "Tackett",
      "team": "Brazilian Fight Factory",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andy",
      "lastName": "Murasaki",
      "team": "Atos",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Andy",
      "lastName": "Varela",
      "team": "10th Planet",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Angelica",
      "lastName": "Galvao",
      "team": "Atos",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Angelo",
      "lastName": "Claiborne",
      "team": "Team Lloyd Irvin",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Anna",
      "lastName": "Rodrigues",
      "team": "Dream Art Project / Alliance",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Anthony",
      "lastName": "Pacenski",
      "team": "Tony BJJ Revolution",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Anthony",
      "lastName": "Perosh",
      "team": "The Hippo Machado JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Anthony",
      "lastName": "Scales",
      "team": "AJ Nova Uniao",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Antonio Carlos",
      "lastName": "Junior",
      "team": "Cara de Sapato, Shoe Face Checkmat",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Antonio",
      "lastName": "de Melo",
      "team": "Brazil 021",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Antonio",
      "lastName": "Peinado",
      "team": "Batista Alliance",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Antonio Roberto",
      "lastName": "Crivelari",
      "team": "Juninho Checkmat",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Antonio Rodrigo",
      "lastName": "Nogueira",
      "team": "Minotauro",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Antonio",
      "lastName": "Schembri",
      "team": "Nino",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Antonio",
      "lastName": "Braga Neto",
      "team": "Gordo JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Arley",
      "lastName": "Pacheco",
      "team": "Gracie Barra",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Arlisson",
      "lastName": "Melo",
      "team": "Kiki Nova Uniao",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Arthur",
      "lastName": "Detanico",
      "team": "JA BJJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Ariel",
      "lastName": "Tabak",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Ary",
      "lastName": "Farias",
      "team": "Aryzinho Atos",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Arya",
      "lastName": "Esfandmaz",
      "team": "Pure JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Armando",
      "lastName": "Wridt",
      "team": "Dedinho Gracie JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Ashley",
      "lastName": "Williams",
      "team": "Chris Rees JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Augusto",
      "lastName": "Ferrari",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Augusto",
      "lastName": "Mendes",
      "team": "Tanquinho Soul Fighters",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Augusto",
      "lastName": "Monteiro",
      "team": "Associação Monteiro",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Aurelie",
      "lastName": "Le Vern",
      "team": "Gracie Humaita",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Austin",
      "lastName": "Baker",
      "team": "Gracie Barra",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Baret",
      "lastName": "Yoshida",
      "team": "Undisputed",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Beatriz",
      "lastName": "Mesquita",
      "team": "Gracie Humaita",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Ben",
      "lastName": "Baxter",
      "team": "Gracie Humaita",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bernardo",
      "lastName": "Faria",
      "team": "Alliance",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bernardo",
      "lastName": "Pitel",
      "team": "Nova Uniao",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bianca",
      "lastName": "Andrade",
      "team": "Gracie Barra",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bibiano",
      "lastName": "Fernandes",
      "team": "Gracie Barra",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bill",
      "lastName": "Cooper",
      "team": "The Grill",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Brandon",
      "lastName": "Walensky",
      "team": "Clark Gracie Academy",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Brenda",
      "lastName": "Heller",
      "team": "GD Jiu Jitsu",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Brenda",
      "lastName": "Larissa",
      "team": "Escola Melqui Galvão",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bianca",
      "lastName": "Basilio",
      "team": "Almeida JJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Jay Dee",
      "lastName": "Penn",
      "team": "BJ The Prodigy",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Brandon",
      "lastName": "Mullins",
      "team": "Wolverine Gracie Barra",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Braulio",
      "lastName": "Estima",
      "team": "Carcara Gracie Barra",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Brian",
      "lastName": "Beauchamp",
      "team": "Equipe Fabricio",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Brian",
      "lastName": "Beaury",
      "team": "Brian Beaury BJJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Brian",
      "lastName": "Giorgio",
      "team": "Alliance",
      "email": "brian@alliance.com",
    },
    {
      "name": "Brianna",
      "lastName": "Ste-Marie",
      "team": "BTT",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Brigida",
      "lastName": "Carvalho Felipe",
      "team": "Vision",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bruno",
      "lastName": "Alves",
      "team": "Gracie Barra",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bruno",
      "lastName": "Amorim",
      "team": "Robinho Gracie Barra",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bruno",
      "lastName": "Barbosa",
      "team": "",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bruno",
      "lastName": "Bastos",
      "team": "Nova Uniao",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bruno",
      "lastName": "de Paula",
      "team": "Alliance",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bruno",
      "lastName": "Ferreira",
      "team": "Nova Geracao",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bruno",
      "lastName": "Frazatto",
      "team": "Atos",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bruno",
      "lastName": "Lima",
      "team": "AMA BJJ",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bruno",
      "lastName": "Malfacine",
      "team": "Bad Boy Alliance",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bruno",
      "lastName": "Matias",
      "team": "Checkmat",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Jose Bruno",
      "lastName": "Matias",
      "team": "Gracie Barra",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Bruno",
      "lastName": "Mendes",
      "team": "Tanque or Tank Soul Fighters",
      "email": "bjjathletes@gmail.com"
    },
    {
      "name": "Caio",
      "lastName": "Almeida",
      "team": "Almeida JJ",
      "email": "caio.almeida@almeidajj.com"
    },
    {
      "name": "Caio",
      "lastName": "Caetano",
      "team": "",
      "email": "caio.caetano@example.com"
    },
    {
      "name": "Caio",
      "lastName": "Paganini",
      "team": "Alliance",
      "email": "caio.paganini@example.com"
    },
    {
      "name": "Caio",
      "lastName": "Terra",
      "team": "CTBJJA",
      "email": "caio.terra@example.com"
    },
    {
      "name": "Caio",
      "lastName": "Vinicius Santos",
      "team": "Gracie Barra",
      "email": "caio.vinicius@graciebarra.com"
    },
    {
      "name": "Carina",
      "lastName": "Santi",
      "team": "G13",
      "email": "carina.santi@g13.com"
    },
    {
      "name": "Carley",
      "lastName": "Gracie",
      "team": "",
      "email": "carley.gracie@example.com"
    },
    {
      "name": "Carlos",
      "lastName": "Elias",
      "team": "Caique",
      "email": "carlos.elias@caique.com"
    },
    {
      "name": "Carlos",
      "lastName": "Gracie Senior",
      "team": "Gracie JJ",
      "email": "carlos.gracie@graciejj.com"
    },
    {
      "name": "Carlos",
      "lastName": "Gracie Junior",
      "team": "Carlinhos",
      "email": "carlos.graciejr@example.com"
    },
    {
      "name": "Carlos",
      "lastName": "Henrique",
      "team": "Brazil 021",
      "email": "carlos.henrique@example.com"
    },
    {
      "name": "Carlos",
      "lastName": "Henrique Campos",
      "team": "CH7 Dream Art",
      "email": "carlos.henriquecampos@example.com"
    },
    {
      "name": "Carlos",
      "lastName": "Lemos Jr",
      "team": "Escorrega Gracie Barra",
      "email": "carlos.lemosjr@graciebarra.com"
    },
    {
      "name": "Carlos",
      "lastName": "Machado",
      "team": "Machado JJ",
      "email": "carlos.machado@example.com"
    },
    {
      "name": "Carlos",
      "lastName": "Melo",
      "team": "CTA",
      "email": "carlos.melo@cta.com"
    },
    {
      "name": "Carlos",
      "lastName": "Vieira",
      "team": "Portugues Cia Paulista",
      "email": "carlos.vieira@example.com"
    },
    {
      "name": "Carlos",
      "lastName": "Vieira Holanda",
      "team": "Esquisito Checkmat",
      "email": "carlos.vieiraholanda@example.com"
    },
    {
      "name": "Catriel",
      "lastName": "Oliveira",
      "team": "GF Team",
      "email": "catriel.oliveira@gfteam.com"
    },
    {
      "name": "Carlson",
      "lastName": "Gracie",
      "team": "Carlson Gracie",
      "email": "carlson.gracie@example.com"
    },
    {
      "name": "Caroline",
      "lastName": "Lazzer",
      "team": "Emirates Team",
      "email": "caroline.lazzer@emiratesteam.com"
    },
    {
      "name": "Cassio",
      "lastName": "Cardoso",
      "team": "Carlson Gracie",
      "email": "cassio.cardoso@example.com"
    },
    {
      "name": "Cassio Felipe",
      "lastName": "Costa",
      "team": "Laranjinha Six Blades",
      "email": "cassiofelipe.costa@example.com"
    },
    {
      "name": "Catherine",
      "lastName": "Perret",
      "team": "Checkmat",
      "email": "catherine.perret@example.com"
    },
    {
      "name": "Cleber",
      "lastName": "Luciano",
      "team": "",
      "email": "cleber.luciano@example.com"
    },
    {
      "name": "Cleber",
      "lastName": "Sousa",
      "team": "Clandestino Almeida JJ",
      "email": "cleber.sousa@example.com"
    },
    {
      "name": "Celso",
      "lastName": "Vinicius",
      "team": "Celsinho Ryan Gracie",
      "email": "celso.vinicius@example.com"
    },
    {
      "name": "Cesar",
      "lastName": "Gracie",
      "team": "Gracie Elite",
      "email": "cesar.gracie@example.com"
    },
    {
      "name": "Cezar",
      "lastName": "Guimarães",
      "team": "Casquinha Top Brother",
      "email": "cezar.guimaraes@example.com"
    },
    {
      "name": "Chad",
      "lastName": "Hardy",
      "team": "Team Shawn Hammonds",
      "email": "chad.hardy@example.com"
    },
    {
      "name": "Charles",
      "lastName": "Negromonte",
      "team": "Gracie Barra",
      "email": "charles.negromonte@graciebarra.com"
    },
    {
      "name": "Charles",
      "lastName": "Oliveira do Bronx",
      "team": "Macaco Gold Team",
      "email": "charles.oliveiradobronx@example.com"
    },
    {
      "name": "Charlotte",
      "lastName": "Von Baumgarten",
      "team": "Mathias Ribeiro JJ",
      "email": "charlotte.vonbaumgarten@example.com"
    },
    {
      "name": "Chayse",
      "lastName": "Diekema",
      "team": "Frontline Carlson Gracie",
      "email": "chayse.diekema@example.com"
    },
    {
      "name": "Chloe",
      "lastName": "McNally",
      "team": "Unity JJ",
      "email": "chloe.mcnally@unityjj.com"
    },
    {
      "name": "Christian",
      "lastName": "Graugart",
      "team": "",
      "email": "christian.graugart@example.com"
    },
    {
      "name": "Christian",
      "lastName": "Moriarty",
      "team": "Chris Alliance",
      "email": "christian.moriarty@example.com"
    },
    {
      "name": "Chris",
      "lastName": "Tran",
      "team": "Shortround Team Lloyd Irvin",
      "email": "chris.tran@example.com"
    },
    {
      "name": "Christian",
      "lastName": "Uflaker",
      "team": "Charopinho Uflacker Academy",
      "email": "christian.uflaker@example.com"
    },
    {
      "name": "Cicero",
      "lastName": "Costha",
      "team": "PSLPB Cicero Costha",
      "email": "cicero.costha@example.com"
    },
    {
      "name": "Claire",
      "lastName": "North",
      "team": "",
      "email": "claire.north@example.com"
    },
    {
      "name": "Clark",
      "lastName": "Gracie",
      "team": "Tipping Point BJJ",
      "email": "clark.gracie@example.com"
    },
    {
      "name": "Claudia",
      "lastName": "Doval",
      "team": "De La Riva JJ",
      "email": "claudia.doval@example.com"
    },
    {
      "name": "Claudio",
      "lastName": "Calasans",
      "team": "Juninho Atos",
      "email": "claudio.calasans@example.com"
    },
    {
      "name": "Claudio",
      "lastName": "Franca",
      "team": "",
      "email": "claudio.franca@example.com"
    },
    {
      "name": "Claudio",
      "lastName": "Joanino",
      "team": "Nova Uniao",
      "email": "claudio.joanino@example.com"
    },
    {
      "name": "Claudio",
      "lastName": "Silva",
      "team": "Mineiro Banheira",
      "email": "claudio.silva@example.com"
    },
    {
      "name": "Claudio",
      "lastName": "Mattos",
      "team": "Caloquinha Gracie Barra",
      "email": "claudio.mattos@example.com"
    },
    {
      "name": "Cleiton",
      "lastName": "Soares Junior",
      "team": "Alliance",
      "email": "cleiton.soaresjunior@example.com"
    },
    {
      "name": "Cosmo",
      "lastName": "Dias",
      "team": "Nova Uniao",
      "email": "cosmo.dias@example.com"
    },
    {
      "name": "Cole",
      "lastName": "Abate",
      "team": "Art Of Jiu-Jitsu",
      "email": "cole.abate@example.com"
    },
    {
      "name": "Cole",
      "lastName": "Franson",
      "team": "Tinguinha JJ",
      "email": "cole.franson@example.com"
    },
    {
      "name": "Cory",
      "lastName": "Walker",
      "team": "Team Lloyd Irvin",
      "email": "cory.walker@example.com"
    },
    {
      "name": "Craig",
      "lastName": "Kukuk",
      "team": "",
      "email": "craig.kukuk@example.com"
    },
    {
      "name": "Craig",
      "lastName": "Jones",
      "team": "Absolute MMA",
      "email": "craig.jones@absolutemma.com"
    },
    {
      "name": "Crezio",
      "lastName": "Chaves",
      "team": "",
      "email": "crezio.chaves@example.com"
    },
    {
      "name": "Crezio",
      "lastName": "de Souza",
      "team": "Carlson Gracie",
      "email": "crezio.desouza@example.com"
    },
    {
      "name": "Cristiano",
      "lastName": "Carioca",
      "team": "",
      "email": "cristiano.carioca@example.com"
    },
    {
      "name": "Cristiano",
      "lastName": "Lazzarini",
      "team": "Titi Gracie Barra",
      "email": "cristiano.lazzarini@example.com"
    },
    {
      "name": "Cristiano",
      "lastName": "Marcello",
      "team": "CM System",
      "email": "cristiano.marcello@example.com"
    },
    {
      "name": "Crolin",
      "lastName": "Gracie",
      "team": "Gracie Gym",
      "email": "crolin.gracie@example.com"
    },
    {
      "name": "Cynthia",
      "lastName": "Omatsu",
      "team": "Cindy",
      "email": "cynthia.omatsu@example.com"
    },
    {
      "name": "Daisuke",
      "lastName": "Shiraki",
      "team": "Sugie Amazon Carpe Diem",
      "email": "daisuke.shiraki@example.com"
    },
    {
      "name": "Damion",
      "lastName": "Oranday",
      "team": "Oranday Bros",
      "email": "damion.oranday@example.com"
    },
    {
      "name": "Daniel",
      "lastName": "Amorim Junior",
      "team": "Double Five",
      "email": "daniel.amorimjunior@example.com"
    },
    {
      "name": "Daniel",
      "lastName": "Azevedo",
      "team": "Cia Paulista",
      "email": "daniel.azevedo@ciapaulista.com"
    },
    {
      "name": "Daniel",
      "lastName": "Beleza",
      "team": "SAS",
      "email": "daniel.beleza@example.com"
    },
    {
      "name": "Daniel",
      "lastName": "Diniz",
      "team": "Checkmat",
      "email": "daniel.diniz@example.com"
    },
    {
      "name": "Daniel",
      "lastName": "Garcia Dias",
      "team": "Nova Uniao",
      "email": "daniel.garciadias@example.com"
    },
    {
      "name": "Daniel",
      "lastName": "Gracie",
      "team": "Renzo Gracie",
      "email": "daniel.gracie@example.com"
    },
    {
      "name": "Daniel",
      "lastName": "Maira",
      "team": "",
      "email": "daniel.maira@example.com"
    },
    {
      "name": "Daniel",
      "lastName": "Moraes",
      "team": "Relson Gracie",
      "email": "daniel.moraes@example.com"
    },
    {
      "name": "Daniel",
      "lastName": "Sathler",
      "team": "Atos",
      "email": "daniel.sathler@example.com"
    },
    {
      "name": "Daniel",
      "lastName": "Otero",
      "team": "Equipe Fabricio",
      "email": "daniel.otero@example.com"
    },
    {
      "name": "Daniel",
      "lastName": "Valverde",
      "team": "",
      "email": "daniel.valverde@example.com"
    },
    {
      "name": "Danielle",
      "lastName": "Alvarez",
      "team": "LEAD BJJ",
      "email": "danielle.alvarez@example.com"
    },
    {
      "name": "Danilo",
      "lastName": "Borovic",
      "team": "",
      "email": "danilo.borovic@example.com"
    },
    {
      "name": "Danilo",
      "lastName": "Cherman",
      "team": "Nova Uniao",
      "email": "danilo.cherman@example.com"
    },
    {
      "name": "Danilo",
      "lastName": "Moreira",
      "team": "PSQGL",
      "email": "danilo.moreira@example.com"
    },
    {
      "name": "Dante",
      "lastName": "Leon",
      "team": "GF Team",
      "email": "dante.leon@gfteam.com"
    },
    {
      "name": "Dave",
      "lastName": "Camarillo",
      "team": "",
      "email": "dave.camarillo@example.com"
    },
    {
      "name": "Davi",
      "lastName": "Cabral",
      "team": "GF Team",
      "email": "davi.cabral@gfteam.com"
    },
    {
      "name": "Davi",
      "lastName": "Ramos",
      "team": "Top Brother",
      "email": "davi.ramos@example.com"
    },
    {
      "name": "David",
      "lastName": "Avellan",
      "team": "Dave Freestyle Fighting Academy",
      "email": "david.avellan@example.com"
    },
    {
      "name": "David",
      "lastName": "Juliano Lemes",
      "team": "",
      "email": "david.julianolemes@example.com"
    },
    {
      "name": "David",
      "lastName": "Garmo",
      "team": "Assembly Jiu-Jitsu",
      "email": "david.garmo@example.com"
    },
    {
      "name": "David",
      "lastName": "Jacobs",
      "team": "David Jacobs JJ",
      "email": "david.jacobs@example.com"
    },
    {
      "name": "David",
      "lastName": "Raab Skaf",
      "team": "",
      "email": "david.raabskaf@example.com"
    },
    {
      "name": "David",
      "lastName": "Onuma",
      "team": "Malandro",
      "email": "david.onuma@example.com"
    },
    {
      "name": "David",
      "lastName": "Meyer",
      "team": "",
      "email": "david.meyer@example.com"
    },
    {
      "name": "David",
      "lastName": "Terrell",
      "team": "Soul Assassin",
      "email": "david.terrell@example.com"
    },
    {
      "name": "David",
      "lastName": "Terao",
      "team": "50/Fifty",
      "email": "david.terao@example.com"
    },
    {
      "name": "Darragh",
      "lastName": "OConnaill",
      "team": "Ribeiro JJ",
      "email": "darragh.oconnaill@example.com"
    },
    {
      "name": "Dean",
      "lastName": "Lister",
      "team": "The Boogeyman",
      "email": "dean.lister@example.com"
    },
    {
      "name": "Delson",
      "lastName": "Heleno",
      "team": "Pe de Chumbo",
      "email": "delson.heleno@example.com"
    },
    {
      "name": "Demian",
      "lastName": "Maia",
      "team": "Brasa",
      "email": "demian.maia@example.com"
    },
    {
      "name": "Denilson",
      "lastName": "Pimenta",
      "team": "GF Team",
      "email": "denilson.pimenta@example.com"
    },
    {
      "name": "Dennis",
      "lastName": "Asche",
      "team": "Gordo JJ",
      "email": "dennis.asche@example.com"
    },
    {
      "name": "Denny",
      "lastName": "Prokopos",
      "team": "10th Planet",
      "email": "denny.prokopos@example.com"
    },
    {
      "name": "Denys",
      "lastName": "Darzi",
      "team": "Brazil 021",
      "email": "denys.darzi@example.com"
    },
    {
      "name": "Deoclecio",
      "lastName": "Paulo",
      "team": "",
      "email": "deoclecio.paulo@example.com"
    },
    {
      "name": "Devhonte",
      "lastName": "Johnson",
      "team": "Bones Unity JJ",
      "email": "devhonte.johnson@example.com"
    },
    {
      "name": "Diego",
      "lastName": "Bispo",
      "team": "Ares JJ",
      "email": "diego.bispo@example.com"
    },
    {
      "name": "Diego",
      "lastName": "Dias Ramalho",
      "team": "Sem Nocao ZR Team",
      "email": "diego.diasramalho@example.com"
    },
    {
      "name": "Diego",
      "lastName": "Oliveira",
      "team": "Pato Dream Art",
      "email": "diego.oliveira@example.com"
    },
    {
      "name": "Diego",
      "lastName": "Sodre",
      "team": "Clube Feijao Nova Uniao",
      "email": "diego.sodre@example.com"
    },
    {
      "name": "Diego",
      "lastName": "Vivaldo",
      "team": "Gaviao Guigo",
      "email": "diego.vivaldo@example.com"
    },
    {
      "name": "Dillon",
      "lastName": "Danis",
      "team": "Alliance",
      "email": "dillon.danis@example.com"
    },
    {
      "name": "Diogo",
      "lastName": "Sampaio Araujo",
      "team": "Moreno Soul Fighters",
      "email": "diogo.sampaiaraujo@example.com"
    },
    {
      "name": "Diogo",
      "lastName": "Reis",
      "team": "Escola Melqui Galvão",
      "email": "diogo.reis@example.com"
    },
    {
      "name": "DeAlonzio",
      "lastName": "Jackson",
      "team": "DJ Kimura Kid Lloyd Irvin",
      "email": "dealonzio.jackson@example.com"
    },
    {
      "name": "Deandre",
      "lastName": "Corbe",
      "team": "Coastal BJJ",
      "email": "deandre.corbe@example.com"
    },
    {
      "name": "Dominique",
      "lastName": "Bell",
      "team": "Atos",
      "email": "dominique.bell@example.com"
    },
    {
      "name": "Dominika",
      "lastName": "Obelenyte",
      "team": "Alliance",
      "email": "dominika.obelenyte@example.com"
    },
    {
      "name": "Donald",
      "lastName": "Achnick",
      "team": "Donnie Team Lloyd Irvin",
      "email": "donald.achnick@example.com"
    },
    {
      "name": "Dorian",
      "lastName": "Olivarez",
      "team": "Team Olivarez",
      "email": "dorian.olivarez@example.com"
    },
    {
      "name": "Doug",
      "lastName": "Pelinkovic",
      "team": "Renzo Gracie Academy",
      "email": "doug.pelinkovic@example.com"
    },
    {
      "name": "Dustin",
      "lastName": "Denes",
      "team": "Clean",
      "email": "dustin.denes@example.com"
    },
    {
      "name": "Eddie",
      "lastName": "Bravo",
      "team": "10th Planet",
      "email": "eddie.bravo@example.com"
    },
    {
      "name": "Edson",
      "lastName": "Diniz",
      "team": "InFight",
      "email": "edson.diniz@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Azevedo",
      "team": "",
      "email": "eduardo.azevedo@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Avelar",
      "team": "Soul Fighters",
      "email": "eduardo.avelar@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Barboza",
      "team": "GF Team",
      "email": "eduardo.barboza@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Barros",
      "team": "",
      "email": "eduardo.barros@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Conceicao",
      "team": "Jamelão",
      "email": "eduardo.conceicao@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Galvao",
      "team": "Gracie Barra",
      "email": "eduardo.galvao@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Goncalves",
      "team": "ATT",
      "email": "eduardo.goncalves@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Granzotto",
      "team": "Dudu Checkmat",
      "email": "eduardo.granzotto@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Leitao",
      "team": "Cia Paulista",
      "email": "eduardo.leitao@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Lopes",
      "team": "Duzao Guigo JJ",
      "email": "eduardo.lopes@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Monteiro",
      "team": "Gracie Fortaleza",
      "email": "eduardo.monteiro@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Roque",
      "team": "Gordo JJ R1ng",
      "email": "eduardo.roque@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Santoro",
      "team": "Portugues Cia Paulista",
      "email": "eduardo.santoro@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Telles",
      "team": "Nine Nine",
      "email": "eduardo.telles@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Tinoco",
      "team": "Almeida JJ",
      "email": "eduardo.tinoco@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Ramos",
      "team": "",
      "email": "eduardo.ramos@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Rios",
      "team": "Teta Frontline",
      "email": "eduardo.rios@example.com"
    },
    {
      "name": "Eduardo",
      "lastName": "Venancio",
      "team": "Brigadeiro Brigadeiro Jiu Jitsu",
      "email": "eduardo.venancio@example.com"
    },
    {
      "name": "Edward",
      "lastName": "Cummings",
      "team": "Eddie Wolverine Renzo Gracie Academy",
      "email": "edward.cummings@example.com"
    },
    {
      "name": "Edwin",
      "lastName": "Najmi",
      "team": "Gracie Barra",
      "email": "edwin.najmi@example.com"
    },
    {
      "name": "Edwin",
      "lastName": "Junny Ocasio",
      "team": "Unity",
      "email": "edwin.junnyocasio@example.com"
    },
    {
      "name": "Eldar",
      "lastName": "Rafigaev",
      "team": "Jungle BJJ",
      "email": "eldar.rafigaev@example.com"
    },
    {
      "name": "Elder",
      "lastName": "Cruz",
      "team": "El Monstro Checkmat",
      "email": "elder.cruz@example.com"
    },
    {
      "name": "Eleftheria",
      "lastName": "Christodoulou",
      "team": "ZR Team",
      "email": "eleftheria.christodoulou@example.com"
    },
    {
      "name": "Eloisa",
      "lastName": "Souto",
      "team": "Elo Kimura/Nova União",
      "email": "eloisa.souto@example.com"
    },
    {
      "name": "Elijah",
      "lastName": "Dorsey",
      "team": "Team Lloyd Irvin",
      "email": "elijah.dorsey@example.com"
    },
    {
      "name": "Elina",
      "lastName": "Moestam",
      "team": "Checkmat",
      "email": "elina.moestam@example.com"
    },
    {
      "name": "Eliot",
      "lastName": "Marshall",
      "team": "Easton Training Centre",
      "email": "eliot.marshall@example.com"
    },
    {
      "name": "Elisabeth",
      "lastName": "Clay",
      "team": "Ares JJ",
      "email": "elisabeth.clay@example.com"
    },
    {
      "name": "Elvira",
      "lastName": "Karppinen",
      "team": "10th Planet",
      "email": "elvira.karppinen@example.com"
    },
    {
      "name": "Emilio",
      "lastName": "Hernandez",
      "team": "Zenith BJJ",
      "email": "emilio.hernandez@example.com"
    },
    {
      "name": "Emilly",
      "lastName": "Alves Vasconcelos",
      "team": "Atos",
      "email": "emilly.alvesvasconcelos@example.com"
    },
    {
      "name": "Emilly",
      "lastName": "Fernandez",
      "team": "LEAD",
      "email": "emilly.fernandez@example.com"
    },
    {
      "name": "Enderson",
      "lastName": "Dias",
      "team": "",
      "email": "enderson.dias@example.com"
    },
    {
      "name": "Endres",
      "lastName": "Barbosa Mendes",
      "team": "Checkmat",
      "email": "endres.barbosamendes@example.com"
    },
    {
      "name": "Eric",
      "lastName": "Phan",
      "team": "",
      "email": "eric.phan@example.com"
    },
    {
      "name": "Erich",
      "lastName": "Munis",
      "team": "",
      "email": "erich.munis@example.com"
    },
    {
      "name": "Ericka",
      "lastName": "Almeida",
      "team": "Gracie Barra",
      "email": "ericka.almeida@example.com"
    },
    {
      "name": "Erik",
      "lastName": "Wanderley",
      "team": "Gracie Barra",
      "email": "erik.wanderley@example.com"
    },
    {
      "name": "Erin",
      "lastName": "Harpe",
      "team": "Gracie Jiu-Jitsu",
      "email": "erin.harpe@example.com"
    },
    {
      "name": "Erin",
      "lastName": "Herle",
      "team": "Alliance",
      "email": "erin.herle@example.com"
    },
    {
      "name": "Espen",
      "lastName": "Mathiesen",
      "team": "Kimura Nova Uniao",
      "email": "espen.mathiesen@example.com"
    },
    {
      "name": "Estevan",
      "lastName": "Martinez",
      "team": "ZR Team",
      "email": "estevan.martinez@example.com"
    },
    {
      "name": "Ethan",
      "lastName": "Crelinsten",
      "team": "RGA TriStar",
      "email": "ethan.crelinsten@example.com"
    },
    {
      "name": "Everton",
      "lastName": "Santana",
      "team": "",
      "email": "everton.santana@example.com"
    },
    {
      "name": "Fabiana",
      "lastName": "Borges",
      "team": "Gracie Barra",
      "email": "fabiana.borges@example.com"
    },
    {
      "name": "Fabiano",
      "lastName": "Silva",
      "team": "American Top Team",
      "email": "fabiano.silva@example.com"
    },
    {
      "name": "Fabbio",
      "lastName": "Passos",
      "team": "Alliance",
      "email": "fabbio.passos@example.com"
    },
    {
      "name": "Fabio",
      "lastName": "Alano",
      "team": "Kamikaze Alliance",
      "email": "fabio.alano@example.com"
    },
    {
      "name": "Fabio",
      "lastName": "Andrade",
      "team": "GF Team Nova Uniao",
      "email": "fabio.andrade@example.com"
    },
    {
      "name": "Fabio",
      "lastName": "Caloi",
      "team": "Alliance",
      "email": "fabio.caloi@example.com"
    },
    {
      "name": "Fabio",
      "lastName": "Clemente",
      "team": "Alliance",
      "email": "fabio.clemente@example.com"
    },
    {
      "name": "Fabio",
      "lastName": "Gurgel",
      "team": "General Alliance",
      "email": "fabio.gurgel@example.com"
    },
    {
      "name": "Fabio",
      "lastName": "Leopoldo",
      "team": "Gracie Morumbi",
      "email": "fabio.leopoldo@example.com"
    },
    {
      "name": "Fabio",
      "lastName": "Prado",
      "team": "Pateta FP JJ",
      "email": "fabio.prado@example.com"
    },
    {
      "name": "Fabio",
      "lastName": "Santos",
      "team": "",
      "email": "fabio.santos@example.com"
    },
    {
      "name": "Fabricio",
      "lastName": "Andrey",
      "team": "Escola Melqui Galvão",
      "email": "fabricio.andrey@example.com"
    },
    {
      "name": "Fabricio",
      "lastName": "Barbarotti",
      "team": "PSLPB",
      "email": "fabricio.barbarotti@example.com"
    },
    {
      "name": "Fabricio",
      "lastName": "Camoes",
      "team": "Morango Gracie Humaita",
      "email": "fabricio.camoes@example.com"
    },
    {
      "name": "Fabricio",
      "lastName": "Martins",
      "team": "Equipe Fabricio",
      "email": "fabricio.martins@example.com"
    },
    {
      "name": "Fabricio",
      "lastName": "Medici",
      "team": "Kioto",
      "email": "fabricio.medici@example.com"
    },
    {
      "name": "Fabricio",
      "lastName": "Moreira",
      "team": "Qatar JJ",
      "email": "fabricio.moreira@example.com"
    },
    {
      "name": "Fabyury",
      "lastName": "Khrysthyan",
      "team": "GF Team",
      "email": "fabyury.khrysthyan@example.com"
    },
    {
      "name": "Fabricio",
      "lastName": "Werdum",
      "team": "Vai Cavalo Winner-Behring",
      "email": "fabricio.werdum@example.com"
    },
    {
      "name": "Faustino",
      "lastName": "Neto",
      "team": "Pina Clube Pina de Jiu Jitsu",
      "email": "faustino.neto@example.com"
    },
    {
      "name": "Ffion",
      "lastName": "Davies",
      "team": "ECJJ",
      "email": "ffion.davies@example.com"
    },
    {
      "name": "Federico",
      "lastName": "Tisi",
      "team": "",
      "email": "federico.tisi@example.com"
    },
    {
      "name": "Felipe",
      "lastName": "Bezerra",
      "team": "Checkmat",
      "email": "felipe.bezerra@example.com"
    },
    {
      "name": "Felipe",
      "lastName": "Cavalcante",
      "team": "",
      "email": "felipe.cavalcante@example.com"
    },
    {
      "name": "Felipe",
      "lastName": "Cesar",
      "team": "Felipinho Barbosa JJ",
      "email": "felipe.cesar@example.com"
    },
    {
      "name": "Felipe",
      "lastName": "Costa",
      "team": "Brasa",
      "email": "felipe.costa@example.com"
    },
    {
      "name": "Felipe",
      "lastName": "Pena",
      "team": "Preguiça Gracie Barra",
      "email": "felipe.pena@example.com"
    },
    {
      "name": "Felipe",
      "lastName": "Linhares",
      "team": "Felipinho Alliance",
      "email": "felipe.linhares@example.com"
    },
    {
      "name": "Felipe",
      "lastName": "Neto",
      "team": "Zicro Alliance",
      "email": "felipe.neto@example.com"
    },
    {
      "name": "Felipe",
      "lastName": "Mota",
      "team": "Gargamel Roger Gracie Academy",
      "email": "felipe.mota@example.com"
    },
    {
      "name": "Felipe",
      "lastName": "Silva",
      "team": "Bocao Infight",
      "email": "felipe.silva@example.com"
    },
    {
      "name": "Fellipe",
      "lastName": "Andrew",
      "team": "",
      "email": "fellipe.andrew@example.com"
    },
    {
      "name": "Fellipe",
      "lastName": "Trovo",
      "team": "Gracie Barra Ushirobira JJ",
      "email": "fellipe.trovo@example.com"
    },
    {
      "name": "Frank",
      "lastName": "Cespedes",
      "team": "Alliance",
      "email": "frank.cespedes@example.com"
    },
    {
      "name": "Frank",
      "lastName": "Rosenthal",
      "team": "Renzo Gracie Academy",
      "email": "frank.rosenthal@example.com"
    },
    {
      "name": "Fernando Augusto",
      "lastName": "Silva",
      "team": "Terere Alliance",
      "email": "fernandoaugusto.silva@example.com"
    },
    {
      "name": "Fernando",
      "lastName": "Di Piero",
      "team": "Soluço Alliance",
      "email": "fernando.dipiero@example.com"
    },
    {
      "name": "Fernando",
      "lastName": "Marques",
      "team": "Boi Carlson Gracie",
      "email": "fernando.marques@example.com"
    },
    {
      "name": "Fernando",
      "lastName": "Guimaraes",
      "team": "Pinduka Nova Uniao",
      "email": "fernando.guimaraes@example.com"
    },
    {
      "name": "Fernando",
      "lastName": "Monteiro",
      "team": "Brazil 021",
      "email": "fernando.monteiro@example.com"
    },
    {
      "name": "Fernando",
      "lastName": "Paradeda",
      "team": "",
      "email": "fernando.paradeda@example.com"
    },
    {
      "name": "Fernando",
      "lastName": "Pontes",
      "team": "Margarida",
      "email": "fernando.pontes@example.com"
    },
    {
      "name": "Fernando",
      "lastName": "Vieira",
      "team": "",
      "email": "fernando.vieira@example.com"
    },
    {
      "name": "Fernando",
      "lastName": "Aleluia",
      "team": "Brazil 021",
      "email": "fernando.aleluia@example.com"
    },
    {
      "name": "Fernanda",
      "lastName": "Cristo",
      "team": "Evox",
      "email": "fernanda.cristo@example.com"
    },
    {
      "name": "Firas",
      "lastName": "Zahabi",
      "team": "TriStar Gym",
      "email": "firas.zahabi@example.com"
    },
    {
      "name": "Flavio",
      "lastName": "Almeida",
      "team": "Cachorrinho Gracie Barra",
      "email": "flavio.almeida@example.com"
    },
    {
      "name": "Flavio",
      "lastName": "Behring",
      "team": "",
      "email": "flavio.behring@example.com"
    },
    {
      "name": "Flavio",
      "lastName": "Junqueira",
      "team": "Alliance",
      "email": "flavio.junqueira@example.com"
    },
    {
      "name": "Flavio",
      "lastName": "Vianna",
      "team": "",
      "email": "flavio.vianna@example.com"
    },
    {
      "name": "Francisco",
      "lastName": "Cuneo",
      "team": "",
      "email": "francisco.cuneo@example.com"
    },
    {
      "name": "Francisco",
      "lastName": "Albuquerque",
      "team": "Toco Nova Geracao",
      "email": "francisco.albuquerque@example.com"
    },
    {
      "name": "Francisco",
      "lastName": "Lo",
      "team": "PSLPB Cicero Costha",
      "email": "francisco.lo@example.com"
    },
    {
      "name": "Francisco",
      "lastName": "Fernandes",
      "team": "Chiquinho de Cuiaba Gracie Barra",
      "email": "francisco.fernandes@example.com"
    },
    {
      "name": "Francisco",
      "lastName": "Mansur",
      "team": "Kioto",
      "email": "francisco.mansur@example.com"
    },
    {
      "name": "Francisco",
      "lastName": "Mendes",
      "team": "Chico Checkmat",
      "email": "francisco.mendes@example.com"
    },
    {
      "name": "Francisco",
      "lastName": "Sa",
      "team": "SAS",
      "email": "francisco.sa@example.com"
    },
    {
      "name": "Fredson",
      "lastName": "Paixao",
      "team": "",
      "email": "fredson.paixao@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Almeida",
      "team": "Checkmat",
      "email": "gabriel.almeida@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Arges",
      "team": "Frodo Gracie Barra",
      "email": "gabriel.arges@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Brod",
      "team": "",
      "email": "gabriel.brod@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Costa",
      "team": "Maranhao Guigo JJ",
      "email": "gabriel.costa@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Figueiro",
      "team": "",
      "email": "gabriel.figueiro@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Gaudio",
      "team": "",
      "email": "gabriel.gaudio@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Gonzaga",
      "team": "Napao",
      "email": "gabriel.gonzaga@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Goulart",
      "team": "",
      "email": "gabriel.goulart@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Henrique Oliveira",
      "team": "Alliance",
      "email": "gabrielhenrique.oliveira@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Lucas",
      "team": "Fedor Checkmat",
      "email": "gabriel.lucas@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Kitober",
      "team": "",
      "email": "gabriel.kitober@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Marangoni",
      "team": "Academia Marangoni",
      "email": "gabriel.marangoni@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Moraes",
      "team": "",
      "email": "gabriel.moraes@example.com"
    },
    {
      "name": "Gabriel de Oliveira",
      "lastName": "Haddad",
      "team": "Biel",
      "email": "gabrieldeoliveira.haddad@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Rollo",
      "team": "Palito Checkmat",
      "email": "gabriel.rollo@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Rainho",
      "team": "Biel GF Team",
      "email": "gabriel.rainho@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Ribeiro",
      "team": "Brazil 021",
      "email": "gabriel.ribeiro@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Sousa",
      "team": "",
      "email": "gabriel.sousa@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Volante",
      "team": "XCoach",
      "email": "gabriel.volante@example.com"
    },
    {
      "name": "Gabriel",
      "lastName": "Willcox",
      "team": "",
      "email": "gabriel.willcox@example.com"
    },
    {
      "name": "Gabrieli",
      "lastName": "Pessanha",
      "team": "InFight",
      "email": "gabrieli.pessanha@example.com"
    },
    {
      "name": "Gabrieli",
      "lastName": "Procopio",
      "team": "BTT",
      "email": "gabrieli.procopio@example.com"
    },
    {
      "name": "Gabriela",
      "lastName": "Pereira",
      "team": "Vision",
      "email": "gabriela.pereira@example.com"
    },
    {
      "name": "Gabriela",
      "lastName": "Fechter",
      "team": "Checkmat",
      "email": "gabriela.fechter@example.com"
    },
    {
      "name": "Gabrielle",
      "lastName": "Garcia",
      "team": "Gabi Alliance",
      "email": "gabrielle.garcia@example.com"
    },
    {
      "name": "Gabrielle",
      "lastName": "McComb",
      "team": "Gabi Gracie Humaita",
      "email": "gabrielle.mccomb@example.com"
    },
    {
      "name": "Garth",
      "lastName": "Taylor",
      "team": "",
      "email": "garth.taylor@example.com"
    },
    {
      "name": "Gary",
      "lastName": "Tonon",
      "team": "Renzo Gracie Academy",
      "email": "gary.tonon@example.com"
    },
    {
      "name": "Gastao",
      "lastName": "Gracie",
      "team": "Gracie JJ",
      "email": "gastao.gracie@example.com"
    },
    {
      "name": "Geny",
      "lastName": "Rebelo",
      "team": "Academia Serrana",
      "email": "geny.rebelo@example.com"
    },
    {
      "name": "Gerard",
      "lastName": "Labinski",
      "team": "",
      "email": "gerard.labinski@example.com"
    },
    {
      "name": "George",
      "lastName": "Gracie",
      "team": "Gato Ruivo Gracie JJ",
      "email": "george.gracie@example.com"
    },
    {
      "name": "Geraldo",
      "lastName": "Flores",
      "team": "",
      "email": "geraldo.flores@example.com"
    },
    {
      "name": "Gerardi",
      "lastName": "Rinaldi",
      "team": "Jerry Renzo Gracie",
      "email": "gerardi.rinaldi@example.com"
    },
    {
      "name": "Gezary",
      "lastName": "Matuda",
      "team": "American Top Team",
      "email": "gezary.matuda@example.com"
    },
    {
      "name": "Giancarlo",
      "lastName": "Bodoni",
      "team": "Alliance",
      "email": "giancarlo.bodoni@example.com"
    },
    {
      "name": "Gianni",
      "lastName": "Grippo",
      "team": "Alliance",
      "email": "gianni.grippo@example.com"
    },
    {
      "name": "Gilbert",
      "lastName": "Burns",
      "team": "Durinho Atos",
      "email": "gilbert.burns@example.com"
    },
    {
      "name": "Gilson",
      "lastName": "Nunes",
      "team": "Nenem Checkmat",
      "email": "gilson.nunes@example.com"
    },
    {
      "name": "Giovanna",
      "lastName": "Jara",
      "team": "",
      "email": "giovanna.jara@example.com"
    },
    {
      "name": "Giulia",
      "lastName": "Gregorut",
      "team": "",
      "email": "giulia.gregorut@example.com"
    },
    {
      "name": "Gordon",
      "lastName": "Ryan",
      "team": "New Wave",
      "email": "gordon.ryan@example.com"
    },
    {
      "name": "Grace",
      "lastName": "Gundrum",
      "team": "10th Planet",
      "email": "grace.gundrum@example.com"
    },
    {
      "name": "Greg",
      "lastName": "Souders",
      "team": "Standard JJ",
      "email": "greg.souders@example.com"
    },
    {
      "name": "Gregor",
      "lastName": "Gracie",
      "team": "Renzo Gracie",
      "email": "gregor.gracie@example.com"
    },
    {
      "name": "Guilherme",
      "lastName": "Bacha",
      "team": "",
      "email": "guilherme.bacha@example.com"
    },
    {
      "name": "Guilherme",
      "lastName": "Cascon",
      "team": "Brazil 021",
      "email": "guilherme.cascon@example.com"
    },
    {
      "name": "Guilherme",
      "lastName": "Cordiviola",
      "team": "",
      "email": "guilherme.cordiviola@example.com"
    },
    {
      "name": "Guilherme",
      "lastName": "Fernandes",
      "team": "Dream Art",
      "email": "guilherme.fernandes@example.com"
    },
    {
      "name": "Guilherme",
      "lastName": "Mendes",
      "team": "AOJ",
      "email": "guilherme.mendes@example.com"
    },
    {
      "name": "Guilherme",
      "lastName": "Rocha",
      "team": "ZR Team",
      "email": "guilherme.rocha@example.com"
    },
    {
      "name": "Gunnar",
      "lastName": "Nelson",
      "team": "",
      "email": "gunnar.nelson@example.com"
    },
    {
      "name": "Gutemberg",
      "lastName": "Pereira",
      "team": "GF Team",
      "email": "gutemberg.pereira@example.com"
    },
    {
      "name": "Guthierry",
      "lastName": "Barbosa",
      "team": "PRM Team Carlson Gracie Academy",
      "email": "guthierry.barbosa@example.com"
    },
    {
      "name": "Gustavo",
      "lastName": "Campos",
      "team": "Guto Atos",
      "email": "gustavo.campos@example.com"
    },
    {
      "name": "Gustavo",
      "lastName": "Dantas",
      "team": "Nova Uniao",
      "email": "gustavo.dantas@example.com"
    },
    {
      "name": "Gustavo",
      "lastName": "Maron",
      "team": "Dream Art",
      "email": "gustavo.maron@example.com"
    },
    {
      "name": "Gustavo",
      "lastName": "Machado",
      "team": "",
      "email": "gustavo.machado@example.com"
    },
    {
      "name": "Gustavo",
      "lastName": "Batista",
      "team": "Braguinha Atos",
      "email": "gustavo.batista@example.com"
    },
    {
      "name": "Gustavo Dias",
      "lastName": "Elias",
      "team": "Gracie Humaita",
      "email": "gustavodias.elias@example.com"
    },
    {
      "name": "Gustavo",
      "lastName": "Pires",
      "team": "Siri Gracie Barra",
      "email": "gustavo.pires@example.com"
    },
    {
      "name": "Gyalisson",
      "lastName": "Freitas",
      "team": "Hiago GF Team",
      "email": "gyalisson.freitas@example.com"
    },
    {
      "name": "Heath",
      "lastName": "Pedigo",
      "team": "Pedigo Submission Fighting",
      "email": "heath.pedigo@example.com"
    },
    {
      "name": "Heather",
      "lastName": "Raftery",
      "team": "Atos",
      "email": "heather.raftery@example.com"
    },
    {
      "name": "Hanette",
      "lastName": "Staack",
      "team": "Brazil 021",
      "email": "hanette.staack@example.com"
    },
    {
      "name": "Harryson",
      "lastName": "Pereira",
      "team": "Ataque Duplo",
      "email": "harryson.pereira@example.com"
    },
    {
      "name": "Helder",
      "lastName": "Junior",
      "team": "Tropeco Fratres",
      "email": "helder.junior@example.com"
    },
    {
      "name": "Helder",
      "lastName": "Medeiros",
      "team": "SpongeBob",
      "email": "helder.medeiros@example.com"
    },
    {
      "name": "Helio",
      "lastName": "Gracie",
      "team": "Gracie JJ",
      "email": "helio.gracie@example.com"
    },
    {
      "name": "Helio",
      "lastName": "Moreira",
      "team": "Soneca",
      "email": "helio.moreira@example.com"
    },
    {
      "name": "Helio",
      "lastName": "Vigio",
      "team": "Gracie Humaita",
      "email": "helio.vigio@example.com"
    },
    {
      "name": "Helton",
      "lastName": "Jose Junior",
      "team": "PSLPB Cicero Costha",
      "email": "helton.jose.junior@example.com"
    },
    {
      "name": "Helvecio",
      "lastName": "Penna",
      "team": "De La Riva",
      "email": "helvecio.penna@example.com"
    },
    {
      "name": "Henrique",
      "lastName": "Cardoso",
      "team": "Ceconi JJ",
      "email": "henrique.cardoso@example.com"
    },
    {
      "name": "Henrique",
      "lastName": "Machado",
      "team": "ASLE",
      "email": "henrique.machado@example.com"
    },
    {
      "name": "Hiago",
      "lastName": "Gama",
      "team": "Alliance",
      "email": "hiago.gama@example.com"
    },
    {
      "name": "Higor",
      "lastName": "Lima",
      "team": "Kahwage Fight Team",
      "email": "higor.lima@example.com"
    },
    {
      "name": "Hillary",
      "lastName": "Williams",
      "team": "Gringa WSMMA",
      "email": "hillary.williams@example.com"
    },
    {
      "name": "Hiryu",
      "lastName": "Niwa",
      "team": "AOJ",
      "email": "hiryu.niwa@example.com"
    },
    {
      "name": "Horlando",
      "lastName": "Monteiro",
      "team": "Kimura Nova Uniao",
      "email": "horlando.monteiro@example.com"
    },
    {
      "name": "Huanderson",
      "lastName": "Pavao",
      "team": "GF Team",
      "email": "huanderson.pavao@example.com"
    },
    {
      "name": "Hugo",
      "lastName": "Marques",
      "team": "Soul Fighters",
      "email": "hugo.marques@example.com"
    },
    {
      "name": "Humberto",
      "lastName": "Silveira",
      "team": "Shiozawa",
      "email": "humberto.silveira@example.com"
    },
    {
      "name": "Hunter",
      "lastName": "Ewald",
      "team": "",
      "email": "hunter.ewald@example.com"
    },
    {
      "name": "Hygor",
      "lastName": "Brito",
      "team": "PSLPB",
      "email": "hygor.brito@example.com"
    },
    {
      "name": "Ian",
      "lastName": "Behring",
      "team": "",
      "email": "ian.behring@example.com"
    },
    {
      "name": "Ian",
      "lastName": "Mcpherson",
      "team": "Alliance",
      "email": "ian.mcpherson@example.com"
    },
    {
      "name": "Ian",
      "lastName": "Sanders",
      "team": "RFBJJ",
      "email": "ian.sanders@example.com"
    },
    {
      "name": "Ida",
      "lastName": "Hansson",
      "team": "Checkmat",
      "email": "ida.hansson@example.com"
    },
    {
      "name": "Iasmin",
      "lastName": "Casser",
      "team": "AOJ",
      "email": "iasmin.casser@example.com"
    },
    {
      "name": "Igor",
      "lastName": "Feliz",
      "team": "Future School Of Jiu-Jitsu",
      "email": "igor.feliz@example.com"
    },
    {
      "name": "Igor",
      "lastName": "Rodrigues",
      "team": "Baixinho Checkmat",
      "email": "igor.rodrigues@example.com"
    },
    {
      "name": "Igor",
      "lastName": "Silva",
      "team": "GF Team",
      "email": "igor.silva@example.com"
    },
    {
      "name": "Igor",
      "lastName": "Paiva",
      "team": "Soul Fighters",
      "email": "igor.paiva@example.com"
    },
    {
      "name": "Igor",
      "lastName": "Schneider",
      "team": "Tigrao New School Brotherhood",
      "email": "igor.schneider@example.com"
    },
    {
      "name": "Igor",
      "lastName": "Verissimo",
      "team": "",
      "email": "igor.verissimo@example.com"
    },
    {
      "name": "Inacio",
      "lastName": "Neto",
      "team": "Gracie Barra",
      "email": "inacio.neto@example.com"
    },
    {
      "name": "Ingridd",
      "lastName": "Alves",
      "team": "",
      "email": "ingridd.alves@example.com"
    },
    {
      "name": "Israel",
      "lastName": "Sousa",
      "team": "GF Team",
      "email": "israel.sousa@example.com"
    },
    {
      "name": "Italo",
      "lastName": "Lins",
      "team": "GF Team",
      "email": "italo.lins@example.com"
    },
    {
      "name": "Italo",
      "lastName": "Lima Costa",
      "team": "Ares",
      "email": "italo.lima.costa@example.com"
    },
    {
      "name": "Italo",
      "lastName": "Moura",
      "team": "Unity - PSLPB",
      "email": "italo.moura@example.com"
    },
    {
      "name": "Itallo",
      "lastName": "Vilardo",
      "team": "",
      "email": "itallo.vilardo@example.com"
    },
    {
      "name": "Isaque",
      "lastName": "Bahiense",
      "team": "Dream Art",
      "email": "isaque.bahiense@example.com"
    },
    {
      "name": "Iseong",
      "lastName": "Jang",
      "team": "Wire JJ",
      "email": "iseong.jang@example.com"
    },
    {
      "name": "Ismael",
      "lastName": "Santos",
      "team": "GF Team",
      "email": "ismael.santos@example.com"
    },
    {
      "name": "Ivan",
      "lastName": "Gomes",
      "team": "",
      "email": "ivan.gomes@example.com"
    },
    {
      "name": "Ivaniel",
      "lastName": "Oliveira",
      "team": "Atos",
      "email": "ivaniel.oliveira@example.com"
    },
    {
      "name": "Jackson",
      "lastName": "Douglas",
      "team": "Checkmat",
      "email": "jackson.douglas@checkmat.com"
    },
    {
      "name": "Jackson",
      "lastName": "Sousa",
      "team": "Checkmat",
      "email": "jackson.sousa@checkmat.com"
    },
    {
      "name": "Jackson",
      "lastName": "Nagai",
      "team": "Checkmat",
      "email": "jackson.nagai@checkmat.com"
    },
    {
      "name": "Jacob",
      "lastName": "Couch",
      "team": "",
      "email": "bjj@checkmat.com"
    },
    {
      "name": "Jaqueline",
      "lastName": "Amorim",
      "team": "Checkmat",
      "email": "jaqueline.amorim@checkmat.com"
    },
    {
      "name": "Jair",
      "lastName": "Lourenco",
      "team": "Nova Uniao - Kimura",
      "email": "jair.lourenco@novauniao-kimura.com"
    },
    {
      "name": "Jake",
      "lastName": "Ferrara",
      "team": "GF Team",
      "email": "jake.ferrara@gfteam.com"
    },
    {
      "name": "Jake",
      "lastName": "Mackenzie",
      "team": "",
      "email": "mack@gmail.com"
    },
    {
      "name": "Jake",
      "lastName": "Watson",
      "team": "Maracaba BJJ",
      "email": "jake.watson@maracababjj.com"
    },
    {
      "name": "Jakub",
      "lastName": "Zajkowski",
      "team": "",
      "email": "jakub@gmail.com"
    },
    {
      "name": "James",
      "lastName": "Brasco",
      "team": "BJJ Center",
      "email": "james.brasco@bjjcenter.com"
    },
    {
      "name": "James",
      "lastName": "Harbison",
      "team": "Lloyd Irvin",
      "email": "james.harbison@lloydirvin.com"
    },
    {
      "name": "James",
      "lastName": "Puopolo",
      "team": "Gracie Humaita",
      "email": "james.puopolo@graciehumaita.com"
    },
    {
      "name": "Janni",
      "lastName": "Larsson",
      "team": "Checkmat",
      "email": "janni.larsson@checkmat.com"
    },
    {
      "name": "Janaina",
      "lastName": "Lebre",
      "team": "Gracie Humaita",
      "email": "janaina.lebre@graciehumaita.com"
    },
    {
      "name": "Jansen",
      "lastName": "Gomes",
      "team": "Checkmat",
      "email": "jansen.gomes@checkmat.com"
    },
    {
      "name": "Jasmine",
      "lastName": "Rocha",
      "team": "Vagner Rocha MA",
      "email": "jasmine.rocha@vagnerrochama.com"
    },
    {
      "name": "Jason",
      "lastName": "Rau",
      "team": "Team Serra",
      "email": "jason.rau@teamserra.com"
    },
    {
      "name": "Javier",
      "lastName": "Vazquez",
      "team": "Showtime",
      "email": "javier.vazquez@showtime.com"
    },
    {
      "name": "Javier",
      "lastName": "Barter",
      "team": "F Moya JJ",
      "email": "javier.barter@fmoyajj.com"
    },
    {
      "name": "Javier",
      "lastName": "Zaruski",
      "team": "Atos",
      "email": "javier.zaruski@atos.com"
    },
    {
      "name": "Jeferson",
      "lastName": "Guaresi",
      "team": "Unity JJ",
      "email": "jeferson.guaresi@unityjj.com"
    },
    {
      "name": "Jefferson",
      "lastName": "Moura",
      "team": "Gracie Barra",
      "email": "jefferson.moura@graciebarra.com"
    },
    {
      "name": "Jake",
      "lastName": "Shields",
      "team": "Gracie Elite",
      "email": "jake.shields@gracieelite.com"
    },
    {
      "name": "Jean Jacques",
      "lastName": "Machado",
      "team": "Machado JJ",
      "email": "jeanjacques.machado@machadojj.com"
    },
    {
      "name": "Jean",
      "lastName": "Kleber",
      "team": "Kimura",
      "email": "jean.kleber@kimura.com"
    },
    {
      "name": "Jeff",
      "lastName": "Glover",
      "team": "Paragon",
      "email": "jeff.glover@paragon.com"
    },
    {
      "name": "Jeff",
      "lastName": "Joslin",
      "team": "",
      "email": "joslin@joslin.com"
    },
    {
      "name": "Jena",
      "lastName": "Bishop",
      "team": "Gracie Humaita",
      "email": "jena.bishop@graciehumaita.com"
    },
    {
      "name": "Jeremy",
      "lastName": "Arel",
      "team": "Gerbil",
      "email": "jeremy.arel@gerbil.com"
    },
    {
      "name": "Jeremy",
      "lastName": "Jackson",
      "team": "CTA",
      "email": "jeremy.jackson@cta.com"
    },
    {
      "name": "Jeremy",
      "lastName": "Skinner",
      "team": "Absolute MMA",
      "email": "jeremy.skinner@absolutemma.com"
    },
    {
      "name": "Jessa",
      "lastName": "Khan",
      "team": "AOJ",
      "email": "jessa.khan@aoj.com"
    },
    {
      "name": "Jesse",
      "lastName": "Urholin",
      "team": "Alliance",
      "email": "jesse.urholin@alliance.com"
    },
    {
      "name": "Jessica",
      "lastName": "Caroline",
      "team": "PAX JJ",
      "email": "jessica.caroline@paxjj.com"
    },
    {
      "name": "Jessica Cristina",
      "lastName": "Santos",
      "team": "Elite BJJ",
      "email": "jessicacristina.santos@elite.com"
    },
    {
      "name": "Jessica",
      "lastName": "Flowers Oliveira",
      "team": "Gracie Barra",
      "email": "jessica.flowersoliveira@graciebarra.com"
    },
    {
      "name": "Jessica",
      "lastName": "Swanson",
      "team": "Soul Fighters",
      "email": "jessica.swanson@soulfighters.com"
    },
    {
      "name": "Jhenifer",
      "lastName": "Aquino",
      "team": "Atos",
      "email": "jhenifer.aquino@atos.com"
    },
    {
      "name": "Joao",
      "lastName": "Assis",
      "team": "Checkmat",
      "email": "joao.assis@checkmat.com"
    },
    {
      "name": "Joao",
      "lastName": "Cizeski",
      "team": "FP Team",
      "email": "joao.cizeski@fpteam.com"
    },
    {
      "name": "Joao",
      "lastName": "Costa",
      "team": "Fight Sports",
      "email": "joao.costa@fightsports.com"
    },
    {
      "name": "Joao",
      "lastName": "Faria Johnny",
      "team": "Gracie Humaita",
      "email": "joao.fariajohnny@graciehumaita.com"
    },
    {
      "name": "Joao",
      "lastName": "Mendes Bisnaga",
      "team": "Atos",
      "email": "joao.mendesbisnaga@atos.com"
    },
    {
      "name": "Joao",
      "lastName": "Miyao",
      "team": "PSLPB",
      "email": "joao.miyao@pslpb.com"
    },
    {
      "name": "Joao Gabriel",
      "lastName": "Rocha",
      "team": "Double Five",
      "email": "joaogabriel.rocha@doublefive.com"
    },
    {
      "name": "Joao Paulo",
      "lastName": "Neto",
      "team": "Alliance",
      "email": "joaopaulo.neto@alliance.com"
    },
    {
      "name": "Joao",
      "lastName": "Roque",
      "team": "Nova Uniao",
      "email": "joao.roque@novauniao.com"
    },
    {
      "name": "Joao",
      "lastName": "Zeferino",
      "team": "Gracie Floripa",
      "email": "joao.zeferino@graciefloripa.com"
    },
    {
      "name": "Joao Alberto",
      "lastName": "Barreto",
      "team": "",
      "email": "joaoalberto.barreto@unknown.com"
    },
    {
      "name": "Joao Paulo",
      "lastName": "Oliveira Jones",
      "team": "Strauch Jiu Jitsu",
      "email": "joaopaulo.oliveirajones@strauchjiujitsu.com"
    },
    {
      "name": "Joe",
      "lastName": "Baize",
      "team": "Ocean County BJJ",
      "email": "joe.baize@oceancountybjj.com"
    },
    {
      "name": "Joe",
      "lastName": "Moreira",
      "team": "",
      "email": "joe.moreira@unknown.com"
    },
    {
      "name": "Joel",
      "lastName": "Gingery",
      "team": "Memphis Judo + BJJ",
      "email": "joel.gingery@memphisjudoandbjj.com"
    },
    {
      "name": "Joel",
      "lastName": "Tudor",
      "team": "",
      "email": "joel.tudor@unknown.com"
    },
    {
      "name": "Jorge",
      "lastName": "Britto",
      "team": "Jiu-Jitsu For Life Team",
      "email": "jorge.britto@jiujitsuforlifeteam.com"
    },
    {
      "name": "Jorge Patino",
      "lastName": "Macaco",
      "team": "Macaco Gold Team",
      "email": "jorgepatino.macaco@macacogoldteam.com"
    },
    {
      "name": "John",
      "lastName": "Danaher",
      "team": "New Wave",
      "email": "john.danaher@newwave.com"
    },
    {
      "name": "John",
      "lastName": "Combs",
      "team": "Easton Training Centre",
      "email": "john.combs@eastontrainingcentre.com"
    },
    {
      "name": "John",
      "lastName": "Crouch",
      "team": "MMA Lab",
      "email": "john.crouch@mmalab.com"
    },
    {
      "name": "John",
      "lastName": "Kavanagh",
      "team": "SBG",
      "email": "john.kavanagh@sbg.com"
    },
    {
      "name": "John",
      "lastName": "Frankl",
      "team": "Straight Blast Gym",
      "email": "john.frankl@straightblastgym.com"
    },
    {
      "name": "John",
      "lastName": "Lewis",
      "team": "Nova Uniao",
      "email": "john.lewis@novauniao.com"
    },
    {
      "name": "John",
      "lastName": "Salter",
      "team": "Salty Dog JJ",
      "email": "john.salter@saltydogjj.com"
    },
    {
      "name": "John",
      "lastName": "Will",
      "team": "",
      "email": "john.will@unknown.com"
    },
    {
      "name": "Johnif",
      "lastName": "Rocha",
      "team": "Cicero Costha",
      "email": "johnif.rocha@cicerocostha.com"
    },
    {
      "name": "Johnny",
      "lastName": "Tama",
      "team": "Studio 76",
      "email": "johnny.tama@studio76.com"
    },
    {
      "name": "Jon",
      "lastName": "Blank",
      "team": "10th Planet",
      "email": "jon.blank@10thplanet.com"
    },
    {
      "name": "Jonata",
      "lastName": "Gomes Be",
      "team": "Checkmat",
      "email": "jonata.gomesbe@checkmat.com"
    },
    {
      "name": "Jonatha",
      "lastName": "Alves",
      "team": "Atos",
      "email": "alves@alves.com",
    },
    {
      "name": "Jonathan",
      "lastName": "Calestine Jon",
      "team": "Renzo Gracie Academy",
      "email": "jonathan.calestine@renzogracieacademy.com"
    },
    {
      "name": "Jonathan",
      "lastName": "Thomas",
      "team": "Valhalla BJJ",
      "email": "jonathan.thomas@valhallabjj.com"
    },
    {
      "name": "Jonatas",
      "lastName": "Gurgel",
      "team": "American Top Team",
      "email": "jonatas.gurgel@americantopteam.com"
    },
    {
      "name": "Jonas",
      "lastName": "Andrade",
      "team": "PSLPB",
      "email": "jonas.andrade@pslpb.com"
    },
    {
      "name": "Jonatas",
      "lastName": "Novaes",
      "team": "Channel Islands JJ",
      "email": "jonatas.novaes@channelislandsjj.com"
    },
    {
      "name": "Jonnatas",
      "lastName": "Gracie",
      "team": "Atos",
      "email": "jonnatas.gracie@atos.com"
    },
    {
      "name": "Jordan",
      "lastName": "Vaisman",
      "team": "Art Of Jiu-Jitsu",
      "email": "jordan.vaisman@artofjiujitsu.com"
    },
    {
      "name": "Jose",
      "lastName": "Aldo Juninho",
      "team": "Nova Uniao",
      "email": "jose.aldojuninho@novauniao.com"
    },
    {
      "name": "Jose",
      "lastName": "Carlos Granja",
      "team": "Kimura / Nova Uniao",
      "email": "jose.carlosgranja@kimuranovauniao.com"
    },
    {
      "name": "Jose",
      "lastName": "Carlos Sousa",
      "team": "GF Team",
      "email": "jose.carlossousa@gfteam.com"
    },
    {
      "name": "Jose",
      "lastName": "Leao Teixeira",
      "team": "Escola de Jiu Jitsu",
      "email": "jose.leaoteixeira@escoladejiujitsu.com"
    },
    {
      "name": "Jose",
      "lastName": "Junior",
      "team": "",
      "email": "jose.junior@unknown.com"
    },
    {
      "name": "Jose",
      "lastName": "Marcello Ze",
      "team": "Icon JJ",
      "email": "jose.marcelloze@iconjj.com"
    },
    {
      "name": "Jose Mario",
      "lastName": "Queiroga",
      "team": "Esfiha",
      "email": "josemario.queiroga@esfiha.com"
    },
    {
      "name": "Jose Mario",
      "lastName": "Sperry",
      "team": "Brazilian Top Team",
      "email": "josemario.sperry@braziliantopteam.com"
    },
    {
      "name": "Jose",
      "lastName": "Olimpio Ze Radiola",
      "team": "Gracie Barra",
      "email": "jose.olimpiozeradiola@graciebarra.com"
    },
    {
      "name": "Josef",
      "lastName": "Manuel Ze Cobra",
      "team": "Nova Uniao",
      "email": "josef.manuelzecobra@novauniao.com"
    },
    {
      "name": "Jozef",
      "lastName": "Chen",
      "team": "",
      "email": "jozef.chen@unknown.com"
    },
    {
      "name": "Joseph",
      "lastName": "Dierkhising Joe",
      "team": "",
      "email": "joseph.dierkhisingjoe@unknown.com"
    },
    {
      "name": "Josh",
      "lastName": "Griffiths",
      "team": "Clockwork JJ",
      "email": "josh.griffiths@clockworkjj.com"
    },
    {
      "name": "Josh",
      "lastName": "Hinger",
      "team": "Atos",
      "email": "josh.hinger@atos.com"
    },
    {
      "name": "Joshua",
      "lastName": "Cisneros",
      "team": "Cleber JJ / Elite Team",
      "email": "joshua.cisneros@cleberjjeliteteam.com"
    },
    {
      "name": "Juan Caio",
      "lastName": "Kamezawa",
      "team": "Alliance",
      "email": "juancaio.kamezawa@alliance.com"
    },
    {
      "name": "Juan Miguel",
      "lastName": "Iturralde",
      "team": "Alliance",
      "email": "juanmiguel.iturralde@alliance.com"
    },
    {
      "name": "Juan",
      "lastName": "Lopes da Silva",
      "team": "Prime Team",
      "email": "juan.lopesdasilva@primeteam.com"
    },
    {
      "name": "Julian",
      "lastName": "Espinosa",
      "team": "Renzo Gracie Academy",
      "email": "julian.espinosa@renzogracieacademy.com"
    },
    {
      "name": "Julio",
      "lastName": "dos Anjos Junior",
      "team": "",
      "email": "julio.dosanjosjunior@unknown.com"
    },
    {
      "name": "Julio",
      "lastName": "Cesar",
      "team": "GF Team",
      "email": "julio.cesar@gfteam.com"
    },
    {
      "name": "Julio",
      "lastName": "Fernandez Foca",
      "team": "BJJ Revolution",
      "email": "julio.fernandezfoca@bjjrevolution.com"
    },
    {
      "name": "Julius",
      "lastName": "Park",
      "team": "Crazy 88",
      "email": "julius.park@crazy88.com"
    },
    {
      "name": "Julia",
      "lastName": "Alves",
      "team": "GF Team",
      "email": "julia.alves@gfteam.com"
    },
    {
      "name": "JW",
      "lastName": "Wright",
      "team": "Gracie Humaita",
      "email": "jw.wright@graciehumaita.com"
    },
    {
      "name": "Jurandir",
      "lastName": "Moura",
      "team": "",
      "email": "jurandir.moura@unknown.com"
    },
    {
      "name": "Jonathan",
      "lastName": "Torres JT",
      "team": "Atos",
      "email": "jonathan.torresjt@atos.com"
    },
    {
      "name": "Kacie",
      "lastName": "Tan",
      "team": "Fortitude BJJ",
      "email": "kacie.tan@fortitudebjj.com"
    },
    {
      "name": "Kauan",
      "lastName": "Barboza",
      "team": "Checkmat",
      "email": "kauan.barboza@checkmat.com"
    },
    {
      "name": "Keenan",
      "lastName": "Cornelius",
      "team": "Atos",
      "email": "keenan.cornelius@atos.com"
    },
    {
      "name": "Keith",
      "lastName": "Krikorian",
      "team": "10th Planet",
      "email": "keith.krikorian@10thplanet.com"
    },
    {
      "name": "Keith",
      "lastName": "McKenzie",
      "team": "Checkmat",
      "email": "keith.mckenzie@checkmat.com"
    },
    {
      "name": "Gerry",
      "lastName": "Costa Kid Pelligro",
      "team": "",
      "email": "gerry.costakidpelligro@unknown.com"
    },
    {
      "name": "Kade",
      "lastName": "Ruotolo",
      "team": "Atos",
      "email": "kade.ruotolo@atos.com"
    },
    {
      "name": "Kaiser",
      "lastName": "Girao",
      "team": "Checkmat",
      "email": "kaiser.girao@checkmat.com"
    },
    {
      "name": "Karel",
      "lastName": "Pravec Silver Fox",
      "team": "Renzo Gracie Academy",
      "email": "karel.pravecsilverfox@renzogracieacademy.com"
    },
    {
      "name": "Kauane",
      "lastName": "Silva",
      "team": "Fight Sports",
      "email": "kauane.silva@fightsports.com"
    },
    {
      "name": "Kaynan",
      "lastName": "Duarte",
      "team": "Atos",
      "email": "kaynan.duarte@atos.com"
    },
    {
      "name": "Kendall",
      "lastName": "Reusing",
      "team": "Gracie Barra",
      "email": "kendall.reusing@graciebarra.com"
    },
    {
      "name": "Kennedy",
      "lastName": "Maciel Cobrinha Junior",
      "team": "Alliance",
      "email": "kennedy.macielcobrinha@alliance.com"
    },
    {
      "name": "Kenta",
      "lastName": "Iwamoto",
      "team": "",
      "email": "kenta.iwamoto@unknown.com"
    },
    {
      "name": "Keven",
      "lastName": "Carrasco",
      "team": "Ares",
      "email": "keven.carrasco@ares.com"
    },
    {
      "name": "Kevin",
      "lastName": "Gabriel Alencar",
      "team": "Dream Art",
      "email": "kevin.gabrielalencar@dreamart.com"
    },
    {
      "name": "Kevin",
      "lastName": "Mahecha",
      "team": "ATT",
      "email": "kevin.mahecha@att.com"
    },
    {
      "name": "Khaled",
      "lastName": "Alshehi",
      "team": "",
      "email": "khaled.alshehi@unknown.com"
    },
    {
      "name": "Kieran",
      "lastName": "Kichuk",
      "team": "Team Lloyd Irvin",
      "email": "kieran.kichuk@teamlloydirvin.com"
    },
    {
      "name": "Kit",
      "lastName": "Dale",
      "team": "",
      "email": "kit.dale@unknown.com"
    },
    {
      "name": "Kira",
      "lastName": "Sung",
      "team": "Seorae JJ",
      "email": "kira.sung@seoraejj.com"
    },
    {
      "name": "Kjetil",
      "lastName": "Lydvo",
      "team": "Frontline",
      "email": "kjetil.lydvo@frontline.com"
    },
    {
      "name": "Kody",
      "lastName": "Steele",
      "team": "Checkmat",
      "email": "kody.steele@checkmat.com"
    },
    {
      "name": "Koji",
      "lastName": "Shibamoto",
      "team": "Tri Force",
      "email": "koji.shibamoto@triforce.com"
    },
    {
      "name": "Kyra",
      "lastName": "Gracie",
      "team": "Gracie Barra",
      "email": "kyra.gracie@unknown.com"
    },
    {
      "name": "Kristen",
      "lastName": "Martin",
      "team": "Brazil 021",
      "email": "kristen.martin@brazil021.com"
    },
    {
      "name": "Kristin",
      "lastName": "Mikkelson",
      "team": "Brazil 021",
      "email": "kristin.mikkelson@brazil021.com"
    },
    {
      "name": "Kron",
      "lastName": "Gracie",
      "team": "Rickson Gracie Academy",
      "email": "kron.gracie@unknown.com"
    },
    {
      "name": "Kristof",
      "lastName": "Szucs",
      "team": "Gracie Barra",
      "email": "kristof.szucs@graciebarra.com"
    },
    {
      "name": "Kayron",
      "lastName": "Gracie",
      "team": "Gracie Barra",
      "email": "kayron.gracie@graciebarra.com"
    },
    {
      "name": "Kurt",
      "lastName": "Osiander",
      "team": "Ralph Gracie",
      "email": "kurt.osiander@ralphgracie.com"
    },
    {
      "name": "Kyle",
      "lastName": "Boehm",
      "team": "10th Planet",
      "email": "kyle.boehm@10thplanet.com"
    },
    {
      "name": "Kleber",
      "lastName": "Oliveira Buiu",
      "team": "Gracie Barra",
      "email": "kleber.oliveirabuiu@graciebarra.com"
    },
    {
      "name": "Lachlan",
      "lastName": "Giles",
      "team": "Absolute MMA",
      "email": "lachlan.giles@absolutemma.com"
    },
    {
      "name": "Larissa",
      "lastName": "Campos",
      "team": "Gracie Humaita",
      "email": "larissa.campos@graciehumaita.com"
    },
    {
      "name": "Larissa",
      "lastName": "Dias",
      "team": "",
      "email": "larissa.dias@unknown.com"
    },
    {
      "name": "Larissa",
      "lastName": "Paes",
      "team": "Gordo JJ",
      "email": "larissa.paes@gordojj.com"
    },
    {
      "name": "Laercio",
      "lastName": "Fernandes",
      "team": "Team Oyama",
      "email": "laercio.fernandes@teamoyama.com"
    },
    {
      "name": "Laura",
      "lastName": "Barker",
      "team": "Gracie Barra",
      "email": "laura.barker@graciebarra.com"
    },
    {
      "name": "Laurence",
      "lastName": "Cousin Fouillat",
      "team": "",
      "email": "laurence.cousinfouillat@unknown.com"
    },
    {
      "name": "Leandro",
      "lastName": "Escobar Tatu",
      "team": "",
      "email": "leandro.escobartatu@unknown.com"
    },
    {
      "name": "Leandro",
      "lastName": "Lima Rounaud",
      "team": "Fratres",
      "email": "leandro.limarounaud@fratres.com"
    },
    {
      "name": "Leandro",
      "lastName": "Lo",
      "team": "NS Brotherhood",
      "email": "leandro.lo@nsbrotherhood.com"
    },
    {
      "name": "Leandro",
      "lastName": "Lora",
      "team": "Brazil 021",
      "email": "leandro.lora@brazil021.com"
    },
    {
      "name": "Leandro",
      "lastName": "Martins Leu",
      "team": "Checkmat",
      "email": "leandro.martinsleu@checkmat.com"
    },
    {
      "name": "Leandro",
      "lastName": "Nyza",
      "team": "Nova Uniao",
      "email": "leandro.nyza@novauniao.com"
    },
    {
      "name": "Leon",
      "lastName": "Brito",
      "team": "BTT",
      "email": "leon.brito@btt.com"
    },
    {
      "name": "Leon",
      "lastName": "Larman",
      "team": "CTA",
      "email": "leon.larman@cta.com"
    },
    {
      "name": "Levi",
      "lastName": "Jones-Leary",
      "team": "Unity JJ",
      "email": "levi.jonesleary@unityjj.com"
    },
    {
      "name": "Livia",
      "lastName": "Gluchowska",
      "team": "Maromba",
      "email": "livia.gluchowska@maromba.com"
    },
    {
      "name": "Livio",
      "lastName": "Ribeiro Galinho",
      "team": "Ares JJ",
      "email": "livio.ribeirogalinho@aresjj.com"
    },
    {
      "name": "Luca",
      "lastName": "Anacoreta",
      "team": "Aeterna Jiu Jitsu",
      "email": "luca.anacoreta@aeternajiujitsu.com"
    },
    {
      "name": "Laurah",
      "lastName": "Hallock",
      "team": "GF Team",
      "email": "laurah.hallock@gfteam.com"
    },
    {
      "name": "Leonardo",
      "lastName": "Arruda",
      "team": "Guigo JJ",
      "email": "leonardo.arruda@guigojj.com"
    },
    {
      "name": "Leonardo",
      "lastName": "Castello Branco",
      "team": "Brasa",
      "email": "leonardo.castellobranco@brasa.com"
    },
    {
      "name": "Leonardo",
      "lastName": "Davila",
      "team": "Atos",
      "email": "leonardo.davila@atos.com"
    },
    {
      "name": "Leonardo",
      "lastName": "Lara",
      "team": "Almeida JJ / Atos",
      "email": "leonardo.lara@almeidajj.com"
    },
    {
      "name": "Leonardo",
      "lastName": "Leite",
      "team": "Alliance",
      "email": "leonardo.leite@alliance.com"
    },
    {
      "name": "Leonardo",
      "lastName": "Nogueira",
      "team": "Alliance",
      "email": "leonardo.nogueira@alliance.com"
    },
    {
      "name": "Leonardo",
      "lastName": "Mario",
      "team": "PSLPB Cicero Costha",
      "email": "leonardo.mario@pslpb.com"
    },
    {
      "name": "Leonardo",
      "lastName": "Pecanha",
      "team": "",
      "email": "leonardo.pecanha@unknown.com"
    },
    {
      "name": "Leonardo",
      "lastName": "Saggioro Cascao",
      "team": "BTT",
      "email": "leonardo.saggiorocascao@btt.com"
    },
    {
      "name": "Leonardo",
      "lastName": "Santos",
      "team": "Nova Uniao",
      "email": "leonardo.santos@novauniao.com"
    },
    {
      "name": "Leonardo",
      "lastName": "Silva",
      "team": "GF Team",
      "email": "leonardo.silva@gfteam.com"
    },
    {
      "name": "Leonardo",
      "lastName": "Vieira Leozinho",
      "team": "Checkmat",
      "email": "leonardo.vieiraleozinho@checkmat.com"
    },
    {
      "name": "Leticia",
      "lastName": "Ribeiro",
      "team": "Gracie Humaita",
      "email": "leticia.ribeiro@graciehumaita.com"
    },
    {
      "name": "Lloyd",
      "lastName": "Irvin",
      "team": "Lloyd Irvin",
      "email": "lloyd.irvin@lloydirvin.com"
    },
    {
      "name": "Luana",
      "lastName": "Alzuguir",
      "team": "Alliance",
      "email": "luana.alzuguir@alliance.com"
    },
    {
      "name": "Luan",
      "lastName": "Andrei",
      "team": "R1ng",
      "email": "luan.andrei@r1ng.com"
    },
    {
      "name": "Luan",
      "lastName": "Azevedo",
      "team": "PSLPB",
      "email": "luan.azevedo@pslpb.com"
    },
    {
      "name": "Luan",
      "lastName": "Carvalho",
      "team": "Nova Uniao",
      "email": "luan.carvalho@novauniao.com"
    },
    {
      "name": "Louie",
      "lastName": "Cercedez",
      "team": "Ronin BJJ",
      "email": "louie.cercedez@roninbjj.com"
    },
    {
      "name": "Lucas",
      "lastName": "Alves",
      "team": "Alliance",
      "email": "lucas.alves@alliance.com"
    },
    {
      "name": "Lucas",
      "lastName": "Gualberto Simba",
      "team": "Dream Art / Alliance",
      "email": "lucas.gualbertosimba@dreamart.com"
    },
    {
      "name": "Lucas",
      "lastName": "Lepri",
      "team": "Alliance",
      "email": "lucas.lepri@alliance.com"
    },
    {
      "name": "Luccas",
      "lastName": "Lira",
      "team": "",
      "email": "luccas.lira@unknown.com"
    },
    {
      "name": "Lucas",
      "lastName": "Leite",
      "team": "Checkmat",
      "email": "lucas.leite@checkmat.com"
    },
    {
      "name": "Lucas",
      "lastName": "Lisboa",
      "team": "Fight Sports",
      "email": "lucas.lisboa@fightsports.com"
    },
    {
      "name": "Lucas",
      "lastName": "Rocha",
      "team": "ZR Team",
      "email": "lucas.rocha@zrteam.com"
    },
    {
      "name": "Lucas",
      "lastName": "Daniel Barbosa Hulk",
      "team": "Atos",
      "email": "lucas.danielbarbosahulk@atos.com"
    },
    {
      "name": "Lucas",
      "lastName": "Pinheiro Bad Boy",
      "team": "Checkmat",
      "email": "lucas.pinheirobadboy@checkmat.com"
    },
    {
      "name": "Lucas",
      "lastName": "Protasio",
      "team": "Checkmat",
      "email": "lucas.protasio@checkmat.com"
    },
    {
      "name": "Lucas",
      "lastName": "Rodrigues",
      "team": "",
      "email": "lucas.rodrigues@unknown.com"
    },
    {
      "name": "Lucas",
      "lastName": "Norat",
      "team": "Gracie Barra",
      "email": "lucas.norat@graciebarra.com"
    },
    {
      "name": "Lucas",
      "lastName": "Valente",
      "team": "Gracie Barra",
      "email": "lucas.valente@graciebarra.com"
    },
    {
      "name": "Lucas",
      "lastName": "Sachs",
      "team": "",
      "email": "lucas.sachs@unknown.com"
    },
    {
      "name": "Lucas",
      "lastName": "Souza Foguinho",
      "team": "Atos",
      "email": "lucas.souzafoguinho@atos.com"
    },
    {
      "name": "Lucas",
      "lastName": "Silva Lukete",
      "team": "Cassao Team / Gracie Barra",
      "email": "lucas.silvalukete@cassaoteam.com"
    },
    {
      "name": "Luciano",
      "lastName": "Nucci Casquinha",
      "team": "Alliance",
      "email": "luciano.nuccicasquinha@alliance.com"
    },
    {
      "name": "Lucio",
      "lastName": "Rodrigues Lagarto",
      "team": "Gracie Barra",
      "email": "lucio.rodrigueslagarto@graciebarra.com"
    },
    {
      "name": "Luis Carlos",
      "lastName": "Dias Manimal",
      "team": "Manimal",
      "email": "luiscarlos.diasmanimal@manimal.com"
    },
    {
      "name": "Luis",
      "lastName": "Heredia Limao",
      "team": "Maui Jiu Jitsu",
      "email": "luis.heredia@mauijiujitsu.com"
    },
    {
      "name": "Luis",
      "lastName": "Lima Guga",
      "team": "",
      "email": "luis.limaguga@unknown.com"
    },
    {
      "name": "Luis Roberto",
      "lastName": "Duarte Bebeo",
      "team": "Brazilian Top Team",
      "email": "luisroberto.duartebebeo@braziliantopteam.com"
    },
    {
      "name": "Luis",
      "lastName": "Marques",
      "team": "",
      "email": "luis.marques@unknown.com"
    },
    {
      "name": "Luis",
      "lastName": "Oliveira Cantareira",
      "team": "Frates JJ",
      "email": "luis.oliveiracantareira@fratesjj.com"
    },
    {
      "name": "Luis",
      "lastName": "Roman",
      "team": "",
      "email": "luis.roman@unknown.com"
    },
    {
      "name": "Luiz",
      "lastName": "Dias",
      "team": "GAS",
      "email": "luiz.dias@gas.com"
    },
    {
      "name": "Luiz",
      "lastName": "Franca",
      "team": "",
      "email": "luiz.franca@unknown.com"
    },
    {
      "name": "Luiz Guilherme",
      "lastName": "Guigo",
      "team": "Guigo JJ",
      "email": "luizguilherme.guigo@guigojj.com"
    },
    {
      "name": "Luiz Abdo",
      "lastName": "Tom",
      "team": "",
      "email": "luizabdo.tom@unknown.com"
    },
    {
      "name": "Luiz",
      "lastName": "Ribeiro Manxinha",
      "team": "Checkmat",
      "email": "luiz.ribeiromanxinha@checkmat.com"
    },
    {
      "name": "Luiz",
      "lastName": "Panza",
      "team": "Barbosa JJ",
      "email": "luiz.panza@barbosajj.com"
    },
    {
      "name": "Luiz",
      "lastName": "Paulo",
      "team": "Dream Art",
      "email": "luiz.paulo@dreamart.com"
    },
    {
      "name": "Luiza",
      "lastName": "Monteiro",
      "team": "Atos",
      "email": "luiza.monteiro@atos.com"
    },
    {
      "name": "Luzia",
      "lastName": "Fernandes",
      "team": "Gracie Barra",
      "email": "luzia.fernandes@graciebarra.com"
    },
    {
      "name": "Luke",
      "lastName": "Griffith",
      "team": "New Wave",
      "email": "luke.griffith@newwave.com"
    },
    {
      "name": "Mackenzie",
      "lastName": "Dern",
      "team": "Gracie Humaita",
      "email": "mackenzie.dern@graciehumaita.com"
    },
    {
      "name": "Maggie",
      "lastName": "Grindatti",
      "team": "Fight Sports",
      "email": "maggie.grindatti@fightsports.com"
    },
    {
      "name": "Malachi",
      "lastName": "Edmond",
      "team": "Team Lloyd Irvin",
      "email": "malachi.edmond@lloydirvin.com"
    },
    {
      "name": "Manuel",
      "lastName": "Pontes Nelton",
      "team": "Gracie Barra",
      "email": "manuel.pontesnelton@graciebarra.com"
    },
    {
      "name": "Mateus",
      "lastName": "Rodrigues",
      "team": "AOJ",
      "email": "mateus.rodrigues@aoj.com"
    },
    {
      "name": "Matheus",
      "lastName": "Costa",
      "team": "GF Team",
      "email": "matheus.costa@gfteam.com"
    },
    {
      "name": "Matheus",
      "lastName": "Diniz Gorilla",
      "team": "Alliance",
      "email": "matheus.dinizgorilla@alliance.com"
    },
    {
      "name": "Matheus",
      "lastName": "Felipe",
      "team": "Checkmat",
      "email": "matheus.felipe@checkmat.com"
    },
    {
      "name": "Matheus",
      "lastName": "Gabriel Barros",
      "team": "Checkmat",
      "email": "matheus.gabrielbarros@checkmat.com"
    },
    {
      "name": "Matheus",
      "lastName": "Godoy",
      "team": "Alliance",
      "email": "matheus.godoy@alliance.com"
    },
    {
      "name": "Matheus",
      "lastName": "Gonzaga",
      "team": "",
      "email": "matheus.gonzaga@unknown.com"
    },
    {
      "name": "Matheus",
      "lastName": "Spirandeli",
      "team": "",
      "email": "matheus.spirandeli@unknown.com"
    },
    {
      "name": "Matheus",
      "lastName": "Lima",
      "team": "White House JJS",
      "email": "matheus.lima@whitehousejjs.com"
    },
    {
      "name": "Matheus",
      "lastName": "Luna",
      "team": "Checkmat",
      "email": "matheus.luna@checkmat.com"
    },
    {
      "name": "Matheus",
      "lastName": "Lutes",
      "team": "Alliance",
      "email": "matheus.lutes@alliance.com"
    },
    {
      "name": "Matheus",
      "lastName": "Menezes",
      "team": "Atos",
      "email": "matheus.menezes@atos.com"
    },
    {
      "name": "Matias",
      "lastName": "Estevez",
      "team": "Nova Uniao",
      "email": "matias.estevez@novauniao.com"
    },
    {
      "name": "Matthew",
      "lastName": "Leighton",
      "team": "Bonsai",
      "email": "matthew.leighton@bonsai.com"
    },
    {
      "name": "Marc",
      "lastName": "Laimon",
      "team": "Cobra Kai",
      "email": "marc.laimon@cobrakai.com"
    },
    {
      "name": "Marcel",
      "lastName": "Louzado",
      "team": "",
      "email": "marcel.louzado@example.com"
    },
    {
      "name": "Marcelino",
      "lastName": "Freitas",
      "team": "Nova Uniao",
      "email": "marcelino.freitas@novauniao.com"
    },
    {
      "name": "Marcelo",
      "lastName": "Azevedo",
      "team": "Gracie Barra",
      "email": "marcelo.azevedo@graciebarra.com"
    },
    {
      "name": "Marcelo",
      "lastName": "Behring",
      "team": "",
      "email": "marcelo.behring@example.com"
    },
    {
      "name": "Marcelo",
      "lastName": "Cohen",
      "team": "The Armoury",
      "email": "marcelo.cohen@thearmoury.com"
    },
    {
      "name": "Marcelo",
      "lastName": "Fausto",
      "team": "Checkmat",
      "email": "marcelo.fausto@checkmat.com"
    },
    {
      "name": "Marcelo",
      "lastName": "Garcia",
      "team": "Alliance",
      "email": "marcelo.garcia@alliance.com"
    },
    {
      "name": "Marcelo",
      "lastName": "Gomide",
      "team": "Gracie Barra",
      "email": "marcelo.gomide@graciebarra.com"
    },
    {
      "name": "Marcelo",
      "lastName": "Nunes",
      "team": "Zenith JJ",
      "email": "marcelo.nunes@zenithjj.com"
    },
    {
      "name": "Marcelo",
      "lastName": "Machado",
      "team": "Gracie Humaita",
      "email": "marcelo.machado@graciehumaita.com"
    },
    {
      "name": "Marcelo",
      "lastName": "Mafra",
      "team": "Checkmat",
      "email": "marcelo.mafra@checkmat.com"
    },
    {
      "name": "Marcelo",
      "lastName": "Martins",
      "team": "Checkmat",
      "email": "marcelo.martins@checkmat.com"
    },
    {
      "name": "Marcelo",
      "lastName": "Ribeiro",
      "team": "Gracie Barra",
      "email": "marcelo.ribeiro@graciebarra.com"
    },
    {
      "name": "Marcelo",
      "lastName": "Pereira",
      "team": "",
      "email": "marcelo.pereira@example.com"
    },
    {
      "name": "Marcelo",
      "lastName": "Salazar",
      "team": "",
      "email": "marcelo.salazar@example.com"
    },
    {
      "name": "Marcelo",
      "lastName": "Saporito",
      "team": "Carlson Gracie",
      "email": "marcelo.saporito@carlsongracie.com"
    },
    {
      "name": "Marcio Andre",
      "lastName": "Barbosa Junior",
      "team": "Nova Uniao",
      "email": "marcioandre.barbosajunior@novauniao.com"
    },
    {
      "name": "Marcio",
      "lastName": "Cruz",
      "team": "",
      "email": "marcio.cruz@example.com"
    },
    {
      "name": "Marcio",
      "lastName": "Corleta",
      "team": "Winner BJJ",
      "email": "marcio.corleta@winnerbjj.com"
    },
    {
      "name": "Marcio",
      "lastName": "dos Santos",
      "team": "Carlson Gracie",
      "email": "marcio.dossantos@carlsongracie.com"
    },
    {
      "name": "Marcio",
      "lastName": "Feitosa",
      "team": "Gracie Barra",
      "email": "marcio.feitosa@graciebarra.com"
    },
    {
      "name": "Marcio",
      "lastName": "Stambowsky",
      "team": "Macarrao",
      "email": "marcio.stambowsky@example.com"
    },
    {
      "name": "Marco",
      "lastName": "Barbosa",
      "team": "Barbosa",
      "email": "marco.barbosa@barbosa.com"
    },
    {
      "name": "Marco",
      "lastName": "Canha",
      "team": "Checkmat",
      "email": "marco.canha@checkmat.com"
    },
    {
      "name": "Marco",
      "lastName": "Vilella",
      "team": "Gigante",
      "email": "marco.vilella@example.com"
    },
    {
      "name": "Marcos",
      "lastName": "Barreto",
      "team": "",
      "email": "marcos.barreto@example.com"
    },
    {
      "name": "Marcos",
      "lastName": "da Matta",
      "team": "American Top Team",
      "email": "marcos.damatta@americantopteam.com"
    },
    {
      "name": "Marcos",
      "lastName": "Escobar",
      "team": "",
      "email": "marcos.escobar@example.com"
    },
    {
      "name": "Marcos",
      "lastName": "Cerqueira",
      "team": "",
      "email": "marcos.cerqueira@example.com"
    },
    {
      "name": "Marcos",
      "lastName": "de Souza",
      "team": "Bonsai",
      "email": "marcos.desouza@bonsai.com"
    },
    {
      "name": "Marcos",
      "lastName": "Galvao",
      "team": "Nova Uniao",
      "email": "marcos.galvao@novauniao.com"
    },
    {
      "name": "Marcos",
      "lastName": "Martins",
      "team": "B9",
      "email": "marcos.martins@b9.com"
    },
    {
      "name": "Marco",
      "lastName": "Mendes",
      "team": "Dream Art",
      "email": "marco.mendes@dreamart.com"
    },
    {
      "name": "Marcos",
      "lastName": "Santana",
      "team": "Ratinho",
      "email": "marcos.santana@example.com"
    },
    {
      "name": "Marcos",
      "lastName": "Oliveira",
      "team": "ADTT",
      "email": "marcos.oliveira@adtt.com"
    },
    {
      "name": "Marcos",
      "lastName": "Silva Tinoco",
      "team": "Alliance",
      "email": "marcos.silvatinoco@alliance.com"
    },
    {
      "name": "Marcos Paulo",
      "lastName": "Costa",
      "team": "DDR",
      "email": "marcos.paulo.costa@example.com"
    },
    {
      "name": "Marcos",
      "lastName": "Torregrosa",
      "team": "Yamaso",
      "email": "marcos.torregrosa@example.com"
    },
    {
      "name": "Marcus",
      "lastName": "Almeida",
      "team": "Checkmat",
      "email": "marcus.almeida@example.com"
    },
    {
      "name": "Marcus",
      "lastName": "Beddor",
      "team": "M-Theory",
      "email": "marcus.beddor@example.com"
    },
    {
      "name": "Marcus",
      "lastName": "Bello",
      "team": "GF Team",
      "email": "marcus.bello@example.com"
    },
    {
      "name": "Marcus",
      "lastName": "Norat",
      "team": "",
      "email": "marcus.norat@example.com"
    },
    {
      "name": "Marcus",
      "lastName": "Phelan",
      "team": "ECBJJA",
      "email": "marcus.phelan@example.com"
    },
    {
      "name": "Marcus Vinicius",
      "lastName": "Ribeiro",
      "team": "Alliance",
      "email": "marcus.vinicius.ribeiro@example.com"
    },
    {
      "name": "Mariana",
      "lastName": "Rolszt",
      "team": "",
      "email": "mariana.rolszt@example.com"
    },
    {
      "name": "Margot",
      "lastName": "Ciccarelli",
      "team": "Unity JJ",
      "email": "margot.ciccarelli@example.com"
    },
    {
      "name": "Maria",
      "lastName": "Eduarda Tozoni",
      "team": "The Match Champ",
      "email": "maria.tozoni@example.com"
    },
    {
      "name": "Maria",
      "lastName": "Luiza",
      "team": "Almeida JJ",
      "email": "maria.luiza@example.com"
    },
    {
      "name": "Maria",
      "lastName": "Malyjasiak",
      "team": "",
      "email": "maria.malyjasiak@example.com"
    },
    {
      "name": "Maria Carolina",
      "lastName": "Vicentini",
      "team": "Dream Art",
      "email": "maria.vicentini@example.com"
    },
    {
      "name": "Marina",
      "lastName": "Ribeiro",
      "team": "Checkmat",
      "email": "marina.ribeiro@example.com"
    },
    {
      "name": "Mario Claudio",
      "lastName": "Tallarico",
      "team": "",
      "email": "mario.tallarico@example.com"
    },
    {
      "name": "Mario",
      "lastName": "Reis",
      "team": "Alliance",
      "email": "mario.reis@example.com"
    },
    {
      "name": "Mario",
      "lastName": "Yokoyama",
      "team": "Ryan Gracie",
      "email": "mario.yokoyama@example.com"
    },
    {
      "name": "Mariusz",
      "lastName": "Linke",
      "team": "Macaco Gold Team",
      "email": "mariusz.linke@example.com"
    },
    {
      "name": "Mark",
      "lastName": "Ramos",
      "team": "",
      "email": "mark.ramos@example.com"
    },
    {
      "name": "Marlon",
      "lastName": "Sandro",
      "team": "Nova Uniao",
      "email": "marlon.sandro@example.com"
    },
    {
      "name": "Masahiro",
      "lastName": "Iwasaki",
      "team": "Carpe Diem",
      "email": "masahiro.iwasaki@example.com"
    },
    {
      "name": "Mason",
      "lastName": "Fowler",
      "team": "CTA",
      "email": "mason.fowler@example.com"
    },
    {
      "name": "Mathias",
      "lastName": "Luna",
      "team": "Checkmat",
      "email": "mathias.luna@example.com"
    },
    {
      "name": "Matt",
      "lastName": "Thornton",
      "team": "SBG",
      "email": "matt.thornton@example.com"
    },
    {
      "name": "Matt",
      "lastName": "Serra",
      "team": "Renzo Gracie",
      "email": "matt.serra@example.com"
    },
    {
      "name": "Mauricio",
      "lastName": "Antunes",
      "team": "Checkmat",
      "email": "mauricio.antunes@example.com"
    },
    {
      "name": "Mauricio",
      "lastName": "Gomes",
      "team": "",
      "email": "mauricio.gomes@example.com"
    },
    {
      "name": "Mauricio",
      "lastName": "Mariano",
      "team": "Tinguinha",
      "email": "mauricio.mariano@example.com"
    },
    {
      "name": "Mauricio",
      "lastName": "Oliveira Neto",
      "team": "GF Team",
      "email": "mauricio.oliveira@example.com"
    },
    {
      "name": "Mauro",
      "lastName": "Chueng",
      "team": "Rio Grappling Club",
      "email": "mauro.chueng@example.com"
    },
    {
      "name": "Mauro",
      "lastName": "Pacifico",
      "team": "Equipe Bushido",
      "email": "mauro.pacifico@example.com"
    },
    {
      "name": "Mayara",
      "lastName": "Custodio",
      "team": "Checkmat",
      "email": "mayara.custodio@example.com"
    },
    {
      "name": "Mayko",
      "lastName": "Araujo",
      "team": "Checkmat",
      "email": "mayko.araujo@example.com"
    },
    {
      "name": "Mayssa",
      "lastName": "Bastos",
      "team": "GF Team",
      "email": "mayssa.bastos@example.com"
    },
    {
      "name": "Max",
      "lastName": "Lindblad",
      "team": "Checkmat",
      "email": "max.lindblad@example.com"
    },
    {
      "name": "Maximiliano",
      "lastName": "Carvalho",
      "team": "ZR Team",
      "email": "maximiliano.carvalho@example.com"
    },
    {
      "name": "Maximiliano",
      "lastName": "Trombini",
      "team": "Cia Paulista",
      "email": "maximiliano.trombini@example.com"
    },
    {
      "name": "Melqui",
      "lastName": "Galvao",
      "team": "Escola Melqui Galvão",
      "email": "melqui.galvao@example.com"
    },
    {
      "name": "Melissa",
      "lastName": "Cueto",
      "team": "",
      "email": "melissa.cueto@example.com"
    },
    {
      "name": "Meyram",
      "lastName": "Maquine",
      "team": "Guigo JJ",
      "email": "meyram.maquine@example.com"
    },
    {
      "name": "Micael",
      "lastName": "Galvao",
      "team": "Escola Melqui Galvão",
      "email": "micael.galvao@example.com"
    },
    {
      "name": "Michael",
      "lastName": "Langhi",
      "team": "Alliance",
      "email": "michael.langhi@example.com"
    },
    {
      "name": "Michael",
      "lastName": "Perez",
      "team": "Atos",
      "email": "michael.perez@example.com"
    },
    {
      "name": "Michael",
      "lastName": "Trasso",
      "team": "Gracie Humaita",
      "email": "michael.trasso@example.com"
    },
    {
      "name": "Michael",
      "lastName": "Zenga",
      "team": "",
      "email": "michael.zenga@example.com"
    },
    {
      "name": "Michel",
      "lastName": "Langhi",
      "team": "Alliance",
      "email": "michel.langhi@example.com"
    },
    {
      "name": "Michelle",
      "lastName": "Nicolini",
      "team": "Checkmat",
      "email": "michelle.nicolini@example.com"
    },
    {
      "name": "Mike",
      "lastName": "Fowler",
      "team": "",
      "email": "mike.fowler@example.com"
    },
    {
      "name": "Milton",
      "lastName": "Bastos",
      "team": "Ares JJ",
      "email": "milton.bastos@example.com"
    },
    {
      "name": "Milton",
      "lastName": "Regis",
      "team": "Kioto",
      "email": "milton.regis@example.com"
    },
    {
      "name": "Mitsuyoshi",
      "lastName": "Hayakawa",
      "team": "Tri Force",
      "email": "mitsuyoshi.hayakawa@example.com"
    },
    {
      "name": "Moacir",
      "lastName": "Mendes Junior",
      "team": "Alliance",
      "email": "moacir.mendes@example.com"
    },
    {
      "name": "Moises",
      "lastName": "Murad",
      "team": "Lotus",
      "email": "moises.murad@example.com"
    },
    {
      "name": "Monica Vanessa",
      "lastName": "Silva",
      "team": "2 Brothers",
      "email": "monica.silva@example.com"
    },
    {
      "name": "Monique",
      "lastName": "Ricardo",
      "team": "Checkmat",
      "email": "monique.ricardo@example.com"
    },
    {
      "name": "Monir",
      "lastName": "Salomao",
      "team": "",
      "email": "monir.salomao@example.com"
    },
    {
      "name": "Morgan",
      "lastName": "Black",
      "team": "Tabula Rasa JJ",
      "email": "morgan.black@example.com"
    },
    {
      "name": "Murilo",
      "lastName": "Amaral",
      "team": "Alliance",
      "email": "murilo.amaral@example.com"
    },
    {
      "name": "Murilo",
      "lastName": "Bustamante",
      "team": "Brazilian Top Team",
      "email": "murilo.bustamante@example.com"
    },
    {
      "name": "Murilo",
      "lastName": "Santana",
      "team": "Unity",
      "email": "murilo.santana@example.com"
    },
    {
      "name": "Muzio",
      "lastName": "de Angelis",
      "team": "Brasa",
      "email": "muzio.deangelis@example.com"
    },
    {
      "name": "Nabil",
      "lastName": "Aziz",
      "team": "Nabil JJ",
      "email": "nabil.aziz@example.com"
    },
    {
      "name": "Natasha",
      "lastName": "Quiza",
      "team": "Fight Sports",
      "email": "natasha.quiza@example.com"
    },
    {
      "name": "Nathalie",
      "lastName": "Ribeiro",
      "team": "Checkmat",
      "email": "nathalie.ribeiro@example.com"
    },
    {
      "name": "Nathan",
      "lastName": "Caroll",
      "team": "Valor Martial Arts",
      "email": "nathan.caroll@example.com"
    },
    {
      "name": "Nathan",
      "lastName": "Mendelsohn",
      "team": "",
      "email": "nathan.mendelsohn@example.com"
    },
    {
      "name": "Nathannael",
      "lastName": "Fernandes",
      "team": "Escola Melqui Galvão",
      "email": "nathannael.fernandes@example.com"
    },
    {
      "name": "Nahum",
      "lastName": "Rabay",
      "team": "",
      "email": "nahum.rabay@example.com"
    },
    {
      "name": "Nelson",
      "lastName": "Monteiro",
      "team": "",
      "email": "nelson.monteiro@example.com"
    },
    {
      "name": "Nicholas",
      "lastName": "Calvanese",
      "team": "TAC Team / BJJ United",
      "email": "nicholas.calvanese@example.com"
    },
    {
      "name": "Nicholas",
      "lastName": "Meregali",
      "team": "New Wave",
      "email": "nicholas.meregali@example.com"
    },
    {
      "name": "Nicholas",
      "lastName": "Maglicic",
      "team": "Atos",
      "email": "nicholas.maglicic@example.com"
    },
    {
      "name": "Nicolas",
      "lastName": "Gregoriades",
      "team": "JJ Brotherhood",
      "email": "nicolas.gregoriades@example.com"
    },
    {
      "name": "Nicole",
      "lastName": "Sullivan",
      "team": "Atos",
      "email": "nicole.sullivan@example.com"
    },
    {
      "name": "Nick",
      "lastName": "Rodriguez",
      "team": "Nicky Rod",
      "email": "nick.rodriguez@example.com"
    },
    {
      "name": "Nick",
      "lastName": "Salles",
      "team": "Movement Art",
      "email": "nick.salles@example.com"
    },
    {
      "name": "Nick",
      "lastName": "Schrock",
      "team": "Gracie Humaita",
      "email": "nick.schrock@example.com"
    },
    {
      "name": "Nicky",
      "lastName": "Ryan",
      "team": "Renzo Gracie Academy",
      "email": "nicky.ryan@example.com"
    },
    {
      "name": "Nikki",
      "lastName": "Lloyd-Griffiths",
      "team": "Immersion MMA",
      "email": "nikki.lloyd@example.com"
    },
    {
      "name": "Nisar",
      "lastName": "Loynab",
      "team": "Atos",
      "email": "nisar.loynab@example.com"
    },
    {
      "name": "Nivaldo",
      "lastName": "Oliveira",
      "team": "Checkmat",
      "email": "nivaldo.oliveira@example.com"
    },
    {
      "name": "Nivia",
      "lastName": "Moura",
      "team": "Gracie Gym",
      "email": "nivia.moura@example.com"
    },
    {
      "name": "Nobuhiro",
      "lastName": "Sawada",
      "team": "Tri-Force",
      "email": "nobuhiro.sawada@example.com"
    },
    {
      "name": "Nolan",
      "lastName": "Stuart",
      "team": "Brea JJ",
      "email": "nolan.stuart@example.com"
    },
    {
      "name": "Nuno",
      "lastName": "Martins",
      "team": "",
      "email": "nuno.martins@example.com"
    },
    {
      "name": "Nyjah",
      "lastName": "Rollins",
      "team": "Team Lloyd Irvin",
      "email": "nyjah.rollins@example.com"
    },
    {
      "name": "Octavio",
      "lastName": "Couto",
      "team": "Brasa",
      "email": "octavio.couto@example.com"
    },
    {
      "name": "Octavio",
      "lastName": "de Almeida",
      "team": "Academia Octávio de Almeida",
      "email": "octavio.almeida@example.com"
    },
    {
      "name": "Olavo",
      "lastName": "Abreu",
      "team": "PTT",
      "email": "olavo.abreu@example.com"
    },
    {
      "name": "Oliver",
      "lastName": "Geddes",
      "team": "Roger Gracie",
      "email": "oliver.geddes@example.com"
    },
    {
      "name": "Oliver",
      "lastName": "Taza",
      "team": "New Wave",
      "email": "oliver.taza@example.com"
    },
    {
      "name": "Omar",
      "lastName": "Salum",
      "team": "Gracie Humaita",
      "email": "omar.salum@example.com"
    }
  ],

  users: [
    {
      name: 'Camilo Pacheco',
      email: 'cpacheco.arg@gmail.com',
      password: bcrypt.hashSync('Abcd0987', 10),
      phone: '5493513741024',
      image: 'https://i.imgur.com/WIG66Ct.png',
      roles: ['admin']
    },
    {
      name: 'Olegario Ortega',
      email: 'olega@gmail.com',
      password: bcrypt.hashSync('Abcd0987', 10),
      phone: '5492887542014',
      image: 'https://i.imgur.com/B7AQyzo.png',
      roles: ['super-user']
    },
    {
      name: 'Justo Del Toro',
      email: 'deltoro@gmail.com',
      password: bcrypt.hashSync('Abcd0987', 10),
      phone: '5493887357229',
      image: 'https://i.imgur.com/9Ph8ISm.jpg',
      roles: ['user']
    },
  ]


}