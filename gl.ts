let guestList: string[] = ["Abama", "Afaq", "Noman"]; 


for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please join us for a wonderful evening!`);
}

console.log(`${guestList[1]} cannot make it to the dinner.`); 


guestList[1] = "Ali"; 

console.log("Good news! We found a bigger dinner table!");

guestList.unshift("Linda"); 
guestList.splice(2, 0, "Iqra");
guestList.push("Jimmy"); 

for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please join us for a wonderful evening!`);
}

  "Linda",
  "Abama",
  "Jimmy",
  "Ali",
  "Noman",
  "Jimmy"

console.log("Due to unforeseen circumstances, we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestList.length > 2) {
  let removedGuest: string = guestList.pop()!; // Remove the last guest from the list
  console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
}

// Print invitation message to each of the two remaining guests
for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are still invited to dinner. We look forward to seeing you!`);
}

guestList.length = 0; // Remove the last two names from the list

console.log("Empty guest list:", guestList); // Print the empty guest list