'use strict';

var vue = require('vue');

var script$2 = {
 name: 'E2Button',
 props: {
     buttonText : String 
 }   
};

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("button", null, vue.toDisplayString($props.buttonText), 1 /* TEXT */))
}

script$2.render = render$2;
script$2.__file = "src/E2Button.vue";

var script$1 = {
       name: 'E2InputText'
   };

const _hoisted_1$1 = { type: "text" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("input", _hoisted_1$1))
}

script$1.render = render$1;
script$1.__file = "src/E2InputText.vue";

var script = {
       name: 'E2InputTextArea'
   };

const _hoisted_1 = {
  rows: "",
  cols: ""
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("textarea", _hoisted_1))
}

script.render = render;
script.__file = "src/E2InputTextArea.vue";

var components = {
    E2Button: script$2,
    E2InputText: script$1,
    E2InputTextArea: script,
};

const plugin = {
    install(Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop];
                Vue.component(component.name, component);
            }
        }
    }
};

module.exports = plugin;
