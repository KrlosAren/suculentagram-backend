const faker = require('faker');
const fs = require('fs');
const path = require('path');
const md5 = require('md5');

function createParagraph() {
  const randomParagraphNumber = Math.floor(Math.random() * (30 - 1) + 5);
  const paragraphs = [];
  for (let i = 0; i < randomParagraphNumber; i++) {
    paragraphs.push(
      faker.lorem.paragraphs(),
    );
  }
  return paragraphs;
}

function createPost(limit) {
  const posts = [];

  for (let i = 0; i < limit; i++) {
    posts.push({
      id: faker.random.uuid(),
      date: faker.date.recent(),
      title: faker.lorem.sentence(),
      post: createParagraph(),
    });
  }
  return posts;
}

function createUser(limit = 50) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const randomPostNumber = Math.floor(Math.random() * (30 - 1) + 1);
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();

    result.push({
      id: faker.random.uuid(),
      firstName,
      lastName,
      email,
      password: md5(password),
      twitter: `${faker.internet.userName()}`,
      avatar: `https://www.gravatar.com/avatar/${md5(email)}?d=identicon`,
      posts: createPost(randomPostNumber),
    });
  }
  return result;
}

function main() {
  const data = {
    users: createUser(),
  };

  fs.writeFile(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4),
    () => {
      console.log('Archivo Creado');
    },
  );
}

main();
