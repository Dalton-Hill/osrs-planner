export const items = [
  {
    name: 'Maple Logs',
    imageName: 'Maple_logs.png',
    type: 'log',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {location: 'woodcutting', count: 0, isPositive: true, xpPer: 100, levelRequired: 45, imageName: "woodcutting_icon.png"},
      {location: 'firemaking', count: 0, isPositive: false, xpPer: 135, levelRequired: 45, imageName: "Firemaking_icon.png"},
      {location: 'fletching', count: 0, isPositive: false, imageName: "Fletching_icon.png"},
    ]
  },
  {
    name: 'Yew Logs',
    imageName: 'Yew_logs.png',
    type: 'log',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {location: 'woodcutting', count: 0, isPositive: true, xpPer: 175, levelRequired: 60, imageName: "woodcutting_icon.png"},
      {location: 'firemaking', count: 0, isPositive: false, xpPer: 202.5, levelRequired: 60, imageName: "Firemaking_icon.png"},
      {location: 'fletching', count: 0, isPositive: false, imageName: "Fletching_icon.png"},
    ]
  },
  {
    name: 'Magic Logs',
    imageName: 'Magic_logs.png',
    type: 'log',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {location: 'woodcutting', count: 0, isPositive: true, xpPer: 250, levelRequired: 75, imageName: "woodcutting_icon.png"},
      {location: 'firemaking', count: 0, isPositive: false, xpPer: 303.8 , levelRequired: 75, imageName: "Firemaking_icon.png"},
      {location: 'fletching', count: 0, isPositive: false, imageName: "Fletching_icon.png"},
    ]
  },
  {
    name: 'Maple longbow (u)',
    imageName: 'Maple_longbow_(u).png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Maple Logs', fromItemLocation: 'fletching', imageName: 'Maple_logs.png'},
      {location: 'fletching', count: 0, isPositive: false, imageName: "Fletching_icon.png"}
    ]
  },
  {
    name: 'Yew longbow (u)',
    imageName: 'Yew_longbow_(u).png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Yew Logs', fromItemLocation: 'fletching', imageName: 'Yew_logs.png'},
      {location: 'fletching', count: 0, isPositive: false, imageName: "Fletching_icon.png"}
    ]
  },
  {
    name: 'Magic longbow (u)',
    imageName: 'Magic_longbow_(u).png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Magic Logs', fromItemLocation: 'fletching', imageName: 'Magic_logs.png'},
      {location: 'fletching', count: 0, isPositive: false, imageName: "Fletching_icon.png"}
    ]
  }
];