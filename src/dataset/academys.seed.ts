import {v4 as uuid} from "uuid"
import { Academy } from "src/entities/academy.entity";

export const ACADEMYS_SEED: Academy[] = [
    {
        id: uuid(),
        name: 'Renzo Gracie Academy',
        location: 'New York, New York',
        professor: 'Renzo Gracie',
    },
    {
        id: uuid(),
        name: 'Marcelo Garcia Jiu Jitsu',
        location: 'New York City, United States',
        professor: 'Marcelo Garcia'
    },
    {
        id: uuid(),
        name: 'Atos Jiu Jitsu HQ',
        location: 'San Diego, California',
        professor: 'Andre Galvao'
    },
    {
        id: uuid(),
        name: 'Gracie Barra TX',
        location: 'Houston, Texas',
        professor: "Vinicius 'Draculino' Magalhães"
    },
    {
        id: uuid(),
        name: 'GFTeam',
        location: 'Rio de Janeiro, Brazil',
        professor: 'Roberto Martinez'
    },
    {
        id: uuid(),
        name: 'Roger Gracie Academy',
        location: 'London, England',
        professor: 'Roger Gracie'
    },
    {
        id: uuid(),
        name: 'Tristar Gym',
        location: 'Montreal, Quebec (Canada)',
        professor: 'Firas Zahabi'
    },
    {
        id: uuid(),
        name: 'Six Blades BJJ',
        location: 'Austin, TX',
        professor: 'Xande Ribeiro'
    },
    {
        id: uuid(),
        name: 'Checkmat BJJ HQ',
        location: 'Long Beach, CA',
        professor: 'Leo Vieira'
    },
    {
        id: uuid(),
        name: 'Carlson Gracie Budapest',
        location: 'Budapest, Hungary',
        professor: 'Mihaly Sztraka'
    },
    {
        id: uuid(),
        name: '10th Planet Jiu-Jitsu',
        location: 'Los Angeles, California',
        professor: 'Eddie Bravo'
    },
    {
        id: uuid(),
        name: 'Jiu Jitsu Alliance',
        location: 'United States, Brasil, many others',
        professor: 'Fabio Gurgel', 
    },
    {
        id: uuid(),
        name: 'Nova União',
        location: 'Brasil, United States, many others',
        professor: 'André Pederneiras'
    },
    {
        id: uuid(),
        name: 'Dream Art',
        location: 'São Paulo, Brasil',
        professor: 'Isaque Bahiense'
    },
    {
        id: uuid(),
        name: 'Cicero Costha International',
        location: 'São Paulo, Brasil',
        professor: 'Cicero Costha'
    },
    {
        id: uuid(),
        name: 'LEAD BJJ',
        location: 'Brasil',
        professor: 'Bruno Bastos'
    }
];
