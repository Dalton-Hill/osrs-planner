export const items = [
  {
    name: 'Maple Logs',
    imageName: 'Maple_logs.png',
    type: 'log',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {location: 'woodcutting', count: 0, isPositive: true, xpPer: 100, levelRequired: 45, imageName: "woodcutting_icon.png"},
      {location: 'firemaking', count: 0, isPositive: false, xpPer: 135, levelRequired: 45, imageName: "Firemaking_icon.png"},
      {location: 'fletching', count: 0, isPositive: false, xpPer: 58.3, levelRequired: 55, imageName: "Fletching_icon.png", productName: "Maple longbow (u)"},
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
      {location: 'fletching', count: 0, isPositive: false, xpPer: 75, levelRequired: 70, imageName: "Fletching_icon.png", productName: "Yew longbow (u)"},
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
      {location: 'fletching', count: 0, isPositive: false, xpPer: 91.5, levelRequired: 85, imageName: "Fletching_icon.png", productName: "Magic longbow (u)"},
    ]
  },
  {
    name: 'Maple longbow (u)',
    imageName: 'Maple_longbow_(u).png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Maple Logs', fromItemLocation: 'fletching', imageName: 'Maple_logs.png'},
      {location: 'fletching', count: 0, isPositive: false, xpPer: 58.2 , levelRequired: 55, imageName: "Fletching_icon.png", productName: "Maple longbow"}
    ]
  },
  {
    name: 'Yew longbow (u)',
    imageName: 'Yew_longbow_(u).png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Yew Logs', fromItemLocation: 'fletching', imageName: 'Yew_logs.png'},
      {location: 'fletching', count: 0, isPositive: false, xpPer: 75, levelRequired: 70, imageName: "Fletching_icon.png", productName: "Yew longbow"}
    ]
  },
  {
    name: 'Magic longbow (u)',
    imageName: 'Magic_longbow_(u).png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Magic Logs', fromItemLocation: 'fletching', imageName: 'Magic_logs.png'},
      {location: 'fletching', count: 0, isPositive: false, xpPer: 91.5, levelRequired: 85, imageName: "Fletching_icon.png", productName: "Magic longbow"}
    ]
  },
  {
    name: 'Maple longbow',
    imageName: 'Maple_longbow.png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Maple longbow (u)', fromItemLocation: 'fletching', imageName: 'Maple_longbow_(u).png'}
    ]
  },
  {
    name: 'Yew longbow',
    imageName: 'Yew_longbow.png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Yew longbow (u)', fromItemLocation: 'fletching', imageName: 'Yew_longbow_(u).png'}
    ]
  },
  {
    name: 'Magic longbow',
    imageName: 'Magic_longbow.png',
    type: 'fletching product',
    counts: [
      {location: 'inventory', count: 0, isPositive: true, imageName: "Inventory.png"},
      {fromItemName: 'Magic longbow (u)', fromItemLocation: 'fletching', imageName: 'Magic_longbow_(u).png'}
    ]
  },
];