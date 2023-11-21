// Define a guest list
const guestList: string[] = ["Shahzaib Haider", "Shahroz Ahmed", "Ali Imran"];

// Use a for loop to print invitation messages
for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(
    `Dear ${guest},\n\nYou are invited to join me for dinner. It would be an honor to have your company.\n\nSincerely,\nShah Zaib Ali\n`
  );
}
export {};
