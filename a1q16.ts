// Original guest list
const guestList: string[] = ["Shahzaib Haider", "Shahroz Ahmed", "Ali Imran"];

// Display the original guest list
console.log("Original Guest List:");
for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(guest);
}

// Assume one guest can't make it, so replace them
const guestToReplace = "Shahroz Ahmed";
const replacementGuest = "Tayyab Islam";
// Find and print the guest who can't make it
const indexOfGuestToReplace = guestList.indexOf(guestToReplace);
if (indexOfGuestToReplace !== -1) {
  console.log(
    `\nUnfortunately, ${guestToReplace} can't make it to the dinner.`
  );
}
// Replace the guest and print the updated guest list
guestList[indexOfGuestToReplace] = replacementGuest;

// Send out new invitations

// Inform about the bigger dinner table
console.log("\nGood news! We found a bigger dinner table.");

// Add new guests to the list
guestList.unshift("Shuja Sohail"); // Add to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, "M. Abdullah"); // Add to the middle
guestList.push("Jawad Maqsood"); // Add to the end

// Print a new set of invitation messages
console.log("\nUpdated Guest List:");
for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(guest);
}
console.log("\n\n\n");
for (let i = 0; i < guestList.length; i++) {
  const guest = guestList[i];
  console.log(
    `Dear ${guest},\n\nYou are invited to join me for dinner. It would be an honor to have your company.\n\nSincerely,\nShah Zaib Ali\n`
  );
}

export {};
