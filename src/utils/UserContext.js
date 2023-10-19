import { createContext } from "react";

const UserContext = createContext({
  user: { 
    name: "dummy name", 
    email: "dummy@gmail.com" 
  },
});

UserContext.displayName = "userContext" //only for debbuging - to show the name of context in developer tool
export default UserContext;
