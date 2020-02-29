import gpio from 'rpi-gpio';

const channels = [
  { number: 7, name: 'power_led', direction: gpio.DIR_IN, edge: gpio.EDGE_BOTH }, // should we use interrupts for the LEDs?
  { number: 11, name: 'trash_led', direction: gpio.DIR_IN, edge: gpio.EDGE_BOTH },
  { number: 12, name: 'water_led', direction: gpio.DIR_IN, edge: gpio.EDGE_BOTH },
  { number: 13, name: 'PRESS_power', direction: gpio.DIR_OUT, edge: gpio.EDGE_NONE },
  { number: 15, name: 'PRESS_espresso', direction: gpio.DIR_OUT, edge: gpio.EDGE_NONE },
  { number: 16, name: 'PRESS_espresso_doppio', direction: gpio.DIR_OUT, edge: gpio.EDGE_NONE },
  { number: 18, name: 'PRESS_lungo', direction: gpio.DIR_OUT, edge: gpio.EDGE_NONE },
  { number: 22, name: 'PRESS_lungo_doppio', direction: gpio.DIR_OUT, edge: gpio.EDGE_NONE },
  { number: 29, name: 'EVENT_espresso', direction: gpio.DIR_IN, edge: gpio.EDGE_RISING }, // we are not interested in the events when pressing button ends
  { number: 31, name: 'EVENT_espresso_doppio', direction: gpio.DIR_IN, edge: gpio.EDGE_RISING },
  { number: 32, name: 'EVENT_lungo', direction: gpio.DIR_IN, edge: gpio.EDGE_RISING },
  { number: 33, name: 'EVENT_lungo_doppio', direction: gpio.DIR_IN, edge: gpio.EDGE_RISING },
];

channels.forEach(channel => {
  gpio.setup(channel.number, channel.direction, channel.edge, err => {
    if (err) console.error(err);
    else console.log(`channel ${channel.number} successfully setup`);
  });
});
