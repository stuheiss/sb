import MyVButton from './VButton.vue';

export default {
  title: 'Example/VButton',
  component: MyVButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    label: { // not a prop!
      control: {
        type: 'text',
      },
      defaultValue: 'A Button Label',
      description: 'slot content',
      table: {
        type: {
          summary: null,
        }
      },
    },
    onClick: {
      action: 'clicked',
      table: {
        type: {
          summary: null,
        }
      },
    },
  },
};

// re-usable button with label provided in slot
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyVButton },
  template: `<my-v-button @onClick="onClick" v-bind="$props" v-slot:label>
      {{ label }}
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

export const Green = Template.bind({});
Green.args = {
  label: 'A Green Button',
  backgroundColor: 'green',
  color: 'red',
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

// simple button with no slot data uses default label
export const Submit = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyVButton },
  template: `<my-v-button @onClick="onClick" v-bind="$props"></my-v-button>`, // no slot data
});
