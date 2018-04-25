import React, { Component } from 'react';
import Blockly from 'node-blockly/browser';
import BlocklyDrawer, { Block, Category } from 'react-blockly-drawer';

export const up =  {
    name: 'forward',
    category: 'Movement',
    block: {
        init: function () {
            this.jsonInit({
                message0: 'move forward %1 steps',
                args0: [
                    {
                        type: 'input_value',
                        name: 'up',
                        check: 'Number',
                    },

                ],
                previousStatement: null,
                nextStatement: null,
                colour: 160,
                tooltip: 'Move forward',
            });
        },
    },
    generator: (block) => {
        const message = `'${block.getFieldValue('up')}'` || '\'\'';
        const code = `console.log('Hello ${message}')`;
        return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
};

export const down =  {
    name: 'backward',
    category: 'Movement',
    colour: 160,
    block: {
        init: function () {
            this.jsonInit({
                message0: 'move backward %1 steps',
                args0: [
                    {
                        type: 'input_value',
                        name: 'down',
                        check: 'Number',
                    },

                ],
                previousStatement: null,
                nextStatement: null,
                colour: 160,
                tooltip: 'Go backward',
            });
        },
    },
    generator: (block) => {
        const message = `'${block.getFieldValue('down')}'` || '\'\'';
        const code = `console.log('Hello ${message}')`;
        return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
};

export const left =  {
    name: 'left',
    category: 'Movement',
    block: {
        init: function () {
            this.jsonInit({
                message0: 'turn left %1 degrees',
                args0: [
                    {
                        type: 'input_value',
                        name: 'left',
                        check: 'Number',
                    },

                ],
                previousStatement: null,
                nextStatement: null,
                colour: 160,
                tooltip: 'Turn left',
            });
        },
    },
    generator: (block) => {
        const message = `'${block.getFieldValue('left')}'` || '\'\'';
        const code = `console.log('Hello ${message}')`;
        return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
};

export const right =  {
    name: 'right',
    category: 'Movement',
    block: {
        init: function () {
            this.jsonInit({
                message0: 'turn right %1 degrees',
                args0: [
                    {
                        type: 'input_value',
                        name: 'right',
                        check: 'Number',
                    },

                ],
                previousStatement: null,
                nextStatement: null,
                colour: 160,
                tooltip: 'Turn right',
            });
        },
    },
    generator: (block) => {
        const message = `'${block.getFieldValue('right')}'` || '\'\'';
        const code = `console.log('Hello ${message}')`;
        return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
};

export const sound =  {
    name: 'sound',
    category: 'Extras',
    block: {
        init: function () {
            this.jsonInit({
                message0: 'play sound',
                previousStatement: null,
                nextStatement: null,
                colour: 160,
                tooltip: 'Play sound',
            });
        },
    },
    generator: (block) => {
        const message = `'${block.getFieldValue('right')}'` || '\'\'';
        const code = `console.log('Hello ${message}')`;
        return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
};

export const light =  {
    name: 'light',
    category: 'Extras',
    block: {
        init: function () {
            this.jsonInit({
                message0: 'light',
                previousStatement: null,
                nextStatement: null,
                colour: 160,
                tooltip: 'Light',
            });
        },
    },
    generator: (block) => {
        const message = `'${block.getFieldValue('right')}'` || '\'\'';
        const code = `console.log('Hello ${message}')`;
        return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
};