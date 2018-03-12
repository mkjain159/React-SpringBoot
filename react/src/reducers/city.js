
export function city(state = [], action) {

  switch (action.type) {

    case "CITY":

      return action.a;

    default:
      return state;
  }
}

export function view(state = [], action) {

  switch (action.type) {

    case "VIEW":

      return action.view;

    default:
      return state;
  }
}
export function cityDetail(state = [], action) {

  switch (action.type) {

    case "DETAIL":

      return action.cityDetail;

    default:
      return state;
  }
}
