import MyVButton from './VButton.vue';

export default {
  title: 'Example/VButton',
  component: MyVButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    label: { // not a prop!
      control: {
        type: 'text',
      },
      defaultValue: 'A Button Label',
      description: 'slot content',
      table: {
        type: {
          summary: 'string',
        }
      },
    },
    decorate: { // not a prop!
      control: {
        type: 'text',
      },
      defaultValue: 'A Button Decoration',
      description: 'second slot content',
      table: {
        type: {
          summary: 'string',
        }
      },
    },
  },
};

// re-usable button with label provided in slot
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyVButton },
  template: `<my-v-button @onClick="onClick" v-bind="$props">
    <template v-slot:label>
      {{ label }}
    </template>
  </my-v-button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'A Primary Button',
  primary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'A Secondary Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'A Large Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'A Small Button',
};

// re-usable button with a second slot
const Decorate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyVButton },
  template: `<my-v-button @onClick="onClick" v-bind="$props">
    <template v-slot:label>
      {{ label }}
    </template>
    <template v-slot:decorate>
      {{ decorate }}
    </template>
  </my-v-button>`,
});

export const Decorated = Decorate.bind({});
Decorated.args = {
  label: 'A Decorated Button',
  decorate: 'BOOM BADA BOOM!!!',
};

// simple button with default label
export const Submit = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyVButton },
  template: `<my-v-button @onClick="onClick" v-bind="$props"></my-v-button>`, // no slot data
});
