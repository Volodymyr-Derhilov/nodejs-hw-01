import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const data = await readContacts();
  if (data.length) {
    data.pop();
    await writeContacts(data);
  }
  return;
};

removeLastContact();
