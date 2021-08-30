import Dialog from "./Dialog/Dialog.vue";
import Button from "./Button.vue";
import Switch from "./Switch.vue";
import Input from "./Input.vue";
import Tabs from "./Tabs/Tabs.vue";
import Tab from "./Tabs/Tab.vue";
import Row  from "./Grid/Row.vue";
import Col from "./Grid/Col.vue";
import Radio from "./radio/Radio.vue";
import { ComponentOptions } from "vue";

export default {
  install: (app: ComponentOptions) => {
    // Plugin code goes here

    app.component("Input", Input);
    app.component("Button", Button);
    app.component("Dialog", Dialog);
    app.component("Tab", Tab);
    app.component("Tabs", Tabs);
    app.component("Row",Row );
    app.component("Col",Col);
    app.component("Radio",Radio);
  },
};
