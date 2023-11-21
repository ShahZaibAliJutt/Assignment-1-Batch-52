"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Original guest list
const guestList = ["Shahzaib Haider", "Shahroz Ahmed", "Ali Imran"];
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
    console.log(`\nUnfortunately, ${guestToReplace} can't make it to the dinner.`);
    // Replace the guest and print the updated guest list
    guestList[indexOfGuestToReplace] = replacementGuest;
    console.log("\nUpdated Guest List:");
    for (let i = 0; i < guestList.length; i++) {
        const guest = guestList[i];
        console.log(guest);
    }
    // Send out new invitations
    console.log("\nInvitations Sent:");
    for (let i = 0; i < guestList.length; i++) {
        const guest = guestList[i];
        console.log(`Dear ${guest},\n\nYou are invited to join me for dinner. It would be an honor to have your company.\n\nSincerely,\nShah Zaib Ali\n`);
    }
}
else {
    console.log(`\n${guestToReplace} is not found in the original guest list.`);
}
