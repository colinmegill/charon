const inits = {
  flu: "c=region&r=country",
  avian: "c=division&r=division"
};

const seasonal = {
  segment: {
    ha: {
      resolution: {"3y": inits.flu, "6y": inits.flu, "12y": inits.flu, default: "6y"}
    },
    default: "ha"
  }
};

const hardcodedAuspiceData = {
  ebola: "c=division&r=division",
  zika: "",
  dengue: {
    serotype: {
      all: "",
      denv1: "",
      denv2: "",
      denv3: "",
      denv4: "",
      default: "all"
    }
  },
  avian: {
    lineage: {
      h7n9: {
        segment: {
          pb2: inits.avian,
          pb1: inits.avian,
          pa: inits.avian,
          ha: inits.avian,
          np: inits.avian,
          na: inits.avian,
          mp: inits.avian,
          ns: inits.avian,
          default: "ha"
        }
      },
      default: "h7n9"
    }
  },
  flu: {
    lineage: {
      h3n2: seasonal,
      vic: seasonal,
      yam: seasonal,
      h1n1pdm: seasonal,
      default: "h3n2"
    }
  },
  default: "zika"
};

const generateDatasetsFromFS = (user) => {
  return {
    user,
    dataURLStem: "/data/",
    pathogen: hardcodedAuspiceData,
    splash: [
      {img: "TO DO", url: "/zika", title: "Zika (ZIKV)"},
      {img: "TO DO", url: "/ebola", title: "Ebola (EBOV)"},
      {img: "TO DO", url: "/flu/h3n2/ha", title: "Seasonal Influenza"},
      {img: "TO DO", url: "/avian/h7n9", title: "Avian Influenza"},
      {img: "TO DO", url: "/dengue", title: "Dengue"}
    ]
  };
};

module.exports = {
  generateDatasetsFromFS
};

/* here was the hardcoded auspice stuff:
export const dataURLStem = process.env.DATA_LOCAL ? "/data/" : "http://data.nextstrain.org/";
*/
