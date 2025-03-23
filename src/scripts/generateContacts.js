import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const data = Array(number)
    .fill(0)
    .map((item) => createFakeContact());
  const tempContacts = await readContacts();
  await writeContacts([...tempContacts, ...data]);
};

generateContacts(5);
