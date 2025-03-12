// import type { MetaRecord } from "nextra";

/* eslint-disable import/no-anonymous-default-export */
const SKILL = {
  "weapon-skill": "",
  "assist-skill": "",
  "buff-skill": "",
  "other-skill": "",
};

const EQUIPMENT = {
  weapon: "",
  "sub-weapon": "",
  armor: "",
  addittional: "",
  special: "",
};

const ITEM = {
  dye: "",
  consumable: "",
  registlet: "",
  crysta: "",
  material: "",
};

const MONSTER = {
  normal: "",
  "mini-boss": "",
  boss: "",
};

export default {
  index: {
    type: "page",
    display: "hidden",
  },
  docs: {
    type: "page",
    title: "Documentation",
    items: {
      index: "",
      skill: { items: SKILL },
      equipment: { items: EQUIPMENT },
      item: { items: ITEM },
    },
  },
  blog: {
    type: "page",
    title: "Blog",
  },
};
