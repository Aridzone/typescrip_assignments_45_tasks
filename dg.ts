let guestList: string[] = [
  "Abama",
  "Afaq",
  "Noman"
];

console.log(`You are inviting ${guestList.length} people to dinner.`);

for (let i = 0; i < guestList.length; i++) {
  console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. Please join us for a wonderful evening!`);
}