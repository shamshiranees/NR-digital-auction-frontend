const INITIAL_STATE = {
  project: {
    id: "123112",
    name: "Project Wheat New",
    minimum_fund_required: "50000",
    location: "kochi",
    images: [
      "https://themezhub.net/resido-live/resido/assets/img/p-2.jpg",
      "s3imageurl2",
    ],
    fund_received: "50000",
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
}
export default function (state = INITIAL_STATE, action) {
  const { type } = action
  switch (type) {
    case "1":
      return { ...state }

    default:
      return state
  }
}
