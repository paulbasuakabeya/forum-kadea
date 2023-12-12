/*import React from "react";
const UserContext = React.createContext({
   isLogged: false,
   pseudo: null
});

export default UserContext;*/

import { createContext } from "react";

const UserContext = createContext({
   isLogged: false,
   pseudo: null
});

export default UserContext;