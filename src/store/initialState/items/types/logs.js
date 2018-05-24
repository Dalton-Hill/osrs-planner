import { mapleLogs, yewLogs, magicLogs } from "../allItemNames";


const logs = [
  {
    name: mapleLogs,
    imageName: 'Maple_logs.png',
    type: 'log',
    count: 0,
    counts: [
      {location: 'fletching', count: 0, isPositive: false, xpPer: 58.3, levelRequired: 55, imageName: "Fletching_icon.png", productName: "Maple longbow (u)"},
    ]
  },
  {
    name: yewLogs,
    imageName: 'Yew_logs.png',
    type: 'log',
    count: 0,
    counts: [
      {location: 'fletching', count: 0, isPositive: false, xpPer: 75, levelRequired: 70, imageName: "Fletching_icon.png", productName: "Yew longbow (u)"},
    ]
  },
  {
    name: magicLogs,
    imageName: 'Magic_logs.png',
    type: 'log',
    count: 0,
    counts: [
      {location: 'fletching', count: 0, isPositive: false, xpPer: 91.5, levelRequired: 85, imageName: "Fletching_icon.png", productName: "Magic longbow (u)"},
    ]
  }
];


export default logs;