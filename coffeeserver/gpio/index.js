import { EventEmitter } from 'events';

import gpio from 'rpi-gpio';

import { onPowerLightChange, onTrashLightChange, onWaterLightChange } from './status';

const channels = [
  { number: 7, name: 'power_led', direction: gpio.DIR_IN, edge: gpio.EDGE_BOTH, onChange: onPowerLightChange }, // should we use interrupts for the LEDs?
  { number: 11, name: 'trash_led', direction: gpio.DIR_IN, edge: gpio.EDGE_BOTH, onChange: onTrashLightChange },
  { number: 12, name: 'water_led', direction: gpio.DIR_IN, edge: gpio.EDGE_BOTH, onChange: onWaterLightChange },
  { number: 13, name: 'PRESS_power', direction: gpio.DIR_OUT, edge: gpio.EDGE_NONE },
  { number: 15, name: 'PRESS_espresso', direction: gpio.DIR_OUT, edge: gpio.EDGE_NONE },
  { number: 16, name: 'PRESS_espresso_doppio', direction: gpio.DIR_OUT, edge: gpio.EDGE_NONE },
  { number: 18, name: 'PRESS_lungo', direction: gpio.DIR_OUT, edge: gpio.EDGE_NONE },
  { number: 22, name: 'PRESS_lungo_doppio', direction: gpio.DIR_OUT, edge: gpio.EDGE_NONE },
  { number: 29, name: 'EVENT_espresso', direction: gpio.DIR_IN, edge: gpio.EDGE_RISING, onChange: e => console.log(e) }, // we are not interested in the events when pressing button ends
  {
    number: 31,
    name: 'EVENT_espresso_doppio',
    direction: gpio.DIR_IN,
    edge: gpio.EDGE_RISING,
    onChange: e => console.log(e),
  },
  { number: 32, name: 'EVENT_lungo', direction: gpio.DIR_IN, edge: gpio.EDGE_RISING, onChange: e => console.log(e) },
  {
    number: 33,
    name: 'EVENT_lungo_doppio',
    direction: gpio.DIR_IN,
    edge: gpio.EDGE_RISING,
    onChange: e => console.log(e),
  },
];

const setupGPIO = async () =>
  Promise.all(
    channels.map(channel =>
      new Promise((resolve, reject) => {
        gpio.setup(channel.number, channel.direction, channel.edge, err => {
          if (err) reject(err);
          else resolve(`channel ${channel.number} successfully setup`);
        });
      }).catch(e => console.error(e)),
    ),
  );

gpio.on('change', args => {
  console.log(args);
  const channel = channels.find(c => c.number === args.channel);
  if (typeof channel.onChange === 'function') channel.onChange();
});

export default setupGPIO;
