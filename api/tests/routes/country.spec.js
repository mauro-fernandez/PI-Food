/* eslint-disable import/no-extraneous-dependencies */
/*
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Recipe, conn } = require('../../src/db.js');

const agent = session(app);
const recipe = {
    
    title: "Pollo a la portuguesa",
    summary: "Cocina el pollo, con morron y cebolla",
    spoonacularScore: 98,
    healthScore: 88,
    instructions: "Saltear el morron y la cebolla en la sarten con aceite. Agregar el pollo trozado, y colocar vino blanco. Tapar y dejar a fuego bajo por 20 minutos",
    image: "https://www.rionegro.com.ar/wp-content/uploads/2020/07/106277636_361351514842964_2034310717676668568_n.jpg",
    diets: ["81fe939f-6e28-40ab-a695-b23f6de8c31c"], // este es un UUID que representa una dieta, al estar el force true, cambia de valor siempre
};

describe('Recipe routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Recipe.sync({ force: true })
    .then(() => Recipe.create(recipe)));
  describe('GET /recipes', () => {
    it('should get 200', () =>
      agent.get('/recipes').expect(200)
    );
  });
});

describe("Obtiene una receta por name", () => {  
  describe("GET /recipes?name=xxxxx", () => {
    it("Si se recibe name devuelve una respuesta 200", () =>
      agent.get("/recipes?name=garlic").expect(200));
  });

  describe('/types', function() {
    it('GET respond with a status 200 if you find types of DIETS', () =>
      agent.get('/types').expect(200)); 
    });
  })
*/