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
                        type: 'field_number',
                        name: 'up',
                        value: 1,
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
        const code = `forward(${message})`;
        return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
};

export const down =  {
    name: 'backward',
    colour: 160,
    category: 'Movement',
    block: {
        init: function () {
            this.jsonInit({
                message0: 'move backward %1 steps',
                args0: [
                    {
                        type: 'field_number',
                        name: 'down',
                        value: 1,
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
        const code = `backward(${message})`;
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
                        type: 'field_number',
                        name: 'degree',
                        value: 90
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
        const code = `left(${message})`;
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
                        type: 'field_number',
                        name: 'right',
                        value: 90
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
        const code = `right(${message})`;
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
                args0: null,
                previousStatement: null,
                nextStatement: null,
                colour: 160,
                tooltip: 'Play sound',
            });
        },
    },
    generator: (block) => {
        const code = `sound()`;
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
        const code = `light()`;
        return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
};