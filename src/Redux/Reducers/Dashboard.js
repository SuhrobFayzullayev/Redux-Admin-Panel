import {
  ADD_CATEGORY,
  ADD_PRODUCT,
  DELETE_USER,
  EDIT_USER_ROLE,
} from "../Types";

const initialState = {
  data: [
    {
      fulName: "Suhrob Fayzullayev",
      foodName: "osh",
      price: 20,
      num: 2,
      phoneNum: "90-933-78-72",
      comment: "lorem ipsum",
    },
    {
      fulName: "Suhrob Fayzullayev",
      foodName: "osh",
      price: 20,
      num: 2,
      phoneNum: "90-933-78-72",
      comment: "lorem ipsum",
    },
    {
      fulName: "Suhrob Fayzullayev",
      foodName: "osh",
      price: 20,
      num: 2,
      phoneNum: "90-933-78-72",
      comment: "lorem ipsum",
    },
    {
      fulName: "Suhrob Fayzullayev",
      foodName: "osh",
      price: 20,
      num: 2,
      phoneNum: "90-933-78-72",
      comment: "lorem ipsum",
    },
    {
      fulName: "Suhrob Fayzullayev",
      foodName: "osh",
      price: 25,
      num: 5,
      phoneNum: "90-933-78-72",
      comment: "lorem ipsum",
    },
  ],

  userData: [
    {
      fullName: "Jasur",
      phoneNum: "90-933-78-72",
      roli: "Foydalanuvchi",
    },
    {
      fullName: "Saydakbarov",
      phoneNum: "90-933-78-72",
      roli: "Admin",
    },
    {
      fullName: "Suhrob",
      phoneNum: "90-933-78-72",
      roli: "Yetkazuvchi",
    },
    {
      fullName: "KKKKKK",
      phoneNum: "90-933-78-72",
      roli: "Foydalanuvchi",
    },
  ],

  add: {
    category: [],
    goods: [{ url: "", name: "", description: "", price: "", category: "" }],
  },
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    // User
    case DELETE_USER: {
      const userData = [...state.userData];
      userData.splice(action.payload, 1);
      console.log(userData);

      return {
        ...state,
        userData,
      };
    }

    case EDIT_USER_ROLE: {
      const userData = [...state.userData];
      userData[action.payload.i].roli = action.payload.v;

      return {
        ...state,
        userData,
      };
    }

    // Add
    case ADD_CATEGORY: {
      return {
        ...state,
        add: {
          ...state.add,
          category: [...state.add.category, action.payload],
        },
      };
    }

    case ADD_PRODUCT:
      return {
        ...state,
        add: { ...state.add, goods: [...state.add.goods, action.payload] },
      };

    default:
      return state;
  }
};

export default dashboardReducer;
