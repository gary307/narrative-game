export const textFields = [
  {
    name: "introText",
    content:
      "You are in a dark house, unsure how you got here, last you remember is passing out at work. You notice you are in a hallway, its dark but some moon light is coming through the window.",
    options: [
      { copy: "Walk down the hallway", action: "walkDownTheHallway" },
      { copy: "Inspect the hallway", action: "inspectTheHallway" },
    ],
  },
  {
    name: "walkDownTheHallway",
    content:
      "As you walk down the hallway slowly, you notice a door on your left ajar",
    options: [
      {
        copy: "walk past",
        action: "walkPast",
      },
      {
        copy: "inspect door to the left",
        action: "inspectDoorToTheLeft",
      },
    ],
  },
  {
    name: "inspectTheHallway",
    content:
      "You see a door to the left side of the hallway, ajar. Also a door at the bottom of the hallway, its too dark to see anything else",
    options: [
      {
        copy: "Walk down the hallway",
        action: "walkDownTheHallway",
      },
      {
        copy: "inspect door to the left",
        action: "inspectDoorToTheLeft",
      },
    ],
  },
  {
    name: "inspectDoorToTheLeft",
    content: "The door is slightly ajar, you cannot see much as you peek in.",
    options: [
      {
        copy: "Open the door",
        action: "openTheDoor",
      },
      {
        copy: "Walk down the hallway",
        action: "walkDownTheHallway",
      },
    ],
  },
  {
    name: "openTheDoor",
    content:
      "You try to open the door but it will not budge, maybe there is something behind the door stopping it...or someone",
    options: [
      {
        copy: "Walk down the hallway",
        action: "walkDownTheHallway",
      },
    ],
  },
  {
    name: "tryToOpenTheDoor",
    content: "The Door handle will not budge.",
    options: [
      {
        copy: "try  again to open the door",
        action: "tryToOpenTheDoor",
      },
      {
        copy: "Go back the the door on the left",
        action: "inspectDoorToTheLeft",
      },
    ],
  },
];
