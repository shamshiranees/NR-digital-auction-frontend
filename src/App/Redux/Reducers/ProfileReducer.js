import {
  SET_CURRENCY_DATA,
  ADD_CURRENCY,
  REMOVE_CURRENCY,
  SET_ALL_PROJECTS,
} from "../Actions/types";

const INITIAL_STATE = {
  projects: [
    {
      id: "12312",
      name: "Project Wheat",
      minimum_fund_required: "50000",
      location: "kochi",
      Phone: "949513222",
      images: [
        "https://themezhub.net/resido-live/resido/assets/img/p-3.jpg",
        "s3imageurl2",
      ],
      fund_received: "0",
      fund: "200000",
      end_date: "07/07/2020",
      duration: "3",
      start_date: "07/04/2020",
      status: "fund_awaiting",
      other_comments: "",
      portions: "50",
      documents: ["s3imageurl1", "s3imageurl2"],
      detailed_description: "sda sdjahd sjkd",
      description: "sdajhd sdahj",
      crop: "Wheatgrass",
    },
    {
      id: "123112",
      name: "Project Wheat New",
      minimum_fund_required: "50000",
      location: "kochi",
      Phone: "949513222",
      images: [
        "https://themezhub.net/resido-live/resido/assets/img/p-2.jpg",
        "s3imageurl2",
      ],
      fund_received: "0",
      fund: "200000",
      end_date: "07/07/2020",
      duration: "3",
      start_date: "07/04/2020",
      status: "fund_awaiting",
      other_comments: "",
      portions: "50",
      documents: ["s3imageurl1", "s3imageurl2"],
      detailed_description: "sda sdjahd sjkd",
      description: "sdajhd sdahj",
      crop: "Wheatgrass",
    },
  ],
};
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ALL_PROJECTS:
      return { ...state, projects: action.payload };
    case ADD_CURRENCY:
      return {
        ...state,
        myCurrencies: [...state.myCurrencies.concat(action.payload)],
      };
    case REMOVE_CURRENCY:
      return {
        ...state,
        myCurrencies: removeVal(state.myCurrencies, action.payload),
      };
    default:
      return state;
  }
}

function removeVal(myCurrencies, val) {
  var array = JSON.parse(JSON.stringify(myCurrencies));
  var index = array.indexOf(val);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}
